export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Ecommerce',
            version: '1.0.0',
            description: 'Curso Backend'
        },
        servers: [
            {
                url: process.env.APPURL
            }
        ]
    },
    apis: ['./src/docs/*.yml']
};