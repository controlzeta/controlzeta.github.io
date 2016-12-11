
$( document ).ready(function() {
	console.log( "consume!" );
	$('#nombre').text(data.nombre);
	$('#empleoActual').text(data.empleoActual);
	$('#empleoAnterior').text(data.empleoAnterior);
	$('#titulo').text(data.titulo);
	$("#escuela").text(data.escuela);
});

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
	conocimientos += '<div class="row" style="padding-top:5px;">'+
						'<div class="col-md-4 col-sm-4">'+
							con.conocimiento +
						'</div>'+
						'<div class="col-md-8 col-sm-8">'+
							'<div class="progress">'+
								'<div class="progress-bar" style="background-color:' + con.color + ' !important;" ' +
								' role="progressbar" aria-valuenow="' + con.numero + '" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em;">'+
									con.numero + '%' +
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	console.log(conocimientos);
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
							'</div>' +
							'<h3>' + val.consultora + '</h3>' +
							'<h4>Puesto: ' + val.puesto + '</h4>' +
							'<h5>Periodo: ' + val.fechaInicio + ' - ' + val.fechaFin + '</h5>' +
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
  console.log(val);
  
  // $( "#" + val ).text( "Mine is " + val + "." );
 
  // Will stop running after "three"
  // return ( val !== "three" );
});