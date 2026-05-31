const rootApiUrl = "http://127.0.0.1:5000"

document.addEventListener('DOMContentLoaded',async () => {
    const root = document.querySelector('#root');
    const form = document.querySelector('form');
    const users = await getUsers();
    (users.length !== 0)
    ? root.appendChild(renderUser(users))
    : root.innerHTML = "<h3 class='text-center'>Список пользователей пуст</h3>";

    form.addEventListener('submit', async(event)=>{
        event.preventDefault();
        const fd = new FormData(form);
        const data = Object.fromEntries(fd.entries());
        result = await sendUser(data)
        if (result) {
            root.appendChild(renderUser([result]));
            form.reset();
        }
    })

    form.formCleaner.addEventListener('click',() => form.reset())
})

async function getUsers() {
    const url = `${rootApiUrl}/users`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
        console.log(result);
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function getUserDetail(id) {
    const url = `${rootApiUrl}/users/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
        console.log(result);
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function sendUser(user) {
    const url = `${rootApiUrl}/users`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

function renderUser(users) {
    let userRoot;
    if (!document.querySelector('div.userList')) {
        userRoot = document.createElement('div');
        userRoot.classList.add('userList')
        userRoot.innerHTML = `\
        <h3 class='text-center'>Список пользователей</h3>\
        <div class="row mb-1 fw-bold text-center border-bottom"><div class="col">Юзернейм</div><div class="col">Имя</div><div class="col">Фамилия</div></div>
        `
    } else {
        userRoot = document.querySelector('div.userList');
    }
    for (const user of users) {
        const userEl = document.createElement('div');
        userEl.classList.add('row', 'mb-1', 'text-center')
        
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('col', 'btnDiv');

        const usernameEl = document.createElement('button');
        usernameEl.classList.add('btn', 'btn-sm', 'btn-outline-primary');
        usernameEl.textContent = user.username;
        
        btnDiv.appendChild(usernameEl)

        const userFirstnameEl = document.createElement('div');
        userFirstnameEl.classList.add('fw-bold','col');
        userFirstnameEl.textContent = user.firstname;

        const userLastnameEl = document.createElement('div');
        userLastnameEl.classList.add('fw-bold','col');
        userLastnameEl.textContent = user.lastname;

        userEl.appendChild(btnDiv)
        userEl.appendChild(userFirstnameEl)
        userEl.appendChild(userLastnameEl)

        userRoot.appendChild(userEl)

        usernameEl.addEventListener('click', async ()=>{
            const userDetail = await getUserDetail(user.id)    
            showModal(userDetail)
        })
    }

    return userRoot

}

function showModal(user) {
    document.querySelector('.modal')?.remove();
    const modal = document.createElement('div');
    modal.classList.add('modal','d-block');
    modal.innerHTML=`
    <p>email: ${user.email}</p>
    <p>birth_date: ${user.birth_date || "нет данных"}</p>
    `
    document.body.appendChild(modal)
    document.addEventListener('click',(e)=> {
        if (!e.target.classList.contains('modal') && !e.target.classList.contains('btn') ) {
            document.querySelector('.modal')?.remove()
        };
    })
}
