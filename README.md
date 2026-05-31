# FLASK + JS vanilla

## Backend 

1. Endpoints
* **/users/<int:user_id>** GET - принимает id пользователя, если пользователь существует возвращает его, иначе возвращает ошибку
example:\
`   req curl -i -X GET 'http://127.0.0.1:5000/users/5'
    resp    {
        "error": "UNIQUE constraint failed"
        }
`
        
* **/users** "GET", "POST" - обрабатывает GET и возвращает список пользователей или POST для добавления пользователя
example:\
`
    req curl -i -X GET "http://localhost:5000/users\
    resp \
        [
            {
                "birth_date": "2026-05-04",
                "email": "erbolbaik@mail.ru",
                "firstname": "firstname",
                "id": 1,
                "lastname": "lastname",
                "username": "erbolbaik"
            },
            {
                "birth_date": "2026-05-04",
                "email": "erbolbaik1@gmail.com",
                "firstname": "firstname",
                "id": 2,
                "lastname": "lastname",
                "username": "erbolbaik1"
            },
            ...................
        ]
`\
`
req curl -i -X POST  'http://127.0.0.1:5000/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{"email":"test@mail.ru","firstname":"test","lastname":"test","username":"testtesttest","birthDate":"2026-05-07"}'
resp
    {
        "error": "UNIQUE constraint failed"
    }
`
## Frontend

Основные методы описаны в front/js/my.js
* **rootApiUrl** - url бэкэнда
* **getUsers** - получение списка пользователей
* **getUserDetail** - запрос детальных данных пользователя
* **sendUser** - добавление пользователя
* **renderUser** - отрисовка пользователя на странице
* **showModal** - отображение детальных данных пользователя

## запуск приложения

1.  git clone https://github.com/Erbol92/digitalFlask.git
2.  pip install -r requirements.txt
3.  py main.py
4.  Открыть front/index.html