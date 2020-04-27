let displayPetByStatus = document.querySelector("#available");

// REQUEST SERVER DATA
const REQ = new XMLHttpRequest();

function getAvaliblePets() {
  REQ.onload = () => {
    if ((REQ.status === 200) & (REQ.readyState === 4)) {
      console.log(REQ);
      console.log(REQ.response);
      let pets = REQ.response;
      pets.forEach((element) => {
        console.log(element.name);
      });
      // QUICK WAY TO INSERT INTO HTML
      // document.querySelector('#response').innerHTML = REQ.response.title;
      // FUCTION TO INSERT INTO HTML
      buildPString(display, 1);
    } else {
      console.log(`Oh no! You should handle the Error(s)!`);
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
  };
  REQ.open(
    "GET",
    "http://petstore.swagger.io/v2/pet/findByStatus?status=available"
  );
  REQ.setRequestHeader("Content-Type", "Application/json");
  // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
  REQ.responseType = "json";
  REQ.send();
}

let bRequest = document.querySelector("#bRequest");
bRequest.addEventListener("click", getAvaliblePets);

