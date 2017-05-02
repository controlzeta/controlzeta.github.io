
$( document ).ready(function() {
	console.log( "consume!" );
	$('#nombre').text(data.nombre);
	$('#empleoActual').text(data.empleoActual);
	$('#empleoAnterior').text(data.empleoAnterior);
	$('#titulo').text(data.titulo);
	$("#escuela").text(data.escuela);
	$("#aboutMe").text(data.aboutMe);
	TimeLine();
	getSkills();
	getProfiles();
	getReferences();
	getCourses();
	getCerts();
	getLanguages();
	getInterest();
	getChartText();
});

	getExperience();

function getChartText(){
	$('#programmingChoro').text(data.code);
	$('#databaseChoro').text(data.database);
	$('#hobbiesChoro').text(data.hobbies);
}
	
function getLanguages(){
	var html = '<div class="list-group">';
	$.each( data.idiomas, function( i, idioma ) {
		
		html += '<a class="list-group-item" href="#"> ' +
						'<i class="fa fa-graduation-cap fa-fw" aria-hidden="true"></i>&nbsp; ' +
	idioma.idioma + ' | Dominio: ' + idioma.dominio + ' ' + idioma.progreso  + ' %</a>' ;
		// console.log("cert: " + cert.certificacion);
	});
	html += '</div>';
	$('#idiomasDiv').append(html);
}

function getCerts(){
	var html = '<div class="list-group">';
	$.each( data.certificaciones, function( i, cert ) {
		
		html += '<a class="list-group-item" href="#"> ' +
						'<i class="fa fa-graduation-cap fa-fw" aria-hidden="true"></i>&nbsp; ' +
						 cert.certificacion + ' </a>' ;
		// console.log("cert: " + cert.certificacion);
	});
	html += '</div>';
	$('#certsDiv').append(html);
}

function getCourses(){
	var html = '<div class="list-group">';
	$.each( data.cursos, function( i, curso ) {
		
		html += '<a class="list-group-item" href="#"> ' +
						'<i class="' + curso.icon+ ' fa-fw" aria-hidden="true"></i>&nbsp; ' +
						 curso.curso + ' </a>' ;
		// console.log("cargo: " + curso.curso);
	});
	html += '</div>';
	$('#cursosDiv').append(html);
}

function getReferences(){
	var html ='<div class="row">';
	$.each( data.clientes, function( i, cliente ) {
		html += '<div class="col-sm-4 "> ' +
					'<div class="col-md-12m testimonial"> ' +
						'<img src="' + cliente.imagen + '"><br>' +
						'<div  class="quotes"><span>"' + cliente.testimonio + '"</span></div>' +
						'<div  class="author"><span>' + cliente.nombre + '</span></div>' +
						'<div class="cargo"><span>' + cliente.cargo + '</span></div>' +
					'</div>' +
				'</div>' ;
		// console.log("cargo: "+ cliente.cargo + " nombre: "+ cliente.nombre + " testimonio: " + cliente.testimonio);
	});
	html += '</div>';
	$('#testimonialsDiv').append(html);
}

function getProfiles(){
	var html = '<ul class="nav navbar-nav">';
	$.each( data.perfiles, function( i, profile ) {
		html += '<li><a href="' + profile.link + '" target="_blank" onclick="handleOutboundLinkClicks(' + profile.perfil + ')"><span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-'+ profile.font +' fa-stack-1x"></i></span>'+ 
							profile.perfil +'</a></li>';
		// console.log("link: "+ profile.link + " logo: "+ profile.logo + " perfil: " + profile.perfil);
	});
		html += '</ul>';
	$('#profilesDiv').append(html);
}

function getSkills(){
	var avanzadas = '<div class="col-md-6"><h3>Avanzadas</h3>'; 
	var medias = '<div class="col-md-6"><h3>Medias</h3>'; 
	var principiante = '<div class="col-md-6"><h3>Principiante</h3>'; 
	var html = "";
	$.each( data.skills, function( i, skill ) {
		if(skill.nivel == "avanzado"){
			avanzadas += '<div class="skill"> ' +
									'<span class="skill-ramo"><i class="fa fa-check-circle-o" aria-hidden="true"></i> ' + skill.ramo + ' </span><br> [' + skill.utilerias +']' +
								  '</div>';
		}else{
			if(skill.nivel == "medio"){
			medias += '<div class="skill"> ' +
									'<span class="skill-ramo"><i class="fa fa-check-circle-o" aria-hidden="true"></i> ' + skill.ramo + ' </span><br>  [' + skill.utilerias +']' +
								  '</div>';
			}
			else{
				principiante += '<div class="skill"> ' +
						'<span class="skill-ramo"><i class="fa fa-check-circle-o" aria-hidden="true"></i> ' + skill.ramo + ' </span><br>  [' + skill.utilerias +']' +
					  '</div>';
				
			}
			
		}
		// console.log("nivel: "+ skill.nivel + " ramo: "+ skill.ramo + " utilerias: " + skill.utilerias);
	});
	avanzadas += '</div>';	
	medias += '</div>';	
	principiante += '</div>';	
	html = avanzadas + medias + principiante;
	$('#skillsDiv').append(html);
}

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
	//console.log(date)
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
					case 5:
						return 'orange';
				}
}

function TimeLine(){
	var trabajos = data.experiencia.length;
	var InitDate = ConvertStringToDate(data.experiencia[0].fechas[0].inicio);
	var EndDate = ConvertStringToDate(data.experiencia[trabajos-1].fechas[0].fin);
	var total = monthDiff( InitDate, EndDate);
	var freelance = false;
	// console.log("Total meses : "+ total)
	var html = '<div class="progress"> '; var frelancehtml ="";
	$.each( data.experiencia, function( i, exp ) {
		var meses = monthDiff(ConvertStringToDate(exp.fechas[0].inicio),ConvertStringToDate(exp.fechas[0].fin));
		// console.log('meses: ' + meses +' trabajos: ' + trabajos + ' total meses: ' + total);
		// console.log(exp.fechas[0].inicio + " - " + exp.fechas[0].fin);
		var porcentaje = ((parseFloat(meses) /parseFloat(total))*100); 
		// console.log('porcentaje :' + porcentaje);
		if(meses != total){
		html += '<div class="progress-bar progress-bar-' + getColor(i) +'" role="progressbar" style="width: ' +Math.floor(porcentaje) + '%;"> ' +
							' <a data-toggle="collapse" href="#collapse' + i +'" style="color:white;">' + exp.consultora + '</a>' +
					'</div> ' ;
		}else{
			freelance = true;
			frelancehtml += '<div class="progress">' +
					'<div class="progress-bar progress-bar-success" role="progressbar" style="width: 100%;">  ' +
						'<a data-toggle="collapse" href="#collapse0" style="color:white;">Freelance</a>' +
					'</div> ' +
				'</div>' ;
		}
	});
	html += '</div>'; 
	$('#timeline').append(frelancehtml  + html);
}

function getExperience(){
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
    
});
}

function getInterest(){
	var html = '<div class="row">';
	var hobby = '<div class="col-md-6"><h3>Hobbies</h3>';
	var pro = '<div class="col-md-6"><h3>Profesionales</h3>';
	$.each( data.intereses, function( i, interes ) {
		if(interes.tipo == "hobby"){
			hobby += '<div data-type="' + interes.tipo + '"><i class="fa fa-gamepad" aria-hidden="true"></i> ' + interes.nombre + '</div>';		
		}else{
			pro += '<div data-type="' + interes.tipo + '"><i class="fa fa-book" aria-hidden="true"></i> ' + interes.nombre + '</div>';					
		}
		console.log("nombre: " + interes.nombre + " tipo: " + interes.tipo);
	});
	hobby += '</div>';
	pro += '</div>';
	html += hobby + pro +'</div>';
	$('#InterestDiv').append(html);	
}