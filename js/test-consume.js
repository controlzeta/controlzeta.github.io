
$( document ).ready(function() {
	console.log( "consume!" );
	getQuestions();
});
	
function getQuestions(){
	var html = '<div class="col-md-12"> ' + 
					'<div class="question-div">';
		$.each( data.questions, function( i, question ) {
			
			html += '<div class="col-md-1 number"> ' +(i+1) + '.- </div> ' + 
					'<div class="col-md-11">' +
					'<div class="question"> ' + question.question + ' </div> ' ;
					if(question.answers){
					$.each( question.answers, function( i, answer ) {
							html += '<div class="answer" > ' + i++ + ".- " +answer.answer + ' </div> ' ;
						});
					}
		 	html += '</div> ' ;
		});
	html += '</div>';
	$('#divQuestions').append(html);
}

