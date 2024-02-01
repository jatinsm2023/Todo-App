
Navbar('light');
about();
function Navbar(mode) {
    let html = `
    <nav class="navbar navbar-expand-lg navbar-${mode} bg-${mode}" id="Navbar">
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
                        <a class="nav-link"  href="about.html">About</a>
                        
                    </li>
                </ul>
                <button type="button" class="btn btn-${mode === 'light' ? 'dark' : 'light'}" onclick="Modeswap('${mode}');">${mode === 'light' ? 'Dark-Mode' : 'Light-Mode'}</button>
                <button type="button" class="btn btn-danger m-1" onclick="Reset();">Reset</button>
            </div>
        </div>
    </nav>`
    // onclick="Modeswap('${mode}');"
    document.querySelector('.Navbar').innerHTML = html;
}


function about() {
    let html = `
    <h2 align="center" class="my-3">About Us</h2>
    <div class="container my-3">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item js-ac-1">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed js-n-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What this App can do?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">This App help you to costmize your daily work and keep Record of your Tasks. You can Add task, delete task, Edit Task here.
              </div>
            </div>
            <div class="accordion-item js-ac-2">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed js-n-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  About Developer
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">This App build by <code>Mr. Jatin Mahawar</code>. He is a second year ug student at IIT Kharagpur from the dept. of Computer Science and Engineering. Feel free to contact.</div>
              </div>
            </div>
            <div class="accordion-item js-ac-3">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed js-n-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  About IIT Kharagpur
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">The Institute was also given the status of an autonomous University. From this modest start in 1950, IIT Kharagpur has been engaged in a steady process of development in the vast tree-laden campus, spreading over 2100 acres has a self contained township of over 15,000 inhabitants.</div>
              </div>
            </div>
          </div>
    </div>
`

    document.querySelector('.accordion').innerHTML = html;
}


function Modeswap(mode) {
    if (mode === 'light') {
        // console.log("hello");
        mode = 'dark';
        document.body.style.backgroundColor = '#3F3F3F';
        document.body.style.color = '#fff';
        // console.log(mode);
        document.querySelector('.js-ac-1').style.backgroundColor = '#3F3F3F';
        document.querySelector('.js-ac-2').style.backgroundColor = '#3F3F3F';
        document.querySelector('.js-ac-3').style.backgroundColor = '#3F3F3F';

        document.querySelector('.js-n-1').style.backgroundColor = '#3F3F3F';
        document.querySelector('.js-n-2').style.backgroundColor = '#3F3F3F';
        document.querySelector('.js-n-3').style.backgroundColor = '#3F3F3F';

        document.querySelector('.js-n-1').style.color = 'white';
        document.querySelector('.js-n-2').style.color = 'white';
        document.querySelector('.js-n-3').style.color = 'white';
    }
    else {
        // console.log(mode);
        mode = 'light';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('.js-ac-1').style.backgroundColor = '#fff';
        document.querySelector('.js-ac-2').style.backgroundColor = '#fff';
        document.querySelector('.js-ac-3').style.backgroundColor = '#fff';

        document.querySelector('.js-n-1').style.backgroundColor = '#fff';
        document.querySelector('.js-n-2').style.backgroundColor = '#fff';
        document.querySelector('.js-n-3').style.backgroundColor = '#fff';

        document.querySelector('.js-n-1').style.color = 'black';
        document.querySelector('.js-n-2').style.color = 'black';
        document.querySelector('.js-n-3').style.color = 'black';
        
    }
    Navbar(mode);

}


function Reset(){
  localStorage.clear();
  location.reload()
}
