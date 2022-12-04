# Primera sesión
## [Paso 1] Comando de creación del proyecto
```
npm init
```
## [Paso 2] Instalación de express web framework
```
npm i express
```
## [Paso 3] Instalación de nodemon para detección de cambios de código y ejecución automática del servidor
```
npm i -D nodemon
```
## [Paso 4] Se ejecuta el servidor con el siguiente comando para el perfil dev, se debe configurar el perfil de producción posteriormente en el package.json
```
npm run dev
```
## [Paso 5] Instalación ORM mongoose y configuración de variables para conexión a BD
```
npm i mongoose
```

# Segunda sesión
## [Paso 1] Definición del modelo usuario con mongoose
## [Paso 2] Creación de rutas para la API usuario en el archivo usuarioRouters.js
## [Paso 3] Creación de controlador de usuarios

# Tercera sesión
## [Paso 1] Instalación bcrypt para encriptar la contraseña y pruebas con postman del endpoint para crear usuarios

# Cuarta sesión
## [Paso 1] Validación de existencia de usuarios en la base de datos por email para no duplicar cuentas (archivo usuarioController.js).
## [Paso 2] Creación de los archivos authController.js y authRouters.js para realizar la autenticación con JWT.