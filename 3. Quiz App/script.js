const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false },
        ]
    }
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
};

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
};

const resetState = () => {
    nextButton.style.display = "none";
    answerButton.innerHTML = "";
};

const selectAnswer = e => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");
    isCorrect && score++;
    Array.from(answerButton.children).forEach(button => {
        button.classList.toggle("correct", button.dataset.correct === "true");
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

const showScore = () => {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
};

const handleNextButton = () => {
    currentQuestionIndex++;
    currentQuestionIndex < questions.length ? showQuestion() : showScore();
};

nextButton.addEventListener("click", () => {
    currentQuestionIndex < questions.length ? handleNextButton() : startQuiz();
});

startQuiz();
