import express from 'express';

import database from './config/database.js';

import {
    productoRoutes,
    categoriaRoutes,
    usuarioRoutes,
    ordenRoutes,
    ordenProductoRoutes,
} from './routes/index.js';

import corsOptions from './config/corsOptions.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Verificar y crear tablas
async function dbConnection() {
    try {
        //establishing a connection to the database
        await database.authenticate();
        console.log(
            "\x1b[36m%s\x1b[0m",
            "Connection has been established successfully."
        );

        try {
            //synchronizing the models with the database
            await database.sync({ force: false });
            console.log(
                "\x1b[36m%s\x1b[0m",
                "All models were synchronized successfully."
            );
        } catch (error) {
            console.error(
                "\x1b[31m%s\x1b[0m",
                "Unable to synchronize the models with the database:",
                error
            );
        }
    } catch (error) {
        console.error(
            "\x1b[31m%s\x1b[0m",
            "Unable to connect to the database:",
            error
        );
    }
}
//calling the function to establish a connection to the database
await dbConnection();

// Rutas
app.use("/api", productoRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", ordenRoutes);
app.use("/api", ordenProductoRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        error: "Not found",
        message: `The resource ${req.originalUrl} was not found`,
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(
        "\x1b[32m%s\x1b[0m",
        `Server started. The server is running on Port: ${port}`
    );
});
