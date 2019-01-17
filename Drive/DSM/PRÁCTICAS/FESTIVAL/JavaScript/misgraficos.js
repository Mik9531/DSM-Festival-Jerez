

function dibujar(){
    var ctx1 = document.getElementById("grupos").getContext("2d");
    var miGraficoGrupo = new Chart(ctx1).Line(datosGrupo,opcionesGrupo);

    legend(document.getElementById("leyendaFI"), datosGrupo);

    var ctx2 = document.getElementById("Premios").getContext("2d");
    var miGraficoPremios = new Chart(ctx2).Pie(datosPremios,opcionesPremios);
    
    legend(document.getElementById("leyendaFV"), datosPremios);
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
        label: "Tango"
    },
    {
        value: 15,
        color:"Cyan",
        highlight: "DarkOrange",
        label: "Lambada"
    },
    {
        value: 25,
        color:"Yellow",
        highlight: "DarkCyan",
        label: "Bachata"
    },
];

var opcionesGrupo = {

   
    scaleShowGridLines : true,

  
    scaleGridLineColor : "lightgrey",

  
    scaleGridLineWidth : 1,

   
    scaleShowHorizontalLines: true,

  
    scaleShowVerticalLines: false,

  
    bezierCurve : false,

 
    bezierCurveTension : 0.4,

  
    pointDot : true,

   
    pointDotRadius : 4,

   
    pointDotStrokeWidth : 1,

   
    pointHitDetectionRadius : 20,

  
    datasetStroke : true,

  
    datasetStrokeWidth : 2,

  
    datasetFill : true,

  
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var opcionesPremios ={
   
    segmentShowStroke : true,
  
    segmentStrokeColor : "black",
   
    segmentStrokeWidth : 2,
    
    percentageInnerCutout : 0,
    
    animationSteps : 40,
   
    animationEasing : "easeOutBounce",
   
    animateRotate : true,
   
    animateScale : true,
  
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

