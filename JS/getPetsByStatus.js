let displayPetByStatus = document.querySelector("#available");

// REQUEST SERVER DATA
const REQ = new XMLHttpRequest();

function getAvaliblePets() {
    REQ.onload = () => {
        if (REQ.status === 200 & REQ.readyState === 4) {
            console.log(REQ);
            console.log(REQ.response);
            let pets = REQ.response;
            pets.forEach(element => {
                console.log(element.name);
            });
            // QUICK WAY TO INSERT INTO HTML
            // document.querySelector('#response').innerHTML = REQ.response.title;
            // FUCTION TO INSERT INTO HTML
            buildPString(displayPetByStatus, 1);
        } else {
            console.log(`Oh no! You should handle the Error(s)!`);
            buildPString(displayPetByStatus, 2);
        }
    }
    REQ.open('GET', 'http://petstore.swagger.io/v2/pet/findByStatus?status=available'); 
    REQ.setRequestHeader('Content-Type', 'Application/json');
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.responseType = 'json';
    REQ.send();
}

let bRequest = document.querySelector('#bRequest');
bRequest.addEventListener('click', getAvaliblePets);


function buildPString(placeholder, number){
    let newPTag = document.createElement("p");
    let newTextNode;
    if (number === 1) {
        let petList = [];
        let pets = REQ.response;
            pets.forEach(element => {
                petList.push(element.name);
            });
        newTextNode = document.createTextNode(`Here are the first 3 avalible pets: ${petList[0]}, ${petList[1]}, ${petList[2]}`); // could add a for loop to cycle through properties
        newPTag.appendChild(newTextNode);
        placeholder.appendChild(newPTag);
    } if (number === 2) {
        newTextNode = document.createTextNode(`Sorry, something has gone wrong.`);
        newPTag.appendChild(newTextNode);
        placeholder.appendChild(newPTag);
    } 
}