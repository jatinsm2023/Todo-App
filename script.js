let Tasks = JSON.parse(localStorage.getItem('Tasks')) || []
// let m = 0;
let mode = 'light';
Display();
Navbar();
function AddTask() {
    document.querySelector('.js-add').innerText = 'Add Task';
    m = 0;
    let task = document.querySelector('.js-name').value;
    let taskDate = document.querySelector('.js-date').value;
    let tasktime = document.querySelector('.js-time').value;
    if (task == '' || taskDate == '' || tasktime == '') {
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
            tasktime: tasktime,
        }
        Tasks.push(obj);
        // console.log(Tasks);
        console.log();
        Display();
        m++;
        document.querySelector('.js-name').value = '';
        document.querySelector('.js-date').value = '';
        document.querySelector('.js-time').value = '';
    }
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
    // console.log(localStorage.getItem('Tasks'));
}

function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

function Display() {
    let html = '';
    document.querySelector('.todo-list').innerHTML = "";

    for (let i = 0; i < Tasks.length; i++) {
        html = `
        <div class="container border border-3 border-primary my-2 px-2 rounded">
                <div class="row align-items-center mx-1 py-1">
                    <div class="col text-center border border-2 border-success rounded m-1 p-1 text-${mode === 'light' ? 'dark' : 'light'}">
                    ${Tasks[i].task}
                    </div>
                    <div class="col text-center border border-2 border-success rounded m-1 p-1 text-${mode === 'light' ? 'dark' : 'light'}">
                    ${new Date(`${Tasks[i].taskDate}`).toDateString().slice(4,10)}
                    </div>
                    <div class="col text-center border border-2 border-success rounded m-1 p-1 text-${mode === 'light' ? 'dark' : 'light'}">
                    ${tConvert(`${Tasks[i].tasktime}`)}
                    </div>
                    <span class="col-sm-1 text-center text-${mode === 'light' ? 'dark' : 'light'} btn border-2 btn-outline-warning m-1 my-2 " onclick="Edit(${Tasks[i].Entry});">
                    &#9998;
                    </span>
                    <span class="col-sm-1 text-center text-dark btn border-2 btn-outline-danger m-1" onclick="Delete(${Tasks[i].Entry});">
                    &#10006;
                    </span>
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
    console.log();
    document.querySelector('.js-add').innerText = 'Edit Here';
    document.querySelector('.js-name').value = Tasks[Ent].task;
    document.querySelector('.js-date').value = Tasks[Ent].taskDate;
    document.querySelector('.js-time').value = Tasks[Ent].tasktime;
    Delete(Ent);
    Display();
}
// let mode = 'light';

function Modeswap() {
    if (mode === 'light') {
        // console.log("hello");
        mode = 'dark';
        // window['mode'] = 'dark';
        document.body.style.backgroundColor = '#3F3F3F';
        document.body.style.color = '#fff';
        console.log();
        
    }
    else {
        mode = 'light';
        // window['mode'] = 'light';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        console.log();

    }
    Navbar();
    Display();

}

function Navbar() {
    let html = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-${mode==='dark'?'dark':'primary'}" id="Navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Todo App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active"  href="about.html">About</a>
                        
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
