// REQUEST SERVER DATA
const REQ = new XMLHttpRequest();

let data = '{ "petId": "1" }';
function deletePet(petId) {
  let petId = document.getElementById("username1").value;
  let petId = document.createElement(1);
  REQ.onload = () => {
    if ((REQ.status === 200) & (REQ.readyState === 4)) {
      console.log(REQ);
      console.log(REQ.response);
      document.querySelector("#delPet").innerHTML = REQ.response[0];
    } else {
      console.log(`Didn't delete!`);
    }
    REQ.open("DELETE", "https://petstore.swagger.io/v2/pet/1", true);
  };
  REQ.setRequestHeader("Content-Type", "Application/json");
  // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
  REQ.responseType = "json";
  REQ.send();
}
let deletePetRequest = document.querySelector("#deletePetRequest");
deletePetRequest.addEventListener("click", deletePet);
