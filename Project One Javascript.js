function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;

		if (question1 == "Dogs") {
			correct++;
		} 
		if (question2 == "Denmark") {
			correct++;
		}
		if (question3 == "Super Smash Bro Melee") {
			correct++;
		}
		if (question4 == "Joy"){
			correct++;
		}
		if (question5 == "Sleep"){
			correct++;
		}
		if (question6 == "Music"){
			correct++;
		}
		if (question7 == "A Feeling of Importance"){
			correct++;
		}
		if (question8 == "Looking at things from their perspective"){
			correct++;
		}
		if (question9 == "The Beach"){
			correct++;
		}
		if (question10 == "Hard Work"){
			correct++;
		}

	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var pictures = ["img/congrats.jpg", "img/decent.jpg", "img/nope.png"];

	var range;
		if (correct < 4) {
			range = 2;
		}
		if (correct > 4 && correct < 7) {
			range = 1;
		}
		if (correct > 8) {
			range = 0;
		}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
	}