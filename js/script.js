
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById("employees");
const url = 'https://randomuser.me/api/?results=12';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let employees = data.results;
    return employees.map(function(employee) {
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
        img.src = employee.picture.medium;
        span.innerHTML = 
          `<div class="border-all">
             <div class="border">
               <div class="user">       
                 <img id="image" src="${employee.picture.large}"/>
                 <div id="fullName">${employee.name.first +" "+ employee.name.last}</div>
               </div>
               
               <div class="description">
                 <div><span id="email">${employee.email}</span></div>
                 <div><span id="city">${employee.location.city}</div>
               </div>
             </div>
           </div>`
    
       
        append(li, span);
        append(ul, li);
        
    })
})

.catch( function(error) {
    console.log(JSON.stringify(error));
});

var modal = document.querySelector(".modal");
var employees = document.querySelector("#employees");
var closeButton = document.querySelector(".close-button");

const modalInfo = (employee) => {
  modal.innerHTML =
    `<div class="modal">
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <img id="image-model" src="${employee.picture.large}"/>
          <h1 class="heading-model">${employee.name.first +" "+ employee.name.last}</h1>
          <h3 class="email">${employee.email}</h3>
          <h3 class="city">${employee.location.city}</h3>
          <hr>
          <span class="phone">${employee.phone}</span><br><br>
          <span id="address">${employee.address}</span><br><br>
          <span class="birthday">Birthday: ${employee.birthday}</span>
        </div>
      </div>`;
}

function startModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
      startModal();
  }
}

employees.addEventListener("click", startModal);
closeButton.addEventListener("click", startModal);
window.addEventListener("click", windowOnClick);
modalInfo();