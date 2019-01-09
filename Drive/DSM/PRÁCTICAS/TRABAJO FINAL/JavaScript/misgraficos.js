/* Gráficos */

function dibujar(){
    var ctx1 = document.getElementById("grupos").getContext("2d");
    var miGraficoGrupo = new Chart(ctx1).Line(datosGrupo,opcionesGrupo);

    legend(document.getElementById("leyendaFI"), datosGrupo);

    var ctx2 = document.getElementById("Ventas").getContext("2d");
    var miGraficoVentas = new Chart(ctx2).Pie(datosPremios,opcionesPremios);
    
    legend(document.getElementById("leyendaFV"), datosVentas);
}

var datosGrupo = {
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
            data: [2, 3, 1, 4, 5, 2, 4, 7, 6, 10, 15, 2]
        },
        {
            label: "América",
            fillColor: "transparent",
            strokeColor: "Orange",
            pointColor: "Orange",
            pointStrokeColor: "Orange",
            pointHighlightFill: "DarkOrange",
            pointHighlightStroke: "DarkOrange",
            data: [10, 7, 8, 7, 9, 11, 2, 5, 3, 7, 1, 6]
        },
        {
            label: "Asia",
            fillColor: "transparent",
            strokeColor: "lime",
            pointColor: "lime",
            pointStrokeColor: "lime",
            pointHighlightFill: "DarkLime",
            pointHighlightStroke: "DarkLime",
            data: [12, 4, 13, 5, 6, 9, 17, 4, 9, 16, 2, 9]
        },
        {
            label: "África",
            fillColor: "transparent",
            strokeColor: "blue",
            pointColor: "blue",
            pointStrokeColor: "blue",
            pointHighlightFill: "DarkBlue",
            pointHighlightStroke: "DarkBlue",
            data: [3, 4, 2, 4, 6, 7, 2, 6, 4, 5, 4, 3]
        },
        {
            label: "Oceanía",
            fillColor: "transparent",
            strokeColor: "magenta",
            pointColor: "magenta",
            pointStrokeColor: "magenta",
            pointHighlightFill: "DarkMagenta",
            pointHighlightStroke: "DarkMagenta",
            data: [2, 4, 7, 8, 5, 4, 7, 1, 1, 5, 7, 5]
        }
    ]
};

var datosPremios = [
    {
        value: 40,
        color:"Magenta",
        highlight: "Darkgreen",
        label: "Salsa"
    },
    {
        value: 20,
        color:"green",
        highlight: "DarkMagenta",
        label: "Lambada"
    },
    {
        value: 15,
        color:"Cyan",
        highlight: "DarkOrange",
        label: "Tango"
    },
    {
        value: 25,
        color:"Yellow",
        highlight: "DarkCyan",
        label: "Bachata"
    },
];

var opcionesGrupo = {

    //Boolean - Whether grid lines are shown across the chart
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

var opcionesPremios ={
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