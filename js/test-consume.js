
$( document ).ready(function() {
	console.log( "consume!" );
	getQuestions();
});
	
function getQuestions(){
	var questionNumber = 0;
	$("#spTotal").text(data.questions.length);
	var html = '<div class="col-md-12"> ' + 
					'<div class="question-div">';
		$.each( data.questions, function( i, question ) {
			html += '<div class="col-md-1 number"> ' +(i+1) + '.- </div> ' + 
					'<div class="col-md-11">' +
					'<div class="question" id="question-' + i + '" data-subject="' + question.Subject + '" > ' + question.question + ' </div> ' ;
					questionNumber = i;
					if(question.answers){
					$.each( question.answers, function( i, answer ) {
							// var key = "q" + questionNumber + "a" i;
							html += '<div class="answer" data-questionNumber="'+ questionNumber +'" data-answer="'+ i +'" id="q-' + questionNumber + '-a-' + i + '"  > ' + (i+1) + ".- " +answer.answer + ' </div> ' ;
						});
					}
		 	html += '</div> ' ;
		});
	html += '</div>';
	$('#divQuestions').append(html);
}

function answer(id){
	$('#' + id).addClass("answered");
}

$(document).on('click', '.answer', function (e) {
	var identificator = "q-" + $(this).data("questionnumber") + "-a-" + $(this).data("answer");
	console.log(identificator);
	answer(identificator);
});
