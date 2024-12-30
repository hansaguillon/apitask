# Task Manager Backend 📝

## Descripción
**Task Manager Backend** es la API de backend para la **Task Manager App**, construida con **NestJS** y **MongoDB**. Permite gestión de tareas y autenticación de usuarios.

**Estado del Proyecto**: En desarrollo activo

## Características
- **Gestión de Tareas**: CRUD completo
- **API Documentation**: Swagger integrado
- **Validaciones**: Implementadas con class-validator

## Tecnologías Utilizadas
- Node.js
- NestJS
- MongoDB (Mongoose)
- Swagger
- class-validator

## Instalación

```bash
git clone https://github.com/hansaguillon/apitask.git
cd apitask
npm install
```

## Configuración de Variables de Entorno
Crea un archivo `.env`:

```env
MONGODB_USER=tu_usuario
MONGODB_PASS=tu_contraseña
MONGODB_CLUSTER=tu_cluster
MONGODB_DATABASE=tu_base_de_datos
```

## Activación del Backend

1. Iniciar en desarrollo:
```bash
npm run start:dev
```

2. Acceder a:
- API: http://localhost:3000/task
- Documentación: http://localhost:3000/docs

### Despliegue
El proyecto está desplegado en la siguiente plataforma:
- **Backend**: [API de Tareas en Render](https://apitask-ixqf.onrender.com/task)

---

### Activación del Backend Online
Debido al comportamiento de Render, el backend entra en estado de hibernación cuando no está en uso. Para garantizar el correcto funcionamiento de la aplicación:

1. Accede a la URL del backend en Render:
   ```bash
   https://apitask-ixqf.onrender.com/task
   ```
2. Una vez que la página cargue, el backend estará activo y podrás utilizar el frontend normalmente.

---

## Contribuciones

1. Fork el proyecto
2. Crea tu rama:
```bash
git checkout -b feature/nueva-funcionalidad
```

3. Commit cambios:
```bash
git commit -m 'Descripción de la funcionalidad'
```

4. Envía Pull Request

## Contacto
- 📧 Email: hansaguillon@gmail.com
- 🌐 LinkedIn: [Juan Pedro Aguillón](https://www.linkedin.com/in/juanpedroaguillon/)
