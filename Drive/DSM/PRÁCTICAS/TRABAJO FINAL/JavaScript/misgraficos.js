/* Gráficos */

function dibujar(){
    var ctx1 = document.getElementById("Ingresos").getContext("2d");
    var miGraficoIngresos = new Chart(ctx1).Line(datosIngresos,opcionesIngresos);

    legend(document.getElementById("leyendaFI"), datosIngresos);

    var ctx2 = document.getElementById("Ventas").getContext("2d");
    var miGraficoVentas = new Chart(ctx2).Pie(datosVentas,opcionesVentas);
    
    legend(document.getElementById("leyendaFV"), datosVentas);
}

var datosIngresos = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [
        {
 label: "Europa",
            fillColor: "transparent",
            strokeColor: "Brown",
            pointColor: "Brown",
            pointStrokeColor: "Brown",
            pointHighlightFill: "CornflowerBrown",
            pointHighlightStroke: "CornflowerBrown",
            data: [900, 50, 910, 650, 710, 0, 900, 650, 490, 850, 720, 900]
        },
        {
            label: "América",
            fillColor: "transparent",
            strokeColor: "Orange",
            pointColor: "Orange",
            pointStrokeColor: "Orange",
            pointHighlightFill: "DarkOrange",
            pointHighlightStroke: "DarkOrange",
            data: [310, 390, 200, 400, 350, 200, 70, 200, 40, 950, 850, 690]
        },
        {
            label: "Asia",
            fillColor: "transparent",
            strokeColor: "lime",
            pointColor: "lime",
            pointStrokeColor: "lime",
            pointHighlightFill: "DarkLime",
            pointHighlightStroke: "DarkLime",
            data: [290, 90, 100, 255, 200, 340, 600, 100, 480, 480, 220, 450]
        },
        {
            label: "África",
            fillColor: "transparent",
            strokeColor: "blue",
            pointColor: "blue",
            pointStrokeColor: "blue",
            pointHighlightFill: "DarkBlue",
            pointHighlightStroke: "DarkBlue",
            data: [190, 50, 10, 190, 180, 230, 400, 80, 300, 470, 100, 390]
        },
        {
            label: "Oceanía",
            fillColor: "transparent",
            strokeColor: "magenta",
            pointColor: "magenta",
            pointStrokeColor: "magenta",
            pointHighlightFill: "DarkMagenta",
            pointHighlightStroke: "DarkMagenta",
            data: [270, 200, 130, 310, 150, 360, 370, 300, 280, 650, 270, 550]
        }
    ]
};

var datosVentas = [
    {
        value: 40,
        color:"green",
        highlight: "Darkgreen",
        label: "Reportaje"
    },
    {
        value: 20,
        color:"Magenta",
        highlight: "DarkMagenta",
        label: "Retrato"
    },
    {
        value: 15,
        color:"Yellow",
        highlight: "DarkOrange",
        label: "Arquitectura"
    },
    {
        value: 25,
        color:"Cyan",
        highlight: "DarkCyan",
        label: "Paisaje"
    },
];

var opcionesIngresos = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "lightgrey",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - Whether the line is curved between points
    bezierCurve : false,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var opcionesVentas ={
    //Lógico: ¿Mostrar el contorno de los segmentos?
    segmentShowStroke : true,
    //Color CSS: Color del contorno de los segmentos
    segmentStrokeColor : "black",
    //Número: Grosor del contorno de los segmentos
    segmentStrokeWidth : 2,
    //Número: Porcentaje del radio interno
    percentageInnerCutout : 0,
    //Número: Nº Frames de la animación
    animationSteps : 40,
    //Cadena: Efecto de la animación
    animationEasing : "easeOutBounce",
    //Lógico: ¿Animación de rotación?
    animateRotate : true,
    //Lógico: ¿Animación de escalado desde el centro?
    animateScale : true,
    //Código: Plantilla de la leyenda
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

//Chart.defaults.global.responsive = true;