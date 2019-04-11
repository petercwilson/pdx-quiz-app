'use strict'

let score = 0;
let currentQuestion = 0;

let  questions = [
    {
        title: "1. What is the capital of Oregon?",
        answers: ["Portland", "Bend", "Eugene", "Salem"],
        correct: 3,
        correctString: "Salem"
    },
    {
        title: "2. What is the name of Portland's major league soccer team?",
        answers: ["Firs", "Beavers", "Timbers", "Ducks"],
        correct: 2,
        correctString: "Timbers"
    },
    {
        title: "3. What is the city of Portland's official nickname?",
        answers: ["Rip City", "Rose City", "Bridgetown", "Stumptown"],
        correct: 1,
        correctString: "Rose City"
    },
    {
        title: "4. Which popular 80's movie was filmed in Oregon?",
        answers: ["The Karate Kid", "The Breakfast Club", "Teen Wolf", "The Goonies"],
        correct: 3,
        correctString: "The Goonies"
    },
    {
        title: "5. Portland was named by the flip of a coin. If it had landed on the other side, Portland would have been known as which US city?",
        answers: ["New York", "San Diego", "Seattle", "Boston"],
        correct: 3,
        correctString: "Boston"
    },
    {
        title: "6. The world's largest  independently owned bookstore is located in Portland. What is it's name?",
        answers: ["Division Street", "Rip City Books", "Powell's City of Books", "Barnes and Noble"],
        correct: 2,
        correctString: "Powell's City of Books"
    },
    {
        title: "7. Oregon is one of two states where you cannot legally...?",
        answers: ["Pump your own Gas", "Take your pet into a Pub", "Pick roses", "Chop a Douglas Fir"],
        correct: 0,
        correctString: "Pump your own Gas"
    },
    {
        title: "8. Portland's unnoffical slogan is?",
        answers: ["Never Chop Trees", "Keep Portland Weird", "The City of Roses", "Benson Bubblers"],
        correct: 1,
        correctString: "Keep Portland Weird"
    },
    {
        title: "9. What is the tallest mountain in Oregon?",
        answers: ["Mount Jefferson", "South Sister", "North Sister", "Mount Hood"],
        correct: 3,
        correctString: "Mount Hood"
    },
    {
        title: "10. Why is Portland the greatest city in the United States?",
        answers: ["Outdoor paradise", "Excellent breweries", "Fantastic coffee shops", "All of the Above"],
        correct: 3,
        correctString: "All of the Above"
    }
];


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
        <div class="container">
            <div class="logo">
                <img src="img/2002_grande.png" alt="oregon logo"/>
            </div>
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
        </div>
        `)    
    }
}

function submitAnswer() {
    $('.answers').on('click', '.submit-answer', function(e) {
        e.preventDefault();
            let guess = $('input:checked').val();
            if($('input:checked').length) {
            checkAnswer(guess);
            } else {
                alert('Please select an answer!')
            }
    });
}

function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if(question.correct === parseInt(guess)) {
        score++;
    } else {
        alert(`"Wrong answer! The correct answer was ${question.correctString}"`);
    }
    currentQuestion++;
    showQuestion();
}

function results() {
    if (score <= 3) {
        $('.summary-text').append('You have much to learn about the great city of Portland. Try again.');    
    } else if (score > 3 && score <= 7) {
        $('.summary-text').append('You are aware of some of the things that make Portland Great! Try again.');
    } else {
        $('.summary-text').append('Wow! You are a hipster who watches Portlandia and drinks Stumptown coffee. Go Rip City!');
    }
}

function showSummary() {    
    $('.quiz').hide();
    $('.summary').show();
    $('.summary-text').html(`<p>You scored ${score} out of ${questions.length} correct!</p><br />`);
    results();
}

function restartQuiz() {
    $('.restart-quiz').click(function(e) {
        e.preventDefault();
        score = 0;
        currentQuestion = 0;
        $('.summary').hide();
        $('.quiz').show();
        showQuestion();
    });
}

function handleQuiz() {
    startQuiz();
    submitAnswer();
    showQuestion();
    restartQuiz();
}

handleQuiz();