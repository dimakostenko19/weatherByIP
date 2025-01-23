# React weather by IP
Этот проект представляет собой React-приложение, которое отображает текущий прогноз погоды для вашего города. Город определяется автоматически по вашему IP-адресу с помощью сервиса [IP-API](https://ip-api.com/). Данные о погоде получаются с API [meteosource](https://www.meteosource.com/documentation).

## Features
- Определение местоположения: Приложение автоматически определяет местоположение пользователя по IP-адресу с помощью сервиса IP-API.
- Получение текущей погоды: Отображает текущую температуру, скорость ветра
- Прогноз погоды на несколько дней

### CORS problem solving
Для обхода ограничений CORS и получения данных с API meteosource используется [cors-anywhere](https://cors-anywhere.herokuapp.com/corsdemo).

#### Screenshot
![weather git](https://github.com/user-attachments/assets/fdb95e20-5602-4bb7-8b36-578219ad24a7)
