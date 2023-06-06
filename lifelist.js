//I started out doing it the first way and then wanted to see how it doing the method
//from the todoapp on the weekly video would differ. They both do the same thing,
//but the 2nd seems cleaner and more concise.

/*necessary for both versions*/
const table = document.querySelector("#listBody");

// document.querySelector("#submit").addEventListener("click", (e) => {
//   e.preventDefault();
//   let newTr = document.createElement("tr");
//   let bird = document.createElement("td");
//   let date = document.createElement("td");
//   let location = document.createElement("td");
//   bird.innerHTML = document.querySelector("#birdInput").value;
//   date.innerHTML = document.querySelector("#observationDate").value;
//   location.innerHTML = document.querySelector("#details").value;
//   table.append(newTr);
//   newTr.append(bird);
//   newTr.append(date);
//   newTr.append(location);
//   document.querySelector("#birdInput").value = "";
//   document.querySelector("#observationDate").value = "";
//   document.querySelector("#details").value = "";
// });

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (
    document.querySelector("#birdInput").value == "" ||
    document.querySelector("#observationDate").value == "" ||
    document.querySelector("#details").value == ""
  ) {
    alert("Please enter all required data");
  } else {
    let row = table.insertRow(0);
    row.insertCell(0).innerHTML = document.querySelector("#birdInput").value;
    row.insertCell(1).innerHTML =
      document.querySelector("#observationDate").value;
    row.insertCell(2).innerHTML = document.querySelector("#details").value;
    document.querySelector("#birdInput").value = "";
    document.querySelector("#observationDate").value = "";
    document.querySelector("#details").value = "";
  }
});
