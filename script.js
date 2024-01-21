const questions = [
    {
        question: "what is the capital of france?",
        answers: [
            { text: "Delhi", correct: false },
            { text: "paris", correct: true },
            { text: "Brussels", correct: false },
            { text: "Albany", correct: false },
        ]
    },

    {
        question: "How many countries are there is the Earth?",
        answers: [
            { text: "Six", correct: false },
            { text: "Seven", correct: true },
            { text: "Eight", correct: false },
            { text: "Nine", correct: false },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Venus", correct: false },
            { text: "saturn", correct: false },
            { text: "Mercury", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2", correct: false },
            { text: "CCF", correct: false },
            { text: "2HO", correct: false },
            { text: "H2o", correct: true },
        ]
    },
    {
        question: "Who is The PM of India?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Yogi Adityanath", correct: false },
            { text: "Rahul Gandhi", correct: false },
            { text: "Meloni", correct: false },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Indian Ocean ", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: " Atlantic Ocean", correct: false },
            { text: "Pacific Ocean ", correct: true },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuentionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuentionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetState();
    let currentQuention = questions[currentQuentionIndex];
    let questionNo = currentQuentionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuention.question;
    currentQuention.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again Game";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuentionIndex++;
        if(currentQuentionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuentionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();