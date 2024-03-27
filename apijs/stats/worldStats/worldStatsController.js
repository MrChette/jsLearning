
const _baseUrl = 'https://d6wn6bmjj722w.population.io:443/1.0/population';

var nav = '';
nav = document.getElementById("card-container");  
getPopulationByYearCountryAge()

async function getPopulationByYearCountryAge(){

    var _year = 2024;
    var _country = "Spain"
    var _age = 18
    //resetContainers();
    var url = _baseUrl+"/"+_year+"/"+_country+"/"+_age;

    var labels = []
    var data = []

    var femaleCount = 0;
    var maleCount = 0;
    try{
        const response = await fetch(url);
        const datos = await response.json();

        // Acceder a los valores del objeto
        var females = datos[0].females;
        var country = datos[0].country;
        var age = datos[0].age;
        var males = datos[0].males;
        var year = datos[0].year;
        var total = datos[0].total;

        femaleCount = females;
        maleCount = males;
        
    } catch( error ){
        console.error(error)
    }

    
    labels.push("Female")
    labels.push("Male")

    data.push(females) 
    data.push(males) 

    var leftContainerId = 'getPopulationByYearCountryAgeText'
    var rightContainerId = 'getPopulationByYearCountryAgeChart'
    populateCard(leftContainerId,rightContainerId);
    generateDougtnut(labels,data,rightContainerId)

}

var myDoughnutChart;
function generateDougtnut(labels, datas, containerId) {
    if (myDoughnutChart) {
        // Destruye el gráfico previo
        myDoughnutChart.destroy();
    }

    var backgroundColors = [];
    var hoverBackgroundColors = [];
    // Genera colores aleatorios según la longitud de los datos
    for (var i = 0; i < datas.length; i++) {
        backgroundColors.push(randomColor());
        hoverBackgroundColors.push(randomColor());
    }

    var data = {
        labels: labels,
        datasets: [{
            data: datas,
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverBackgroundColors
        }]
    };

    // Configura el objeto de opciones para el gráfico
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom'
        }
    };

    var container = document.getElementById(containerId);
    if (!container) {
        console.error("No se pudo encontrar el contenedor con el ID especificado:", containerId);
        return;
    }

    // Busca el elemento Canvas dentro del contenedor
    var canvas = container.querySelector('canvas');
    if (!canvas) {
        console.error("No se pudo encontrar un elemento Canvas dentro del contenedor.");
        return;
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("No se pudo obtener el contexto del elemento Canvas.");
        return;
    }

    // Crea el gráfico de tipo "doughnut"
    myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
}


function populateCard(leftIdName, rightIdName) {
    nav = document.getElementById("card-container");
    // Populate card dynamically
    const rowDiv = document.createElement("div");
    rowDiv.classList = "row";

    const col1Div = document.createElement("div");
    col1Div.id = leftIdName;
    col1Div.classList = "col-md-4";
    col1Div.style.height = "600px";


    const col2Div = document.createElement("div");
    col2Div.id = rightIdName;
    col2Div.classList = "col-md-8";
    col2Div.style.height = "600px";
    col2Div.style.padding = "2%";

    // Agrega un elemento Canvas dentro del contenedor derecho
    const canvas = document.createElement("canvas");
    canvas.id = "myChart"; // Puedes asignar un ID al elemento Canvas si es necesario
    col2Div.appendChild(canvas);

    rowDiv.appendChild(col1Div);
    rowDiv.appendChild(col2Div);

    nav.appendChild(rowDiv);
}

// Función para generar un color aleatorio
function randomColor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}