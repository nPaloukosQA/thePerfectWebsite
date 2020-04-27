const REQ = new XMLHttpRequest();

function getTodos() {
    REQ.onload = () => {
        if (REQ.status === 200) {
            // console.log(REQ);
            console.log(REQ.response);
            console.log(REQ.response.title);
            document.querySelector('#resp').innerHTML = REQ.response[0].title;
        } else {
            console.log(`Handle Error!`);
        }
    }
    REQ.open('GET', 'http://petstore.swagger.io/v2/user');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.responseType = 'json';
    REQ.send();
}

let data = '{"name": "Address","PhoneNumber": "email","psw": 1}';
function postTodo() {

    let name = document.getElementById("username1").value;
let firstName = document.getElementById("firstname").value;
let lastName = document.getElementById("lastname").value;
let add = document.getElementById("Address").value;
let num = document.getElementById("PhoneNumber").value;
let email = document.getElementById("email").value;
let psw = document.getElementById("psw").value;
 
let jsonString = JSON.stringify({
"username": name,
"firstName": firstName,
"lastName": lastName,
"email": email,
"password": psw,
"phone": num,
"userStatus": "0"});
    REQ.open('POST', 'http://petstore.swagger.io/v2/user', true);
    REQ.setRequestHeader('Content-Type', 'Application/json');
    REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    // REQ.onreadystatechange = function () {
    //     if (REQ.readyState == 4 && REQ.status == 200){
    //       let json = JSON.parse(REQ.responseText);
    //       console.log("lukkkkk"); 
    //     }
    // }
    REQ.onload = () => {
        if (REQ.status === 201) {
            console.log(REQ.response);
        } else {
            console.log('handle error');
        }
    }
    REQ.send(jsonString); // Waht we want to send across
}

let butt1 = document.querySelector('#butt2');
butt1.addEventListener('click', postTodo);