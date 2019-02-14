
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