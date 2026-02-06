var questionsAnswered = 0;
var answersArray = []; 
$( document ).ready(function() {
	console.log( "consume!" );
	getQuestions();
});
	
function getQuestions(){
	var questionNumber = 0;
	$("#spTestName").text(data.quizname);
	$("#spInstructions").text(data.instructions);
	$("#spTotal").text(data.questions.length);
	var html = '<div class="col-md-12"> ' ;
		$.each( data.questions, function( i, question ) {
				html +='<div class="question-div row" id="question-' + i + '" >' +
					'<div class="col-md-1 number"> ' +(i+1) + '.- </div> ' + 
					'<div class="col-md-11">' +
					'<div class="question"  data-subject="' + question.Subject + '" > ' + question.question + ' </div> ' ;
					questionNumber = i;
					if(question.answers){
					$.each( question.answers, function( i, answer ) {
							// var key = "q" + questionNumber + "a" i;
							html += '<div class="answer" data-questionNumber="'+ questionNumber +'" data-answer="'+ i +'" id="q-' + questionNumber + '-a-' + i + '"  > ' + (i+1) + ".- " +answer.answer + ' </div> ' ;
						});
					}
		 	html += '</div></div> ' ;
		});
	html += '</div>';
	$('#divQuestions').append(html);
}

function answer(id){
	$('#' + id).addClass("answered");
}

$(document).on('click', '.answer', function (e) {
	$("#question-" + $(this).data("questionnumber")  ).find(".answered").removeClass("answered");
	var identificator = "q-" + $(this).data("questionnumber") + "-a-" + $(this).data("answer");
	console.log(identificator);
	answer(identificator);
	questionsAnswered = $(".answered").length;
	$("#spAnswered").text(questionsAnswered);
});

function gradeAnswers(){
	if($(".question-div").length > $(".answered").length){
		alert("You need to answer all the questions");		
	}
	$.each( data.questions, function( i, question ) {
	}); 
}


//on this div question-div
// clear all answered classes and select the one that clicked