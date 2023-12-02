const session = require('cookie-session');
require('dotenv').config();

function initSession() {
  return session({
    secret: process.env.SESSION_NAME
  });
};
/** 
 *  Configuration variable that recive a session.
    @param resave: 
    indicates whether to save the session in the storage storeSession even if there were no changes to the session during the request.


    @param saveUninitialized: determines whether to save a session even if it is not
    has modified. The value true allows a new session to be created and saved to the session store,
    even if no data has been modified in the session.

    @param name :Specifies the name of the session cookie. By default, "connect.sid" is used.
    You can change it if you want.

    @param cockie: Allows you to configure specific options for the session cookie, such as the
  expiration time (expires), path (path), domain (domain), security (secure), etc.

    @param store: Defines the session store that will be used to save sessions.
  You can use a MemoryStore, database storage,
  caching (RedisStore), among others.

  @param rolling: Indicates whether the session cookie must be renewed on each interaction with the
  server, which extends its expiration time. This can be useful to maintain
  the session is active while the user interacts with the application.
*/
/** Variables de configuración que recibe un session.
* @param resave: indica si se debe volver a guardar la sesión en el almacén de
  sesiones aunque no haya habido cambios en la sesión durante la solicitud.

  @param saveUninitialized: determina si se debe guardar una sesión aunque no se
  haya modificado. El valor true permite que se cree una sesión nueva y se guarde en el almacén de sesiones,
  incluso si no se ha modificado ningún dato en la sesión.

  @param name: Especifica el nombre de la cookie de sesión. Por defecto, se utiliza "connect.sid".
  Puedes cambiarlo si lo deseas.

  @param cookie: Permite configurar opciones específicas para la cookie de sesión, como el
  tiempo de expiración (expires), la ruta (path), el dominio (domain), la seguridad (secure), etc.

  @param store: Define el almacén de sesiones que se utilizará para guardar las sesiones.
  Puedes utilizar un almacén en memoria (MemoryStore), almacenamiento en la base de datos,
  almacenamiento en caché (RedisStore), entre otros.

  @param rolling: Indica si la cookie de sesión debe ser renovada en cada interacción con el
  servidor, lo que extiende su tiempo de expiración. Esto puede ser útil para mantener
  la sesión activa mientras el usuario interactúa con la aplicación.
 */
  module.exports = {
    initSession
  };