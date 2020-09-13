const quizData = [
    {
        question: 'How old s Florin ?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, 
    {
        question: 'What is the most used programming language in 2019 ?',
        a: 'Java',
        b: 'C',
        c: 'Pyhton',
        d: 'JavaScript',
        correct: 'a'
    },
     {
         question: 'Who is the President of US?',
         a: 'Florin Pop',
         b: 'Donald Trump',
         c: 'Ivan Saldano',
         d: 'Mihai Andrei',
         correct: 'b'
     },
     {
         question: 'What does HTML stand for ?',
         a: 'Hypertext Markup Language',
         b: 'Cascading Style Sheet',
         c: 'Jason Object Notation',
         d: 'Hellicopters Terminals Motorboats Lamborginis',
         correct: 'a'
     },
     {
         question: 'What year was JavaScript launched?',
         a: '1996',
         b: '1995',
         c: '1994',
         d: '1993',
         correct: 'b'
     }
]

const questionEl = document.getElementById(question);
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;


loadQuiz();
function loadQuiz() {
    deselectAnswere();
    const currentQuizdata = quizData[currentQuestion]
    question.innerText = currentQuizdata.question;

    a_text.innerText = currentQuizdata.a;
    b_text.innerText = currentQuizdata.b;
    c_text.innerText = currentQuizdata.c;
    d_text.innerText = currentQuizdata.d;

    
} 

function getSelected() {
    var answerEls = document.querySelectorAll('.answere');

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
            return answer;
        }
    });


    return answer;
}


function deselectAnswere(){
    var answerEls = document.querySelectorAll('.answere');
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answere = getSelected();
    console.log(answere)

    if( answere){

        if(answere === quizData[currentQuestion].correct){
            score++;
        }

        currentQuestion++;

        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show results 
            quiz.innerHTML = `<h2>You have correct answere at ${score}/${quizData.length}</h2> <button onClick="location.reload()">Reload<button>`;
        }
    }
    

    

   
    
})