let Tasks = JSON.parse(localStorage.getItem('Tasks')) || [
    {
        Entry: 0,
        task: 'Hit the Gym',
        taskDate: "2023-01-01"
    }
]
// let m = 0;

Display();
Navbar('light');
function AddTask() {
    document.querySelector('.js-add').innerText = 'Add Task';
    m = 0;
    let task = document.querySelector('.js-name').value;
    let taskDate = document.querySelector('.js-date').value;
    if (task == '' || taskDate == '') {
        alert('Please fill all fields');
    }
    else {
        // console.log(task);
        // console.log(taskDate);
        let Entry = Number(Tasks.length);
        let obj = {
            Entry: Entry,
            task: task,
            taskDate: taskDate,
        }
        Tasks.push(obj);
        // console.log(Tasks);
        Display();
        m++;
        document.querySelector('.js-name').value = '';
        document.querySelector('.js-date').value = '';
    }
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
    // console.log(localStorage.getItem('Tasks'));
}

function Display() {
    let html = '';
    document.querySelector('.todo-list').innerHTML = "";

    for (let i = 0; i < Tasks.length; i++) {
        html = `
        <div class="container">
            <div class="d-flex bd-highlight mb-3">
                <div class="mx-1 bd-highlight form-control ">${Tasks[i].task}</div>
                <div class="mx-1 bd-highlight form-control ">${Tasks[i].taskDate}</div>
                <div class="mx-1 bd-highlight"><button type="button" class="btn btn-warning" onclick="Edit(${Tasks[i].Entry});">Edit</button></div>
                <div class="mx-1 bd-highlight"><button type="button" class="btn btn-danger" onclick="Delete(${Tasks[i].Entry});">Delete</button></div>
            </div>
        </div>
        ` + html;
        // let prev = document.querySelector('.todo-list').innerHTML;
        // html = html + prev;
    }
    document.querySelector('.todo-list').innerHTML = html;

    localStorage.setItem('Tasks', JSON.stringify(Tasks));

}


function Delete(Ent) {
    let n = Ent;
    // console.log(Ent);
    Tasks.splice(Ent, 1);
    for (let i = n; i < Tasks.length; i++) {
        Tasks[i].Entry--;
    }

    // console.log(Tasks);
    Display();
}

function Edit(Ent) {

    document.querySelector('.js-add').innerText = 'Edit Here';
    document.querySelector('.js-name').value = Tasks[Ent].task;
    document.querySelector('.js-date').value = Tasks[Ent].taskDate;
    Delete(Ent);
    Display();
}
// let mode = 'light';

function Modeswap(mode) {
    if (mode === 'light') {
        // console.log("hello");
        mode = 'dark';
        document.body.style.backgroundColor = '#3F3F3F';
        document.body.style.color = '#fff';
        // console.log(mode);

    }
    else {
        // console.log(mode);
        mode = 'light';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    }
    Navbar(mode);

}

function Navbar(mode) {
    let html = `
    <nav class="navbar navbar-expand-lg navbar-${mode} bg-${mode}" id="Navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html">Todo App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="about.html">About</a>
                        
                    </li>
                </ul>
                <button type="button" class="btn btn-${mode === 'light' ? 'dark' : 'light'} m-1" onclick="Modeswap('${mode}');">${mode === 'light' ? 'Dark-Mode' : 'Light-Mode'}</button>
                <button type="button" class="btn btn-danger m-1" onclick="Reset();">Reset</button>

            </div>
        </div>
    </nav>`
    // onclick="Modeswap('${mode}');"
    document.querySelector('.Navbar').innerHTML = html;
}

function Reset() {
    localStorage.clear();
    location.reload()
}