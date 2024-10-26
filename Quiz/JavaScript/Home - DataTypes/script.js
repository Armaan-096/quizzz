const questions = [
    {
        question: "1. What is the full form of JS?",
        answers: ["JavaStack", "JavaSculp", "JavaScript", "All of the above"],
        correct: 2
    },
    {
        question: "2. What was JavaScript originally called?",
        answers: ["Java", "Mocha", "LiveScript", "ECMAScript"],
        correct: 1
    },
    {
        question: "3. Which company developed JavaScript?",
        answers: ["Microsoft", "Apple", "Netscape", "Sun Microsystems"],
        correct: 2
    },
    {
        question: "4. JavaScript is a interpret language programming language.",
        answers: ["True","False"],
        correct: 0
    },
    {
        question: "5. Which of the following is NOT a JavaScript data type?",
        answers: ["String", "Boolean", "Float", "Undefined"],
        correct: 2
    },
    {
        question: "6. What is the output of the following code: console.log(2 + '2');?",
        answers: ["4", "'22'", "NaN", "'2 + 2'"],
        correct: 1
    },
    {
        question: "7. How do you declare a variable in JavaScript?",
        answers: ["var", "let", "const", "All of the above"],
        correct: 3
    },
    {
        question: "8. Which symbol is used for single-line comments in JavaScript?",
        answers: ["//", "/*", "<!--", "**"],
        correct: 0
    },
    {
        question: "9. What is 'NaN' in JavaScript?",
        answers: ["Not a Name", "Not a Number", "Not a Null", "No any Number"],
        correct: 1
    },
    {
        question: "10. What is JavaScript primarily used for in web development?",
        answers: ["Server-side development", "Adding Functionality to web pages", "Designing layouts", "Database management"],
        correct: 1
    },
    {
        question: "11. Which of the following applications can JavaScript be used to create?",
        answers: ["Digital watches", "Interactive forms", "Image sliders", "All of the above"],
        correct: 3
    },
    {
        question: "12. Is JavaScript the same as Java?",
        answers: ["Yes, they are identical languages", "No, they are different languages with distinct purposes", "Yes, JavaScript is a version of Java", "No, JavaScript is a database language"],
        correct: 1
    },
    {
        question: "13. Why do developers use JavaScript in web development?",
        answers: ["To add dynamic features and interactivity", "To style web pages", "To manage databases", "To create static content"],
        correct: 0
    },
    {
        question: "14. Which of the following are ways JavaScript can display data?",
        answers: [
            "Using document.getElementbyId() to write into an HTML element ",
            "Using innerHTML to write into an HTML element",
            "Using document.write() to write into the HTML output",
            "Using alert() to display an alert box",
            "All of the above"
        ],
        correct: 4
    },
    {
        question: "15. Which of the following is a valid JavaScript statement to declare a variable?",
        answers: ["let myVar = 5;", "declare myVar = 5;", "set myVar to 5;", "define myVar as 5;"],
        correct: 0
    },
    {
        question: "16. For completing a proper statement which symbol is being used?",
        answers: ["Fullstop(.)","Comma(,)","Colon(:)","Semicolon(;)"],
        correct: 3
    },
    {
        question: "17. Which keyword should you use to declare a variable that cannot be reassigned?",
        answers: ["var", "let", "const", "All of the above"],
        correct: 2
    },
    {
        question: "18. What happens if you try to redeclare a variable declared with `let`?",
        answers: [
            "It will overwrite the original variable",
            "It will cause a syntax error",
            "It will do nothing",
            "It will create a new variable"
        ],
        correct: 1
    },
    {
        question: "19. Can you initialize a const variable without assigning a value?",
        answers: [
            "Yes, it's allowed",
            "No, you must assign a value",
            "Only in a function",
            "Yes, but it will be undefined"
        ],
        correct: 1
    },
    {
        question: "20. What will happen if you try to reassign a `const` variable?",
        answers: [
            "The value will change",
            "An error will be thrown",
            "It will be ignored",
            "It will be reset to undefined"
        ],
        correct: 1
    },
    {
        question: "21. Which of the following is true about var declarations?",
        answers: [
            "They can be redeclared",
            "They cannot be redeclared",
            "They must be declared at the element",
            "They are immutable"
        ],
        correct: 0
    },
    {
        question: "22. What is the primary reason to use let instead of var?",
        answers: [
            "To declare variables globally",
            "To prevent variable hoisting",
            "To avoid redeclaration issues",
            "To declare constants"
        ],
        correct: 2
    },
    {
        question: "23. Can a const variable hold an array or object?",
        answers: [
            "No, only primitive data types",
            "Yes, but you can't change the reference",
            "Yes, and you can change the reference",
            "No, it cannot hold any complex data type"
        ],
        correct: 1
    },
    {
        question: "24. Which of the following allows for constant values?",
        answers: ["var", "let", "const", "All of the above"],
        correct: 2
    },
    {
        question: "25. Which keyword is best to use when you are not sure if the variable will be reassigned?",
        answers: ["var", "let", "const", "All of the above"],
        correct: 1
    },
    {
        question: "26. Can a variable declared with `const` be reassigned a new value?",
        answers: ["Yes", "No", "Only if it's an object", "Only within a function"],
        correct: 1
    },
    {
        question: "27. What is the result of the following expression: 5 + 3 * 2?",
        answers: ["16", "11", "8", "10"],
        correct: 1
    },
    {
        question: "28. Which operator is used to assign a value to a variable?",
        answers: ["=", "==", "===", "=>"],
        correct: 0
    },
    {
        question: "29. Which operator is used to concatenate two strings in JavaScript?",
        answers: ["&", "+", ".", "concat()"],
        correct: 1
    },
    {
        question: "30. What will be the Data Type of 'Hello'?",
        answers: ["string", "number", "object", "undefined"],
        correct: 0
    },
    {
        question: "31. What will the expression x += 5 do if x is currently 10?",
        answers: ["Set x to 5", "Set x to 15", "Set x to 10", "Throw an error"],
        correct: 1
    },
    {
        question: "32. What does the ** operator do in JavaScript?",
        answers: ["Division", "Exponentiation", "Multiplication", "Modulus"],
        correct: 1
    },
    {
        question: "33. What is the output of the expression 10 % 3?",
        answers: ["3", "1", "10", "0"],
        correct: 1
    },
    {
        question: "34. If x = 5, what will be the value of ++x?",
        answers: ["4", "5", "6", "Error"],
        correct: 2
    },
    {
        question: "35. What does the += operator do in JavaScript?",
        answers: [
            "Assigns a value",
            "Adds and assigns the value",
            "Subtracts and assigns the value",
            "Multiplies and assigns the value"
        ],
        correct: 1
    },
    {
        question: "36. What will be the result of let x = 10; x *= 2;?",
        answers: ["10", "20", "2", "Error"],
        correct: 1
    },
    {
        question: "37. Which operator would you use to subtract and assign a value to a variable?",
        answers: ["-=", "+=", "/=", "*="],
        correct: 0
    },
    {
        question: "38. What will the type of `typeof null` return?",
        answers: ["null", "undefined", "object", "string"],
        correct: 2
    },
    {
        question: "39. What data type is 5 in JavaScript?",
        answers: ["String", "Number", "BigInt", "Boolean"],
        correct: 1
    },
    {
        question: "40. What is the value of Boolean?",
        answers: ["true", "false", "Both A and B", "null"],
        correct: 2
    },
    {
        question: "41. What will `typeof undefined` return?",
        answers: ["undefined", "null", "object", "string"],
        correct: 0
    },
    {
        question: "42. Which data type is used to represent a collection of key-value pairs or Name-index?",
        answers: ["Symbol", "Object", "BigInt", "Boolean"],
        correct: 1
    },
    {
        question: "43. What is the result of `typeof NaN`?",
        answers: ["Number", "NaN", "undefined", "object"],
        correct: 0
    },
    {
        question: "44. In what year was JavaScript first introduced?",
        answers: ["1995", "2000", "2010", "1990"],
        correct: 0
    },
    {
        question: "45. What is the purpose of the `console.log()` function in JavaScript?",
        answers: [
            "To display an alert box",
            "To write output to the console",
            "To create a new variable",
            "To define a function"
        ],
        correct: 1
    },
    {
        question: "46. Which of the following data types is used to represent true or false values in JavaScript?",
        answers: ["String", "Number", "Boolean", "Object"],
        correct: 2
    },
    {
        question: "47. What is the output of the following code: `console.log(typeof 'Hello World')`?",
        answers: ["string", "text", "object", "undefined"],
        correct: 0
    },
    {
        question: "48. What is JavaScript primarily used for?",
        answers: ["Building mobile applications","Creating interactive web pages","Developing desktop applications","Managing databases"],
        correct: 1
    },
    {
        question: "49. What is the correct syntax to create a variable in JavaScript?",
        answers: ["var myVar;","let myVar;","const myVar;","All of the above"],
        correct: 3
    },
    {
        question: "1. Which of the following is a valid way to declare a constant in JavaScript?",
        answers: ["const myConstant = 10;","let myConstant = 10;","var myConstant = 10;","constant myConstant = 10;"],
        correct: 0
    }    
           
];

let currentQuestion = 0;
const answersState = Array(questions.length).fill(null); // null = not attempted
let startTime = Date.now();
let timeLeft = 30 * 60; // 30 minutes in seconds
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');

// Timer function
const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(countdown);
        submitQuiz(); // Automatically submit the quiz when time's up
    }
}, 1000);

// Create question boxes
const questionBox = document.getElementById('question-box');
for (let i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.textContent = i + 1;
    questionDiv.classList.add('question-status');
    questionDiv.onclick = () => goToQuestion(i);
    questionBox.appendChild(questionDiv);
}

function updateQuestionBox() {
    const questionStatus = document.querySelectorAll('.question-status');
    questionStatus.forEach((box, index) => {
        box.classList.remove('current', 'answered', 'skipped');
        if (answersState[index] === null) {
            if (index === currentQuestion) {
                box.classList.add('current');
            }
        } else if (answersState[index] === false) {
            box.classList.add('skipped');
        } else {
            box.classList.add('answered'); // Mark as answered without color
        }
    });

    updateProgressBar();
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.checked = answersState[currentQuestion] === index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(label);
    });

    document.getElementById('next').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

function goToQuestion(index) {
    saveAnswer();
    currentQuestion = index;
    displayQuestion();
    updateQuestionBox();
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        answersState[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        answersState[currentQuestion] = false; // Mark as skipped if no answer selected
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
    }
    displayQuestion();
    updateQuestionBox();
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
    }
    displayQuestion();
    updateQuestionBox();
}

function submitQuiz() {
    saveAnswer(); // Save last answer
    let score = 0;
    let attempted = 0;
    let skipped = 0;

    questions.forEach((question, index) => {
        const questionDiv = document.querySelector(`#question-box .question-status:nth-child(${index + 1})`);
        const modalQuestionDiv = document.querySelector(`#question-box-modal .question-box-modal-item:nth-child(${index + 1})`);

        if (answersState[index] !== null) {
            attempted++;
            if (answersState[index] === question.correct) {
                score++;
                modalQuestionDiv.style.backgroundColor = '#b4d6fc';
            } else {
                modalQuestionDiv.style.backgroundColor = '#ffc355';
            }
            modalQuestionDiv.onclick = () => showPopover(index); // Show popover on click
        } else {
            skipped++;
        }
    });

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000); // Time taken in seconds
    const minutesTaken = Math.floor(timeTaken / 60);
    const secondsTaken = timeTaken % 60;

    document.getElementById('attempted').textContent = attempted;
    document.getElementById('skipped').textContent = skipped;
    document.getElementById('correct').textContent = score;
    document.getElementById('time-taken').textContent = `${minutesTaken}m ${secondsTaken}s`;
    document.getElementById('final-score').textContent = `You have scored ${score} out of ${questions.length}.`;

    showModal();
}

// Show modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Initialize the first question
displayQuestion();
updateQuestionBox();

// Create question boxes for modal
function createQuestionBoxes() {
    const questionBoxModal = document.getElementById('question-box-modal');

    for (let i = 1; i <= questions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.textContent = `${i}`;
        questionDiv.classList.add('question-box-modal-item');
        questionBoxModal.appendChild(questionDiv);
    }
}

// Call the function to create question boxes
createQuestionBoxes();

// Popover functionality
function showPopover(index) {
    const popover = document.getElementById('popover');
    const question = questions[index];
    const submittedAnswerIndex = answersState[index];
    const correctAnswerIndex = question.correct;

    document.getElementById('popover-question').textContent = question.question;
    const submittedAnswerElement = document.getElementById('popover-submitted-answer');
    const correctAnswerElement = document.getElementById('popover-correct-answer');

    submittedAnswerElement.textContent = question.answers[submittedAnswerIndex];
    correctAnswerElement.textContent = question.answers[correctAnswerIndex];

    if (submittedAnswerIndex === correctAnswerIndex) {
        submittedAnswerElement.style.color = 'green';
    } else {
        submittedAnswerElement.style.color = 'red';
    }
    correctAnswerElement.style.color = 'green';

    popover.style.display = 'block';
    // popover.style.top = `${event.clientY}px`;
    // popover.style.left = `${event.clientX}px`;
}

// Close the popover
function closePopover() {
    document.getElementById('popover').style.display = 'none';
}
