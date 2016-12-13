
$( document ).ready(function() {
	console.log( "consume!" );
	$('#nombre').text(data.nombre);
	$('#empleoActual').text(data.empleoActual);
	$('#empleoAnterior').text(data.empleoAnterior);
	$('#titulo').text(data.titulo);
	$("#escuela").text(data.escuela);
	TimeLine();
});

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function ConvertStringToDate(str){
	
	var day = parseInt(str.slice(0,2));
	var month = parseInt(str.slice(3,5));
	var year = parseInt(str.slice(6,10));
	var date = new Date( year, month - 1, day)
	if(str=="Today")
	{date = new Date();}
	console.log(date)
	return date;
}

function getColor(num){
		switch(num) {
					case 0:
						return 'info';
					case 1:
						return 'danger';
					case 2:
						return 'warning';
					case 3:
						return 'success';
					case 4:
						return 'purple';
				}
}

function TimeLine(){
	var trabajos = data.experiencia.length;
	var InitDate = ConvertStringToDate(data.experiencia[0].fechas[0].inicio);
	var EndDate = ConvertStringToDate(data.experiencia[trabajos-1].fechas[0].fin);
	var total = monthDiff( InitDate, EndDate);
	var freelance = false;
	console.log("Total meses : "+ total)
	var html = '<div class="progress"> ';
	$.each( data.experiencia, function( i, exp ) {
		var meses = monthDiff(ConvertStringToDate(exp.fechas[0].inicio),ConvertStringToDate(exp.fechas[0].fin));
		console.log('meses: ' + meses +' trabajos: ' + trabajos + ' total meses: ' + total);
		console.log(exp.fechas[0].inicio + " - " + exp.fechas[0].fin);
		var porcentaje = ((parseFloat(meses) /parseFloat(total))*100); 
		console.log('porcentaje :' + porcentaje);
		if(meses != total){
		html += '<div class="progress-bar progress-bar-' + getColor(i) +'" role="progressbar" style="width: ' +Math.floor(porcentaje) + '%;"> ' +
							' <a data-toggle="collapse" href="#collapse' + i +'" style="color:white;">' + exp.consultora + '</a>' +
					'</div> ' ;
		}else{
			freelance = true;
		}
	});
	html += '</div>';
	html += '<div class="progress">' +
					'<div class="progress-bar progress-bar-success" role="progressbar" style="width: 100%;">  ' +
						'<a data-toggle="collapse" href="#collapse0" style="color:white;">Freelance</a>' +
					'</div> ' +
				'</div>' ;
	$('#timeline').append(html);
}

$.each( data.experiencia, function( i, val ) {
  var actividades = '<ul class="list-group">';
  $.each( val.actividades, function( i, act ) {
	actividades += '<li class="list-group-item">' +	
			act.actividad +
		'</li>' ;
	});
  actividades += '</ul>';
  var conocimientos = "";
   $.each( val.conocimientos, function( i, con ) {
	conocimientos += '<div class="row" style="padding-top:0px;">'+
						'<div class="col-md-3 col-sm-3" style="text-align:right;">'+
							con.conocimiento +
						'</div>'+
						'<div class="col-md-9 col-sm-9">'+
							'<div class="progress">'+
								'<div class="progress-bar" style="background-color:' + con.color + ' !important;" ' +
								' role="progressbar" aria-valuenow="' + con.numero + '" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em;">'+
									con.numero + '%' +
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	// console.log(conocimientos);
	});
	
  var html = '<div class="row">' +
				'<div class="panel-group">' +
				  '<div class="panel panel-default">' +
					'<div class="panel-heading">' +
					  '<h4 class="panel-title">' +
						'<a data-toggle="collapse" href="#collapse'+ i +'">' + val.puesto + ' - ' + val.consultora + '</a>' +
					  '</h4>' +
					'</div>' +
					'<div id="collapse' + i + '" class="panel-collapse collapse">' +
					  '<div class="panel-body">' + 
						'<div class="col-md-6 col-sm-12">' +
							'<div class="col-md-3">' +
							'<img src="' + val.logo + '" class="img-consultora">' +
							'</div>' +
							'<div class="col-md-9">' +
							
							'<h3>' + val.consultora + '</h3>' +
							'<h4>Puesto: ' + val.puesto + '</h4>' +
							'<h5>Periodo: ' + val.fechaInicio + ' - ' + val.fechaFin + '</h5>' +
							'</div>' +
							'<p class="resumen">' + val.resumen + '</p>'+
							'<div class="skills" style="padding:15px; ">' +
								conocimientos +
							'</div>' +
						'</div>' +
						'<div class="col-md-6 col-sm-12">' +
							'<h4>Actividades Principales</h4>' +
							'<div>' +
								actividades	+
							'</div>' +
						'</div>' +
					  '</div>' +
					  // '<div class="panel-footer"></div>' +
					'</div>' +
				  '</div>' +
				'</div>' +
			'</div>';
  $('#generateHTML').append(html);
  // console.log(val);
  
  // $( "#" + val ).text( "Mine is " + val + "." );
 
  // Will stop running after "three"
  // return ( val !== "three" );
});