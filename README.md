# FLASK + JS vanilla

## Backend 
    1. Endpoints
    * **/users/<int:user_id>** GET - принимает id пользователя, если пользователь существует возвращает его, иначе возвращает ошибку
    example:
        req curl 'http://127.0.0.1:5000/users' \
            -H 'sec-ch-ua-platform: "Windows"' \
            -H 'Referer;' \
            -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36 Edg/148.0.0.0' \
            -H 'sec-ch-ua: "Chromium";v="148", "Microsoft Edge";v="148", "Not/A)Brand";v="99"' \
            -H 'Content-Type: application/json' \
            -H 'sec-ch-ua-mobile: ?0' \
            --data-raw '{"email":"erbolbaik@mail.ru","firstname":"test","lastname":"test","username":"testtesttest","birthDate":"2026-05-07"}'
        resp    {
            "error": "UNIQUE constraint failed"
            }
        
        req curl 'http://127.0.0.1:5000/users' \
            -H 'Accept: */*' \
            -H 'Accept-Language: ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7' \
            -H 'Connection: keep-alive' \
            -H 'Content-Type: application/json' \
            -H 'Origin: null' \
            -H 'Sec-Fetch-Dest: empty' \
            -H 'Sec-Fetch-Mode: cors' \
            -H 'Sec-Fetch-Site: cross-site' \
            -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36 Edg/148.0.0.0' \
            -H 'sec-ch-ua: "Chromium";v="148", "Microsoft Edge";v="148", "Not/A)Brand";v="99"' \
            -H 'sec-ch-ua-mobile: ?0' \
            -H 'sec-ch-ua-platform: "Windows"' \
            --data-raw '{"email":"test@mail.ru","firstname":"test","lastname":"test","username":"testtesttest","birthDate":"2026-05-07"}'
        resp    {
            "firstname": "test",
            "id": 5,
            "lastname": "test",
            "username": "testtesttest"
            }

            
    * **/users** "GET", "POST" - обрабатывает GET и возвращает список пользователей или POST для добавления пользователя
        example:
        req curl ^"http://127.0.0.1:5000/users^" ^
            -H ^"Accept: */*^" ^
            -H ^"Accept-Language: ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7^" ^
            -H ^"Connection: keep-alive^" ^
            -H ^"Origin: null^" ^
            -H ^"Sec-Fetch-Dest: empty^" ^
            -H ^"Sec-Fetch-Mode: cors^" ^
            -H ^"Sec-Fetch-Site: cross-site^" ^
            -H ^"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36 Edg/148.0.0.0^" ^
            -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"148^\^", ^\^"Microsoft Edge^\^";v=^\^"148^\^", ^\^"Not/A)Brand^\^";v=^\^"99^\^"^" ^
            -H ^"sec-ch-ua-mobile: ?0^" ^
            -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^"
        resp 
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

## Frontend
    Основные методы описаны в front/js/my.js
    * **rootApiUrl** - url бэкэнда
    * **getUsers** - получение списка пользователей
    * **getUserDetail** - запрос детальных данных пользователя
    * **sendUser** - добавление пользователя
    * **renderUser** - отрисовка пользователя на странице
    * **showModal** - отображение детальных данных пользователя

## запуск приложения
