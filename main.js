    var getBtn = document.getElementById('ajaxButton');
    
    
    const getData = () => 
{
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp.readyState);
    
    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState);
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        console.log(xhttp.readyState);
       var response = JSON.parse(xhttp.responseText);
       //console.log(response.planets);
    
    //MAP - Tableau (array) de tous les noms des planètes)
        const names = response.planets.map(planet => planet.name);
        console.log(names);

    //MAP - Tableau des diamètres des planètres en kms
        const diametres = response.planets.map(diametre => isNaN(parseInt(diametre.diameter)) ? "Inconnu" : parseInt(diametre.diameter));
        console.log(diametres);
    
    //MAP - Tableau des nom des planètes ainsi que leur population
        const nomPopulations = response.planets.map((nomPopulation) => ({
            nom: nomPopulation.name,
            population: nomPopulation.population,
        }));
        console.log(nomPopulations);
   
    };
    };


xhttp.open("GET", "Star_wars_Planets.json", true);
xhttp.send();
};
getBtn.addEventListener('click', getData);

