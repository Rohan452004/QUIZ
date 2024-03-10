let questions = [
    {
        Question : "Who invented Java Programming?",
        answers: [
            {text:"Guido van Rossum", correct: false },
            {text:"Dennis Ritchie", correct: false },
            {text:"Bjarne Stroustrup", correct: false },
            {text:"James Gosling", correct: true }
        ]
    },
    
    {
        Question : "Which Google Service used for finding locations?",
        answers: [
            {text:"GeoTag", correct: false },
            {text:"Google Calender", correct: false },
            {text:"Google Lens", correct: false },
            {text:"Google Map", correct: true }
        ]
    },

    {
        Question : "If number of rows matrix is not equal to number of columns matrix is called…………….matrix.",
        answers: [
            {text:"Rectangular", correct: true },
            {text:"Column", correct: false },
            {text:"Row", correct: false },
            {text:"Square", correct: false }
        ]
    },

    {
        Question : "Rank of unit matrix is equal to …………… of matrix.",
        answers: [
            {text:"Zero", correct: false },
            {text:"Transpose", correct: false },
            {text:"Order", correct: true },
            {text:"Singular", correct: false }
        ]
    },

    {
        Question : "'.MOV' extension refers usually to what kind of file?",
        answers: [
            {text:"Image", correct: false },
            {text:"Audio", correct: false },
            {text:"MS Office document", correct: false },
            {text:"Animation/movie file", correct: true }
        ]
    },

    {
        Question : "The full form of DOM is?",
        answers: [
            {text:"Document oriented memory", correct: false },
            {text:"Document object model", correct: true },
            {text:"Document object memory", correct: false },
            {text:"None", correct: false }
        ]
    },

    {
        Question : "What does the term 'Full Stack Development' refer to?",
        answers: [
            {text:"Development that involves stack data structures", correct: false },
            {text:"Development that involves front-end and back-end programming", correct: true },
            {text:"Development that involves only backend programming", correct: false },
            {text:"None of the above", correct: false }
        ]
    },

    {
        Question : "Which of the following search engine is launched by Microsoft??",
        answers: [
            {text:"Yandex", correct: false },
            {text:"Google", correct: false },
            {text:"Safari", correct: false },
            {text:"Bing", correct: true }
        ]
    },

    {
        Question : "When did Google cloud platform launch?",
        answers: [
            {text:"2006", correct: false },
            {text:"2007", correct: false },
            {text:"2008", correct: true },
            {text:"2009", correct: false }
        ]
    },

    {
        Question : "Who invented C Programming?",
        answers: [
            {text:"Guido van Rossum", correct: false },
            {text:"Dennis Ritchie", correct: true },
            {text:"Bjarne Stroustrup", correct: false },
            {text:"James Gosling", correct: false }
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("buttons");
let nextButton = document.getElementById("nextbtn");

let currQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currQuestionIndex];
    let questionNo = currQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.Question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click" ,()=>{
    if(currQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();
