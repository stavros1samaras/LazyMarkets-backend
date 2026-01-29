import swaggerJSDoc from "swagger-jsdoc";

const ENV = process.env.NODE_ENV;
let curlUrl;

if (ENV == "dev") {
    curlUrl = "http://localhost:3001"
}
else if (ENV == "prod") {
    curlUrl = "http://localhost:3001"
}

const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "x-api-key",
                },
            },
        },

        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        info: {
            title: "Finance API",
            version: "1.0.0",
            description: "All API documentation in one file",
        },
        servers: [
            {
                url: curlUrl,
            },
        ],
    },

    apis: ["./swagger.docs.js"],
});

export default swaggerSpec;
