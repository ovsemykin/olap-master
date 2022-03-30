const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Сервер запущен на порту 5000");
});

/* Сервер выдает статические файлы из заданной папки */
app.use(express.static("../client/public"));
/* В браузере - На запрос http://localhost:5000/Logo.svg выводится файл из папки /public*/

/* Сервер выполняет промежуточную обработку запроса. Выдает проскакивание.*/
app.get("/url_5", (req, res, next) => {
  next();
});
/* В браузере - Cannot GET /url_5. Без метода next() сервер бы завис*/

/* Сервер выполняет промежуточную обработку запроса. */
app.use((req, res, next) => {
  console.log(
    "Дата запроса:",
    new Date(),
    "Метод запроса:",
    req.method,
    "URL:",
    req.originalUrl,
    "IP:",
    req.ip
  );
  next();
});
/* В консоли - Дата запроса: 2022-01-19T19:12:28.347Z Метод запроса: GET URL: /url_5 IP: ::1 */

/* Создадим переменную в виде списка */
const list = ["Один", "Два", "Три"];

/* Сервер выдаст ответ в виде списка */
app.get("/url", (req, res, next) => {
  res.send(list);
}); /* В браузере - ["Один","Два","Три"] */

/* Сервер выдаст ответ в виде json */
app.get("/json-list", (req, res, next) => {
  res.json({ list });
}); /* В браузере - {"list":["Один","Два","Три"]} */

/* Сервер выдаст ответ + присвоит ему статус в виде кода*/
app.get("/url_1", (req, res, next) => {
  res
    .status(300)
    .send("Результат смотри в консоли разработчика на вкладке 'сеть'");
}); /* В браузере - Результат смотри в консоли разработчика на вкладке 'сеть', Сеть - Код статуса: 300 Multiple Choices */

/* Сервер получит значение параметра через запрос. Вариант 1. Пример - http://localhost:5000/list/1*/
app.get("/list/:id", (req, res, next) => {
  res.send(list[req.params.id]);
}); /* В браузере - Два */

/* Сервер получит значение параметра через запрос. Вариант 2. Пример - http://localhost:5000/url_2?param_1="произвольный_текст"*/
app.get("/url_2", (req, res, next) => {
  console.log("Значение параметра 1 -", req.query.param_1);
}); /* В консоли - "Значение параметра 1 - "произвольный_текст"" */

/* Сервер выдаст разный ответ в зависимости от пути (роутинг)" */
const router_1 = express.Router();
app.use("/url_3", router_1);

router_1.get("/a", (req, res, next) => {
  res.send("Уточнение - a");
});
router_1.get("/b", (req, res, next) => {
  res.send("Уточнение - b");
});
/* http://localhost:5000/url_3/a --> "Уточнение - a"
   http://localhost:5000/url_3/b --> "Уточнение - b" */

/* Сервер выдаст перенаправление на другой адрес (редирект */
app.get("/url_4", (req, res, next) => {
  res.redirect(301, "/url");
}); /* В браузере - открывается страница http://localhost:5000/url, сеть - Код статуса: 301 Moved Permanently (ознаячает что страница перенесена на всегда). Если страница перенесена временно то код статуса можно не указывать, он присвоится 302 по умолчанию*/

/* Сервер выдаст файл*/
app.get("/download_1", (req, res, next) => {
  res.download("../client/src/img/header/Logo_white_short.svg", (err) => {
    console.log("Файл загрузился");
  });
});
/* В браузере - начинается загрузка файла Logo_white_short.svg */

/* Сервер выполняет промежуточную обработку ошибок. */
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.stack);
});





