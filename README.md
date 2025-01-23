# React weather by IP
Этот проект представляет собой React-приложение, которое отображает текущий прогноз погоды для вашего города. Город определяется автоматически по вашему IP-адресу с помощью сервиса [IP-API](https://ip-api.com/). Данные о погоде получаются с API [meteosource](https://www.meteosource.com/documentation).

## Features
- Определение местоположения: Приложение автоматически определяет местоположение пользователя по IP-адресу с помощью сервиса IP-API.
- Получение текущей погоды: Отображает текущую температуру, скорость ветра
- Прогноз погоды на несколько дней

### CORS problem solving
Для обхода ограничений CORS и получения данных с API meteosource используется [cors-anywhere](https://cors-anywhere.herokuapp.com/corsdemo).

#### Screenshot
![image](https://github.com/user-attachments/assets/8ad73c0f-683e-497c-813d-701389a4c8e0)
