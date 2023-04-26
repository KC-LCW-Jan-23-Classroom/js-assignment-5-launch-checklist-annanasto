// Write your JavaScript code here!

//const { pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let planetSelection = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planetSelection.name,
        planetSelection.diameter,
        planetSelection.star,
        planetSelection.distance,
        planetSelection.moons,
        planetSelection.image
      );
    });

  let form = document.querySelector("form");
  let list = document.getElementById("faultyItems");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
