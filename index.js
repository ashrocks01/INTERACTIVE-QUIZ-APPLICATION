const quizData = [
    {
        question:"What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language"
        ],
        correct:0,
    },
    {
        question: "Which CSS property is used to control spacing between elements?",
        options: ["margin","padding","spacing","border-spacing"],
        correct:1,
    },

    {
        question: "The property in CSS used to change the background color of an element is?",
        options : ["bgcolor", "color", "background-color", "All of the above"],
        correct : 2,
    },

    {
        question: "The HTML attribute used to define the inline styles is?",
        options: ["style","styles","class","link"],
        correct : 0,
    },

    {
        question: "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        options : ["p {background-color : yellow;}","p {background-color : #yellow;}","all {background-color : yellow;}","all p {background-color : #yellow;}"],
        correct : 0,
    },

    {
        question : "In React.js which hook is used to perform side effects in a function component",
        options : ["useEffect","useState","useContext","useReducer"],
        correct: 0.
    },
];

//Step 2: Javascript initialization

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4] = 
    document.querySelectorAll(
        "#question, .option_1, .option_2, .option_3, .option_4 "
    );

    const submitBtn = document.querySelector("#submit");

    let currentQuiz = 0;
    let score = 0;

    //load quiz function

    const loadQuiz = () => {
        const {question, options } = quizData[currentQuiz];    
        console.log(question);

        questionElm.innerText = question;
        options.forEach(
            (curOption,index)=> (window[`option_${index + 1}`].innerText = curOption)
        );
    };

    loadQuiz();


    // Step 4: get selected on button click

    const getSelectedOption = () => {
       // let ans_index;
     //   answerElm.forEach((curOption,index)=>{
      //      if(curOption.checked) {
          //      ans_index = index;
          //  }
     //   });

     let answerElement = Array.from(answerElm);
     return answerElement.findIndex((curElm)=>curElm.checked);
    }

    //deselectedAnswers

    const deselectedAnswers = () => {
       return answerElm.forEach((curElm)=> curElm.checked = false);
    }

    submitBtn.addEventListener('click',() =>{
        const selectedOptionIndex = getSelectedOption();
        console.log(selectedOptionIndex);

        if (selectedOptionIndex === quizData[currentQuiz].correct) {
            score = score + 1;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            deselectedAnswers();
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <div class = "result">
            <h2> Your score: ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the quiz !</h2>
            <button class="reload-button" onclick="location.reload()"> Play Again </button>
            </div>
            `;
        }
    })