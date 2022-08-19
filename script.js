
let button = document.getElementById("button");

button.onclick = function(event){

    event.preventDefault();

    let Name = document.getElementById("Name");

    let requestURL = `https://api.nationalize.io/?name=${Name.value}`;

    let result = document.getElementById("result");

console.log("Program Started!");
    function displayCountry(data){
        console.log(data)
        let allcountries= data.country;
        let country=allcountries[0].country_id;
        result.innerHTML=`Your Predicted Country (Abbreviated): ${country}`;
    }

    fetch(requestURL)
    // Called once the page is loaded
    .then(function (response) {
        // Converts the webpage into a JS object
        return response.json();
    })
    // Called with the object as a parameter once its converted
    // Things we want to do after data is available
    .then(displayCountry)
    .catch(function (error) {
        console.log("Error during fetch:", error);
    });

}