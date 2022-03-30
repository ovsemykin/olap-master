# Cтек основных технологий для проекта «OLAP-master».

## Клиентская часть:

- [reactjs](https://reactjs.org/) - для разделения питерфейса на компоненты
- https://ant.design/ - основной UI фреймворк
- https://ant.design/components/transfer/ - выбор элементов измерения
- https://codesandbox.io/s/dww48?file=/index.js - контекствное меню по правому щелчку мыши
- https://ant.design/components/tree/ - дерево элементов в справочнике
- https://ant.design/components/drawer/ - для документации
- https://landing.ant.design/ - для лэндингов
- https://github.com/zesik/react-splitter-layout - вертикальный подвижный разделитель 1 (react splitter)
- https://ej2.syncfusion.com/react/documentation/splitter/getting-started-functional/ - вертикальный подвижный разделитель 2(react splitter)
- [Redux Toolkit](https://redux-toolkit.js.org/) - для работы с состояниями ([базовый туториал](https://youtu.be/_j4k73zoy5Y))
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - для создания запросов на сервер (и хранения состояния на сервере)
- [Reactrouter](https://reactrouter.com/) - навигация на стороне клиента

## Серверная часть

- Node.js
- Express
- [ClickHouse](https://clickhouse.com/) - база данных
- (отказался от использования)[mysql](https://www.npmjs.com/package/mysql) (модуль для работы node.js с базой данных MySQL)
- (отказался от использования) [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
- [туториал: Socket.io](https://www.youtube.com/watch?v=M9js5vt15-A)
- (отказался от использования)[Apollo Client](https://github.com/apollographql/apollo-client) ( - библиотека для работы с GraphQL) [Учебный курс](https://odyssey.apollographql.com/)

### OLAP движок

- (отказался от использования) [cube.js](https://cube.dev/) - план А
- (отказался от использования) [cubes](http://cubes.databrewery.org/) - План Б на Phyton
- (отказался от использования) [olap-cube-js](https://github.com/feonit/olap-cube-js) -план В. Простой и логичный OLAP-движок. Работает только с введенными значениями. Вычислений нет. Его стоит взять за основу

## Вспомогательные библиотеки для всего проекта

- [dotenv](https://github.com/motdotla/dotenv) (чтобы задавать переменные окружения для проекта)
- [Concurrently](https://www.npmjs.com/package/concurrently) (для одновременного запуска двух серверов)
- [Electron](https://www.electronjs.org/) (чтобы запаковать приложение в установочный файл для windows)
- [pm2](https://pm2.keymetrics.io/) (для администрирования ресурсов серверов)
- [cors](https://www.npmjs.com/package/cors) (чтобы фронтенд мог делать запросы на разные бэкэнд сервера)
- [nodemon](https://www.npmjs.com/package/nodemon) (для автоматического запуска серверов )
- (отказался от использования) [socket.io](https://socket.io/) (чтобы браузер и сервер общались в режиме реального времени)
- [туториал: Приложение React/Express/MySQL с нуля до продакшена за 3,5 часа.](https://www.youtube.com/watch?v=UH6aO8ZcTMs)

### Аутентификация

!!! Перейти на аутентификацию Яндекса

- [react-google-login](https://github.com/anthonyjgrove/react-google-login) - компонент для React
- [админка Google для настройки ](https://console.developers.google.com/apis/credentials?project=olap-master)
- [google sign-in](https://developers.google.com/identity)
- [документация](https://developers.google.com/identity/gsi/web/guides/overview?hl=en)
- [туториал](https://www.youtube.com/watch?v=75aTZq-qoZk)
