const questions = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "High Text Machine Language",
        "Hyperlinks and Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
},
{
    question: "Which language is used for styling web pages?",
    options: ["Python","CSS","Java","C++"],
    answer: "CSS"
},
{
    question: "Which language is used for interactivity?",
    options: ["Java","JavaScript","Python","C"],
    answer: "JavaScript"
}
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");

function loadQuestion(){
    question.innerHTML = questions[currentQuestion].question;
    options.innerHTML = "";

    questions[currentQuestion].options.forEach(option=>{
        const btn = document.createElement("button");
        btn.innerHTML = option;
        btn.classList.add("option-btn");

        btn.onclick = function(){
            if(option === questions[currentQuestion].answer){
                score++;
            }

            currentQuestion++;

            if(currentQuestion < questions.length){
                loadQuestion();
            }else{
                showResult();
            }
        };

        options.appendChild(btn);
    });
}

function showResult(){
    question.style.display = "none";
    options.style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    result.innerHTML =
        `Your Score: ${score}/${questions.length}`;
}

loadQuestion();