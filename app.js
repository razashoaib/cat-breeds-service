const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');
const indexRouter = require('./api/routes/index');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // respond with error
    res.status(err.status || 500).json({ status: 'error', message: 'An error occurred' });
});

module.exports = app;
