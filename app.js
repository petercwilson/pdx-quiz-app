'use strict'

let score = 0;
let currentQuestion = 0;

let  questions = [
    {
        title: "1. What is the capital of Oregon?",
        answers: ["Portland", "Bend", "Eugene", "Salem"],
        correct: 3
    },
    {
        title: "2. What is the name of Portland's major league soccer team?",
        answers: ["Firs", "Beavers", "Timbers", "Ducks"],
        correct: 2
    },
    {
        title: "3. What is the city of Portland's official nickname?",
        answers: ["Rip City", "Rose City", "Bridgetown", "Stumptown"],
        correct: 1
    },
    {
        title: "4. Which popular 80's movie was filmed in Oregon?",
        answers: ["The Karate Kid", "The Breakfast Club", "Teen Wolf", "The Goonies"],
        correct: 3
    },
    {
        title: "5. Portland was named by the flip of a coin. If it had landed on the other side, Portland would have been known as which US city?",
        answers: ["New York", "San Diego", "Seattle", "Boston"],
        correct: 3
    },
    {
        title: "6. The world's largest  independently owned bookstore is located in Portland. What is it's name?",
        answers: ["Division Street", "Rip City Books", "Powell's City of Books", "Barnes and Noble"],
        correct: 2
    },
    {
        title: "7. Oregon is one of two states where you cannot legally...?",
        answers: ["Pump your own Gas", "Take your pet into a Pub", "Pick roses", "Chop down a Douglas Fir"],
        correct: 0
    },
    {
        title: "8. Portland's unnoffical slogan is?",
        answers: ["Never chop a tree down", "Keep Portland Weird", "The City of Roses", "Home of the Benson Bubblers"],
        correct: 1
    },
    {
        title: "9. What is the tallest mountain in Oregon?",
        answers: ["Mount Jefferson", "South Sister", "North Sister", "Mount Hood"],
        correct: 3
    },
    {
        title: "10. Why is Portland the greatest city in the United States?",
        answers: ["Outdoor Paradise", "Vast collection of micro-breweries", "Fantastic coffee shops", "All of the Above"],
        correct: 3
    }
];


// Event Listeners

$(document).ready(function() {

    $('.answers').on('click', '.submit-answer', function(e) {
        e.preventDefault();
            let guess = $('input:checked').val();
            if($('input:checked').length) {
            checkAnswer(guess);
            } else {
                alert('Please select and answer')
            }
    });

    

    $('.restart-quiz').click(function(e) {
        e.preventDefault();
        restartQuiz();
    });

});


// Functions

function startQuiz() {
    $('.start-quiz').click(function(e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });
}

function showQuestion() {
    if(currentQuestion == questions.length){
        showSummary();
    } else {
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.answers').html('');
        $('.answers').append(`
        <div class="form">
            <form>
                <p class="form-answer">
                    <input type="radio" name="quiz" id="answer0" value="0">
                    <label for="answer0">${question.answers[0]}</label>
                </p>
                <p class="form-answer">
                    <input type="radio" name="quiz" id="answer1" value="1">
                    <label for="answer1">${question.answers[1]}</label> 
                </p>
                <p class="form-answer">
                    <input type="radio" name="quiz" id="answer2" value="2">
                    <label for="answer2">${question.answers[2]}</label>
                </p>
                <p class="form-answer">
                    <input type="radio" name="quiz" id="answer3" value="3">
                    <label for="answer3">${question.answers[3]}</label>
                </p>
                <p>
                    <input type="submit" class="submit-answer" value="Submit">
                </p>
            </form>
        </div>
        <div class="score-status">
            <h4>Quiz Summary</h4>
            <p class="summary-text">${score} out of ${currentQuestion} correct!</p>
        </div>
        `)    
    }
}

function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if(question.correct === parseInt(guess)) {
        score++;
    } // add else statement here for wrong answer feedback
     else {
         wrongAnswer();
     }
    currentQuestion++;
    showQuestion();
}

function wrongAnswer() {
    let question = questions[currentQuestion];
    if(question.correct != parseInt(guess)) {
        alert('wrong answer!');
        $('.quiz').hide();
        $('.incorrectGuess').show();
    }
    currentQuestion++;
    showQuestion();
}

function showSummary() {    
    $('.quiz').hide();
    $('.summary').show();
    $('.summary-text').text(`"Congrats you scored "${score}" out of "${questions.length}" correct!"`)
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    $('.summary').hide();
    $('.quiz').show();
    showQuestion();
}

function handleQuiz() {
    startQuiz();
    // checkAnswer();
    // showSummary();
    // restartQuiz();
}

handleQuiz();