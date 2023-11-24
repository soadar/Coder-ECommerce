export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Ecommerce',
            version: '1.0.0',
            description: `Curso Backend
            - [Coder E-Commerce](/)`
        },
        servers: [
            {
                url: process.env.APPURL,
                description: "Live Server"
            },
            {
                url: "http://localhost:8080",
                description: "Local Server"
            }
        ]
    },
    apis: ['./src/docs/*.yml']
};