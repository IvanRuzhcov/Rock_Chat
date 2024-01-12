require('dotenv').config();
const express = require('express');

const app = express();

const expressConfig = require('./config/express');

// импортируем роутеры (там лежат наши ручки)
const registerRouter = require('./routes/api/register.router');

const PORT = process.env.PORT ?? 4000;
// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use('/api', registerRouter);

app.use((error, req, res, _next) => {
  // eslint-disable-next-line no-console
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, () => {
  console.log(`сервер пашет на ${PORT}`);
});
