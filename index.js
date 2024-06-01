import express from 'express';

import database from './config/database.js';

import {
    productoRoutes,
    categoriaRoutes,
    usuarioRoutes,
    ordenRoutes,
    ordenProductoRoutes,
} from './routes/index.js';

import { Categoria, Producto } from './models/index.js';

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


async function seed() {
    try {
        const categorias = await Categoria.findAll();
        if (categorias.length === 0) {
            await Categoria.bulkCreate([
                {
                    id: 1,
                    nombre: "Hombre",
                    descripcion: "Ropa Masculina",
                },
                {
                    id: 2,
                    nombre: "Mujer",
                    descripcion: "Ropa Femenina",
                },
                {
                    id: 3,
                    nombre: "Niños",
                    descripcion: "Ropa Infantil",
                },
            ]);
            console.log(
                "\x1b[36m%s\x1b[0m",
                "Categorias were created successfully."
            );
        }
    }
    catch (error) {
        console.error(
            "\x1b[31m%s\x1b[0m",
            "Unable to create categorias:",
            error
        );
    }


    try {
        const productos = await Producto.findAll();
        if (productos.length === 0) {
            await Producto.bulkCreate([
                {
                    "id": 1,
                    "nombre": "Vestido corto",
                    "precio": "20.00",
                    "stock": 15,
                    "descripcion": "Vestido de verano",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2022/08/15/16605358051c0a553d6703c927b74cba08e71f43bd_thumbnail_720x.webp",
                    "categoriaId": 2
                  },
                  {
                    "id": 2,
                    "nombre": "Mom jeans",
                    "precio": "30000.00",
                    "stock": 30,
                    "descripcion": "Ropa de verano",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2021/09/17/1631847935ed09ae6b27d55e64a8c894bc8030b571_thumbnail_336x.jpg",
                    "categoriaId": 2
                  },
                  {
                    "id": 3,
                    "nombre": "Reloj para hombre",
                    "precio": "10000.00",
                    "stock": 30,
                    "descripcion": "Accesorios para hombres",
                    "imagen": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.shein.com%2FRelojes-de-hombre-Negro-Negocio-p-998141-cat-2268.html&psig=AOvVaw3gelVFshFd6GC6cjTGSOdG&ust=1717343238169000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKittaLguoYDFQAAAAAdAAAAABAI",
                    "categoriaId": 1
                  },
                  {
                    "id": 4,
                    "nombre": "Jogger",
                    "precio": "40.00",
                    "stock": 30,
                    "descripcion": "Pantalones para hombres",
                    "imagen": "https://i.pinimg.com/originals/85/0b/9d/850b9db2b95d4c42d87342f151f23586.png",
                    "categoriaId": 1
                  },
                  {
                    "id": 5,
                    "nombre": "Bikini",
                    "precio": "15.00",
                    "stock": 40,
                    "descripcion": "Ropa de verano",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2023/05/03/1683090826f4519c51905be0a290d5d477cbf407c8_thumbnail_720x.webp",
                    "categoriaId": 2
                  },
                  {
                    "id": 6,
                    "nombre": "Camiseta botones",
                    "precio": "20.00",
                    "stock": 40,
                    "descripcion": "Ropa de verano",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2023/08/28/15/169318887068e8d858bf3676d7257df7cf871160f4_thumbnail_336x.jpg",
                    "categoriaId": 1
                  },
                  {
                    "id": 7,
                    "nombre": "Conjunto",
                    "precio": "35.00",
                    "stock": 100,
                    "descripcion": "Ropa de verano",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2022/12/26/1671987055a795562c86c0913e887d805c1455a751_thumbnail_720x.webp",
                    "categoriaId": 3
                  },
                  {
                    "id": 8,
                    "nombre": "Vestido casual",
                    "precio": "50.00",
                    "stock": 100,
                    "descripcion": "Ropa casual",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2023/05/24/1684889645e4b67793ce7f97bc925a73d97b2dc856_thumbnail_720x.webp",
                    "categoriaId": 2
                  },
                  {
                    "id": 9,
                    "nombre": "Pantalones de vestir",
                    "precio": "70.00",
                    "stock": 100,
                    "descripcion": "Ropa formal",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2023/07/10/16889669061485998c47c34c0045ff45ee64956c08_thumbnail_336x.webp",
                    "categoriaId": 1
                  },
                {
                    "id": 10,
                    "nombre": "Gorra",
                    "precio": "15.00",
                    "stock": 100,
                    "descripcion": "Accesorios casual",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2022/07/27/1658902573b74b1fc7162cff9e5f19785052dbb95f_thumbnail_336x.jpg",
                    "categoriaId": 1
                  },
                  {
                    "id": 11,
                    "nombre": "Traje de baño",
                    "precio": "40.00",
                    "stock": 100,
                    "descripcion": "Accesorios casual",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2023/06/13/1686633311f089efb7099db17d8b919852c9901453_thumbnail_336x.webp",
                    "categoriaId": 3
                  },
                  {
                    "id": 12,
                    "nombre": "Pijamas niños",
                    "precio": "40.00",
                    "stock": 100,
                    "descripcion": "Ropa casual",
                    "imagen": "https://img.ltwebstatic.com/images3_pi/2023/09/25/bb/1695607566e4575e653a58f8b949bdf5b07726dea3_thumbnail_336x.jpg",
                    "categoriaId": 3
                  }
            ]);
            console.log(
                "\x1b[36m%s\x1b[0m",
                "Productos were created successfully."
            );
        }
    }
    catch (error) {
        console.error(
            "\x1b[31m%s\x1b[0m",
            "Unable to create productos:",
            error
        );
    }
}

await seed();
    

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
