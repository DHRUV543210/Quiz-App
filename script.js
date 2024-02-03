//Defining the data

const questions = [
    {
        question : 'Which is the smallest planet in Our Solar System ?',
        answers : [
            {text: 'Venus', correct: false},
            {text: 'Mars', correct: false},
            {text: 'Mercury', correct: true},
            {text: 'Earth', correct: false},
        ]
    },

    {
        question: 'Which is the largest planet in Our Solar System ?',
        answers : [
            {text: 'Venus', correct: false},
            {text: 'Mars', correct: false},
            {text: 'Jupiter', correct: true},
            {text: 'Earth', correct: false},
        ]
    },

    {
        question: 'Which of the following planet do not have Rings around it ?',
        answers : [
            {text: 'Jupiter', correct: false},
            {text: 'Earth', correct: true},
            {text: 'Saturn', correct: false},
            {text: 'Uranus', correct: false},
        ]
    }
    ,

    {
        question: 'Which of the following asteroid was responsible in the extinction of dinosaurs',
        answers : [
            {text: 'Vredefort Crator', correct: false},
            {text: 'Acraman Crator', correct: false},
            {text: 'Chicxulub Crator', correct: true},
            {text: 'Kara Crator', correct: false},
        ]
    },

    {
        question: 'Which among the following space objects is the fastest thing ever to travel made by humans ?',
        answers : [
            {text: 'Parkor Solar probe', correct: true},
            {text: 'Voyager 1', correct: false},
            {text: 'Voyager 2', correct: false},
            {text: 'Chandrayan 2', correct: false},
        ]
    }
];

// ******************************************************************************************************************************

const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

// ******************************************************************************************************************************
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNo = currentQuestionIndex +1;
    question.innerHTML = currentQuestionNo + '. ' + currentQuestion.question;

        currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';

    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === 'true';

    if(isCorrect)
    {
        selectedBtn.classList.add('correct');
        score+=1;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true')
        {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    question.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = 'block';
}


function handleNextBtn() {
    currentQuestionIndex +=1;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }

    else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextBtn();
    }

    else{
        startQuiz();
    }
});

startQuiz();







































// ORIGINAL

// const questions = [
//     {
//         question : 'Which is the largest animal in the World ?',
//         answers : [
//             { text : "Shark", correct : false},
//             { text : "Blue Whale", correct: true},
//             { text : "Elephant", correct: false},
//             { text: "Giraffe", correct: false},
//         ]
//     },

//     {
//         question : 'Which is the smallest country in the World ?',
//         answers : [
//             { text: "Vatican City", correct: true},
//             { text: "Bhutan", correct: false},
//             { text: "Nepal", correct: false},
//             { text: "Shri Lanka", correct: false},
//         ]
//     },

//     {
//         question : 'Which is the larget desert in the World ?',
//         answers : [
//             { text: "Kalahari", correct: false},
//             { text: "Gobi", correct: false},
//             { text: "Sahara", correct: true},
//             { text: "Antarctica", correct: false},
//         ]
//     },

//     {
//         question : 'Which is the largest continent in the World ?',
//         answers : [
//             { text: "Australia", correct: true},
//             { text: "Arctic", correct: false},
//             { text: "Asia", correct: false},
//             { text: "Africa", correct: false},
//         ]
//     },
// ];

// const questionElement = document.getElementById('question');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.getElementById('next-btn');

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;

//     nextButton.innerHTML = 'Next';
//     showQuestion();

// }

// function showQuestion(){
//     resetState();
    
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

//     currentQuestion.answers.forEach( answer =>{
//         const button = document.createElement('button');
//         button.innerHTML = answer.text;
//         button.classList.add('btn');
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener('click',selectAnswer);
//     });
// }

// function resetState(){
//     nextButton.style.display = 'none';
//     while(answerButtons.firstChild)
//     {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === 'true';

//     if(isCorrect)
//     {
//         selectedBtn.classList.add('correct');
//         score +=1;
//         // console.log('correct');
//     }
//     else{
//         selectedBtn.classList.add('incorrect');
//     }

//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === 'true')
//         {
//             button.classList.add('correct');
//         }

//         button.disabled = true;
//     });

//     nextButton.style.display = 'block';

// }

// function ShowScore(){
//     resetState();
//     questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
//     nextButton.innerHTML = 'Play Again';
//     nextButton.style.display = 'block';
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length)
//     {
//         showQuestion();
//     }
//     else{
//         ShowScore();
//     }
// }

// nextButton.addEventListener('click', ()=>{
//     if(currentQuestionIndex<questions.length){
//         handleNextButton();
//     }
//     else{
//         startQuiz();
//     }
// })

// startQuiz();