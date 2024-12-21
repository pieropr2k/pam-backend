# UNI.COOK - BACKEND

### Technologies used:  
- Express
- Node
  
### Steps to run the proyect  
  
1. Clone the Repository with:  
```git
    git clone https://github.com/pieropr2k/pam-backend.git
```
  
2. Install the dependecies used to the backend:  
```git
    npm install
```

3. Run the backend:  
```git
    npm run dev
```

## Resumen de Endpoints

### Autenticacion (auth.controller.js)

1. **`register`**  
   Registra un nuevo usuario verificando si el correo ya existe, hasheando la contraseña, para asi crear el usuario en la base de datos y generando un token de acceso que se envía como cookie.

2. **`login`**  
   Inicia sesión verificando si el correo y la contraseña son correctos, y genera un token de acceso que se envía como cookie.

3. **`verifyToken`**  
   Verifica si el token enviado en las cookies es válido y lo decodifica, con esta información busca al usuario en la base de datos y devuelve sus datos básicos si el token es válido.

4. **`logout`**  
   Elimina el token de acceso estableciendo una cookie vacía con una fecha de expiración pasada, cerrando así la sesión del usuario.


### Recetas Favoritas (favorites.controller.js)

1. **`createFavoriteRecipe`**  
   Crea una receta favorita asociada al usuario autenticado, verifica la existencia de la receta mediante su `recipe_id`, y devuelve la información de la receta favorita con ayuda de la API.

2. **`getAllFavoriteRecipes`**  
   Obtiene todas las recetas favoritas del usuario respectivo y autenticado, devolviendo la información detallada de cada una de ellas.

3. **`deleteFavoriteRecipe`**  
   Elimina una receta favorita específica asociada al usuario autenticado, identificada por su `recipe_id`.


### Recetas (recipes.controller.js)

1. **`getInfoById`**  
   Obtiene información detallada de una receta específica por su `id` (nombre, área, ingredientes, instrucciones, imagen y enlace de YouTube).

2. **`getRecipeByName`**  
   Busca una receta por su `name` y devuelve el nombre de la receta y su imagen.

3. **`getCategory`**  
   Obtiene recetas según una categoría específica o devuelve una lista predefinida de recetas si la categoría es "All".

### Chat (chat.controller.js)

1. **`handleResponse`**  
   Procesa un prompt enviado por el usuario y genera una respuesta usando el modelo de OpenAI (`gpt-3.5-turbo-1106`). Incluye un mensaje inicial del sistema relacionado con la receta y devuelve la respuesta generada. Devuelve errores si el prompt es inválido o si ocurre algún problema al procesar la solicitud.


## Middlewares:

### Resumen del Middleware

1. **`auth() (auth.middleware.js)`**  
   Middleware de autenticación que se usara previamente a algunos endpoints que verifica si existe un token en las cookies del cliente. Si el token está presente y es válido, almacena los datos del usuario en `request.user` y permite continuar con la solicitud siguiente. Si el token falta o no es válido, responde con un estado de error (401 o 500).

2. **`getRecipeInfo() (getRecipe.middleware.js)`**  
   Middleware para retornar la informacion de una receta en base a su id.

3. **`createAccessToken()`**  
   Genera un token de acceso firmado con un payload específico usando el secreto definido en `TOKEN_SECRET`. El token tiene una duración de 1 día y es devuelto como una promesa.

## Estructura de las carpetas


```
│   
├── controllers/  
│   └── Aquí se encuentra toda la lógica de negocio, como las funciones que procesan las solicitudes y responden a los endpoints. 
├── database/  
│   └── Contiene la inicialización de la base de datos y las configuraciones necesarias para conectarse a ella. 
│   
├── libs/  
│   └── Contiene funciones reutilizables o librerías específicas del proyecto.
│   
├── middlewares/  
│   └── Incluye funciones que actúan como intermediarios para las solicitudes.
│   
├── models/  
│   └── Define los elementos y relaciones de la base de datos, utilizando un ORM como Sequelize.  
│   
├── routes/  
│   └── Contiene todas las rutas de la API, organizando y conectando los endpoints con sus respectivos controladores.  
│   
└── config/  
    └── Contiene la configuración del proyecto, como claves secretas, variables de entorno y parámetros generales.

```