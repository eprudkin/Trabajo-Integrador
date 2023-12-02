const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/sessions');
require('dotenv').config();

/* Import de las rutas */
const mainRouter = require('./src/router/mainRouters');
const shopRouter = require('./src/router/shopRouters');
const adminRouter = require('./src/router/adminRouters');
const authRouter = require('./src/router/authRouters');
const { notFoundPage } = require('./src/utils/errorHandlers');

const port = process.env.port || 3000;


/* Define la carpeta de archivos estáticos */
app.use(express.static(path.resolve(__dirname,'public')));


 /* Comnfiguración del template engine - EJS */

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

/* Creamos la sesion de usuario */

app.use(initSession())

/* Le pasamos a locals si el user esta logueado para aprovecharlo en las vistas */

app.use((req,res,next) => {
    res.locals.isLogged = require.session.isLogged;
    next()
});

/* Parsear los datos decibidos por POST */

app.use(express.urlencoded());
app.use(express.json())

/* Override para habilitarmetodos PUT y DELETE */

app.use(methodOverride('_method'));

/* Rutoas de la app */

app.use('/', mainRouter);
app.use('/shop', shopRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.use(notFoundPage);

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));