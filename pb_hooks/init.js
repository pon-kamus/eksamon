/// <reference path="../pb_data/types.d.ts" />

onBootstrap((e) => {
    try {
        const users = $app.findCollectionByNameOrId("users");

        // Add role field to users
        const roleField = users.fields.find(f => f.name === 'role');
        if (!roleField) {
            users.fields.push(new SchemaField({
                name: 'role',
                type: 'select',
                required: true,
                values: ['student', 'teacher', 'admin']
            }));
            $app.save(users);
        }

        // Create other collections
        const collections = [
            {
                name: 'courses',
                type: 'base',
                fields: [
                    { name: 'name', type: 'text', required: true },
                    { name: 'teacher', type: 'text' },
                    { name: 'progress', type: 'number' },
                    { name: 'image', type: 'url' }
                ],
                listRule: "",
                viewRule: ""
            },
            {
                name: 'assignments',
                type: 'base',
                fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'course', type: 'text' },
                    { name: 'due', type: 'text' },
                    { name: 'submissions', type: 'text' },
                    { name: 'status', type: 'text' }
                ],
                listRule: "",
                viewRule: ""
            },
            {
                name: 'audit_logs',
                type: 'base',
                fields: [
                    { name: 'event', type: 'text' },
                    { name: 'user', type: 'text' },
                    { name: 'ip', type: 'text' }
                ],
                listRule: "",
                viewRule: ""
            }
        ];

        for (const c of collections) {
            try {
                $app.findCollectionByNameOrId(c.name);
            } catch (err) {
                const collection = new Collection({
                    name: c.name,
                    type: c.type,
                    listRule: c.listRule,
                    viewRule: c.viewRule,
                });
                for (const f of c.fields) {
                    collection.fields.push(new SchemaField(f));
                }
                $app.save(collection);
            }
        }

        // Seed Users
        const accounts = [
            { email: 'student@school.edu', password: 'password123', role: 'student', name: 'Alex Rivers' },
            { email: 'teacher@school.edu', password: 'password123', role: 'teacher', name: 'Emily Stone' },
            { email: 'admin@school.edu', password: 'password123', role: 'admin', name: 'Admin Root' }
        ];

        for (const account of accounts) {
            try {
                $app.findAuthRecordByEmail("users", account.email);
            } catch (err) {
                const record = new Record(users);
                record.setEmail(account.email);
                record.setPassword(account.password);
                record.set("role", account.role);
                record.set("name", account.name);
                $app.save(record);
            }
        }

        // Seed Courses
        const coursesColl = $app.findCollectionByNameOrId("courses");
        const existingCourses = $app.findRecordsByFilter("courses", "1=1", "-created", 1);
        if (existingCourses.length === 0) {
            const seedCourses = [
                { name: 'Advanced Mathematics', teacher: 'Mr. Harrison', progress: 75, image: 'https://images.unsplash.com/photo-1509228468518-180dd4822955?w=400&h=250&fit=crop' },
                { name: 'Theoretical Physics', teacher: 'Ms. Sarah', progress: 45, image: 'https://images.unsplash.com/photo-1636466483764-4e45c7a4cbda?w=400&h=250&fit=crop' },
                { name: 'English Literature', teacher: 'Mrs. Gable', progress: 90, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop' }
            ];
            for (const sc of seedCourses) {
                const record = new Record(coursesColl);
                record.set("name", sc.name);
                record.set("teacher", sc.teacher);
                record.set("progress", sc.progress);
                record.set("image", sc.image);
                $app.save(record);
            }
        }

        // Seed Audit Logs
        const logsColl = $app.findCollectionByNameOrId("audit_logs");
        const existingLogs = $app.findRecordsByFilter("audit_logs", "1=1", "-created", 1);
        if (existingLogs.length === 0) {
            for (let i = 0; i < 5; i++) {
                const record = new Record(logsColl);
                record.set("event", "USER_LOGIN_SUCCESS");
                record.set("user", "user_" + i);
                record.set("ip", "192.168.1." + (10 + i));
                $app.save(record);
            }
        }

    } catch (err) {
        console.error(err);
    }
})
