
/*function createNode(element) {
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

const modalInfo = (employee) => {
    var modal = document.querySelector(".modal");
    var employees = document.querySelector("#employees");
    var closeButton = document.querySelector(".close-button");
  
    
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
    modalInfo(employee);
}*/

const employees = document.getElementById('employees');
const overlay = document.getElementById('overlay');
const body = document.getElementsByName('body');
var cardIndex;
var numberOfEmployees=0;
var employeeData;

const fetchData= fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response=> response.json());

    fetchData
        .then(function(data){
            employeeData = data.results;
            numberOfEmployees= employeeData.length;
            for (var i = 0; i < numberOfEmployees; i++) {
                
                const card = document.createElement('li');
                card.id = i;
                card.className = 'cards';
                card.innerHTML = 
                    `
                    <div class="border-all">
                      <div class="border">
                        <div class="user">       
                          <img id="image" src="${employeeData[i].picture.large}"/>
                          <div id="fullName">${employeeData[i].name.first +" "+ employeeData[i].name.last}</div>
                        </div>
               
                        <div class="description">
                         <div><span id="email">${employeeData[i].email}</span></div>
                         <div><span id="city">${employeeData[i].location.city}</div>
                        </div>
                      </div>
                    </div>
                    ` 
                employees.appendChild(card);
            }
           
        })

        .then(function(){
          const cards = document.getElementsByClassName('cards');
          for(var i = 0; i < cards.length; i++) {
              var card = cards[i];
              card.addEventListener("click", function() {
              overlay.className= "overlayShow";
                  cardIndex = this.id;
                  generateModal(employeeData, cardIndex);
          });
              }
  })

  const birthday = function(array, i){
    let dateOfBirth = new Date(array[i].dob.date);
                let day = dateOfBirth.getDate();
                let month = dateOfBirth.getMonth() + 1;
                let year = dateOfBirth.getFullYear();
                if (day < 10) {
                    day = '0' + day;
                  }
                if (month < 10) {
                    month = '0' + month;
                  }
                let employeeDob = `${month}/${day}/${year}`;
                return employeeDob;
  }

  let generateModal = function(employeeData, i){
    numberOfEmployees = employeeData.length;

    const modal = document.createElement('div');
                let employeeDob = birthday(employeeData,i);
                modal.id=i;
                modal.className ='modal';
                modal.innerHTML = 
                 `
                    <div class="modal">
                      <div class="modal-content">
                        <span class="close">&times;</span>
                        <img id="image-model" src="${employeeData[i].picture.large}"/>
                        <h1 class="heading-model">${employeeData[i].name.first +" "+ employeeData[i].name.last}</h1>
                        <h3 class="email">${employeeData[i].email}</h3>
                        <h3 class="city">${employeeData[i].location.city}</h3>
                        <hr>
                        <span class="phone">${employeeData[i].cell}</span><br><br>
                        <span id="address">${employeeData[i].location.street} ${employeeData[i].location.city}, ${employeeData[i].location.state},  ${employeeData[i].location.postcode}</span>
                        <span class="birthday">Birthday: ${employeeDob}</span>
                      </div>
                    </div>
               
               ` 
                    overlay.appendChild(modal);


      const close = $('.close');
                     
        close.click(function() {
          overlay.className="Hide";
          modal.style.display = "none";
        });
 }
