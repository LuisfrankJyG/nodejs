# nodejs
# 📌 API CRUD de Usuarios con Node.js, Express y Sequelize

Este proyecto implementa una **API RESTful** en Node.js para gestionar usuarios utilizando **Express** como framework de servidor y **Sequelize** como ORM para conectarse a una base de datos MySQL

---

## 🚀 Funcionalidades

La API permite realizar las operaciones básicas de un CRUD sobre el modelo **Usuario**:

- ✅ **Crear usuario (POST)** → `POST /api/usuario`
- ✅ **Listar todos los usuarios (GET)** → `GET /api/usuario`
- ✅ **Obtener un usuario por ID (GET)** → `GET /api/usuario/:id`
- ✅ **Actualizar usuario (PUT)** → `PUT /api/usuario/:id`
- ✅ **Eliminar usuario (DELETE)** → `DELETE /api/usuario/:id`

Cada usuario cuenta con los siguientes atributos:

- `id` (autoincremental)
- `nombre` (string)
- `email` (string)
- `password` (encriptado con bcrypt)
- `activo` (boolean)
- `createdAt` / `updatedAt` (timestamps)

---

## ⚙️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) para encriptar contraseñas
- [dotenv](https://www.npmjs.com/package/dotenv) para variables de entorno
- [helmet](https://helmetjs.github.io/) y [cors](https://www.npmjs.com/package/cors) para seguridad

---

## 📂 Estructura del proyecto

├── controllers/
│ └── usuarioController.js
├── routes/
│ └── usuarios.js
├── models/
│ └── usuario.js
├── migrations/
├── seeders/
├── index.js
└── README.md

---

## ▶️ Instrucciones para ejecutar el proyecto

1. Clonar el repositorio  
   ```bash
   git clone https://github.com/LuisfrankJyG/nodejs.git
   cd nodejs
   
Instalar dependencias

npm install
Configurar las variables de entorno en un archivo .env

DB_HOST=localhost
DB_USER=root
DB_PASS=tu_password
DB_NAME=tu_basedatos
DB_DIALECT=mysql
PORT=3000
Ejecutar migraciones y seeders (usuarios demo)

npm run db:migrate
npm run db:seed
Iniciar servidor

npm start
El servidor quedará corriendo en:
👉 http://localhost:3000

📡 Endpoints principales
🔹 Obtener todos los usuarios
GET /api/usuario

🔹 Obtener usuario por ID
GET /api/usuario/:id

🔹 Crear nuevo usuario
POST /api/usuario
Body JSON:

{
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "password": "123456",
  "activo": true
}
🔹 Actualizar usuario
PUT /api/usuario/:id
Body JSON:

{
  "nombre": "Juan Actualizado",
  "password": "nuevaClave123",
  "activo": false
}
🔹 Eliminar usuario
DELETE /api/usuario/:id

🧪 Pruebas con Insomnia
Todas las pruebas de la API se realizaron utilizando Insomnia.
📎 Aquí puedes ver el archivo PDF con capturas de las pruebas:

👉 [CRUD Insomnia - Pruebas](https://senatipe-my.sharepoint.com/personal/1511007_senati_pe/Documents/CRUD%20Insomnia.pdf)

✨ Autor -> Luis Solano
Proyecto desarrollado como parte de la práctica académica en Senati.
El objetivo es comprender el flujo de un CRUD completo en Node.js con Sequelize y el uso de herramientas de prueba de APIs
