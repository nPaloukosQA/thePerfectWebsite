let display = document.querySelector("#deletePet");

// REQUEST SERVER DATA
const REQ = new XMLHttpRequest();

function deletePet() {
  REQ.onload = () => {
    if ((REQ.status === 200) & REQ.readyState) {
      console.log(REQ);
      console.log(REQ.deletePet);
      let pets = REQ.deletePet;
    } else {
      console.log(`Didn't delete!`);
    }
  };
  REQ.open("DELETE", "https://petstore.swagger.io/v2/pet/1");
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.responseType = "json";
  REQ.send(null);
}
let bRequest = document.querySelector("#deletePetRequest");
bRequest.addEventListener("click", getAvaliblePets);
