
const questions = [
    {
        question: "1. How do you create a new Date object in JavaScript?",
        answers: ["new Date()", "Date.new()", "new DateObject()", "create Date()"],
        correct: 0
    },
    {
        question: "2. What will be the output of the following code: console.log(new Date(2024, 0, 1));?",
        answers: ["January 1, 2024", "December 31, 2024", "1/1/2024", "2024-01-01T00:00:00Z"],
        correct: 0
    },
    {
        question: "3. Which method is used to get the current timestamp in milliseconds?",
        answers: ["Date.now()", "Date.getTime()", "new Date().getTime()", "Date.getTimestamp()"],
        correct: 0
    },
    {
        question: "4. How can you get the year from a Date object?",
        answers: ["date.getYear()", "date.getFullYear()", "date.year()", "date.getUTCFullYear()"],
        correct: 1
    },
    {
        question: "5. Which method would you use to set the date of a Date object?",
        answers: ["setDate()", "updateDate()", "setDay()", "changeDate()"],
        correct: 0
    },
    {
        question: "6. What does the expression new Date() return?",
        answers: ["The current date and time", "A specific date in January", "An empty date object", "An error"],
        correct: 0
    },
    {
        question: "7. What will new Date(2024, 0) represent?",
        answers: ["January 1, 2024", "February 1, 2024", "December 1, 2024", "January 31, 2024"],
        correct: 0
    },
    {
        question: "8. If you use new Date(2024, 1, 29), what will the output be in a leap year?",
        answers: ["February 28, 2024", "February 29, 2024", "March 1, 2024", "An error"],
        correct: 1
    },
    {
        question: "9. How can you create a Date object representing exactly 5 seconds after midnight on January 1, 2024?",
        answers: ["new Date(2024, 0, 1, 0, 0, 5)", "new Date('2024)", "new Date(5, 2024, 0, 1)", "Both A and B"],
        correct: 0
    },
    {
        question: "10. What is the correct format for an ISO Date in JavaScript?",
        answers: ["YYYY-MM-DD", "MM/DD/YYYY", "YYYY/MM/DD", "YYYY-MM-DDTHH:mm:ssZ"],
        correct: 0
    },
    {
        question: "11. What will be the output of the following code: console.log(new Date('2015-03-25'));?",
        answers: ["March 25, 2015", "25 Mar 2015", "Invalid Date", "2015-03-25T00:00:00.000Z"],
        correct: 0
    },
    {
        question: "12. What is a valid short date format in JavaScript?",
        answers: ["03/25/2015", "25/03/2015", "March 25, 2015", "2015-03-25"],
        correct: 0
    },
    {
        question: "13. Which of the following is a valid long date format in JavaScript?",
        answers: ["Mar 25 2015", "25 Mar 2015", "Both A and B", "March 25, 2015"],
        correct: 2
    },
    {
        question: "14. What does ISO stand for in the context of date formats?",
        answers: ["International Standards Organization", "International Standardization Organization", "Internal Standard Organization", "International Software Organization"],
        correct: 1
    },
    {
        question: "15. What is the full form of GMT?",
        answers: ["Greenwich Mean Time", "Global Mean Time", "General Mean Time", "Greenwich Median Time"],
        correct: 0
    },
    {
        question: "16. What does UTC stand for?",
        answers: ["Universal Time Coordinated", "Universal Time Code", "Coordinated Universal Time", "Universal Coordinated Time"],
        correct: 2
    },
    {
        question: "17. What is the full form of IST in the context of time zones?",
        answers: ["Indian Standard Time", "International Standard Time", "Indian Summer Time", "Indian Standard Temperature"],
        correct: 0
    },
    {
        question: "18. In JavaScript, how are months indexed in the Date object?",
        answers: ["0-11", "1-12", "1-11", "0-12"],
        correct: 0
    },
    {
        question: "19. If you use new Date('2024-12-01').getFullYear(), what year will it return?",
        answers: ["2023", "2024", "2025", "Invalid Date"],
        correct: 1
    },
    {
        question: "20. What would be the result of new Date('2024-06-15').getMonth() in terms of calendar months?",
        answers: ["June", "5", "11", "December"],
        correct: 1
    },
    {
        question: "21. If today is the 15th of the month, what value will new Date().getDate() return?",
        answers: ["15", "0", "14", "16"],
        correct: 0
    },
    {
        question: "22. What will new Date('2024-10-26').getDay() return if October 26, 2024, is a Saturday?",
        answers: ["5", "6", "0", "1"],
        correct: 1
    },
    {
        question: "23. If new Date().getHours() returns 14, what time is it in 12-hour format?",
        answers: ["2 PM", "2 AM", "14:00", "12 PM"],
        correct: 0
    },
    {
        question: "24. Which method would you use to find out how many minutes have passed since midnight?",
        answers: ["getSeconds()", "getTime()", "getMinutes()", "getHours()"],
        correct: 3
    },
    {
        question: "25. What would new Date('2024-01-01').getSeconds() bydefault return?",
        answers: ["0", "60", "January", "1"],
        correct: 0
    },
    {
        question: "26. If you call getMilliseconds() after creating a new Date object, what range of values could you expect?",
        answers: ["0-1000", "0-999", "1-1000", "0-59"],
        correct: 1
    },
    {
        question: "27. If new Date('1970-01-01').getTime() is executed, what is the expected output?",
        answers: ["0", "1", "Negative value", "Infinity"],
        correct: 0
    },
    {
        question: "28. What is the purpose of the setDate() method?",
        answers: ["Set the day of the week", "Set the day of the month (1-31)", "Set the month (0-11)", "Set the year (four digits)"],
        correct: 1
    },
    {
        question: "29. If you use new Date().setFullYear(2025), what happens to the current month and day?",
        answers: ["They remain unchanged", "They are set to January 1", "They are set to the last day of the month", "They become undefined"],
        correct: 0
    },
    {
        question: "30. What will be the result of new Date().setHours(25)?",
        answers: ["Error: Invalid hour", "1 AM", "25:00:00", "12 AM"],
        correct: 0
    },
    {
        question: "31. When using setMilliseconds(), what range of values is acceptable?",
        answers: ["0-999", "0-1000", "1-999", "0-59"],
        correct: 0
    },
    {
        question: "32. What will happen if you call setMinutes(61) on a Date object?",
        answers: ["Error: Invalid minutes", "It will reset to 0", "It will throw an exception", "It will set the minutes to 1"],
        correct: 1
    },
    {
        question: "33. How does setMonth() treat the month argument, and what is a potential issue?",
        answers: ["0-11, can cause confusion with user input", "1-12, correctly interprets user input", "1-11, does not accept December", "0-12, allows for one extra month"],
        correct: 0
    },
    {
        question: "34. If setSeconds(30) is called on a Date object that represents midnight, what will be the new time?",
        answers: ["12:00:30 AM", "12:30 AM", "00:30", "12:01 AM"],
        correct: 0
    },
    {
        question: "35. What does setTime() do when given a value of `0`?",
        answers: ["Sets the date to January 1, 1970", "Resets the time to the current time", "Throws an error", "Sets the time to the system time"],
        correct: 0
    },
    {
        question: "36. What will be the result of Math.round(3.6)?",
        answers: ["3", "4", "3.5", "5"],
        correct: 1
    },
    {
        question: "37. If you use Math.round(-2.5), what is the expected output?",
        answers: ["-2", "-3", "-2.5", "0"],
        correct: 0
    },
    {
        question: "38. What does Math.ceil(4.1) return?",
        answers: ["4", "4.1", "5", "3"],
        correct: 2
    },
    {
        question: "39. What will Math.ceil(-3.7) return?",
        answers: ["-3", "-4", "-3.7", "0"],
        correct: 0
    },
    {
        question: "40. What will be the output of Math.floor(5.9)?",
        answers: ["6", "5", "5.9", "4"],
        correct: 1
    },
    {
        question: "41. If you call Math.floor(-2.3), what is the result?",
        answers: ["-2", "-3", "-1", "-2.3"],
        correct: 1
    },
    {
        question: "42. What does Math.trunc(7.9) return?",
        answers: ["7", "8", "7.9", "0"],
        correct: 0
    },
    {
        question: "43. What will Math.trunc(-4.5) return?",
        answers: ["-4", "-5", "4", "-4.5"],
        correct: 0
    },
    {
        question: "44. What is the range of values returned by Math.random()?",
        answers: ["0 to 9", "0 to 1 ", "1 to 10", "Negative values only"],
        correct: 1
    },
    {
        question: "45. If you want to generate a random integer between 1 and 10 (inclusive), which of the following expressions would you use?",
        answers: ["Math.floor(Math.random() * 10) + 1", "Math.floor(Math.random() * 11)", "Math.random() * 10 + 1", "Math.round(Math.random() * 10)"],
        correct: 0
    },
    {
        question: "46. What will `Math.random()` return if called multiple times in a loop?",
        answers: ["The same number each time", "Different numbers each time", "Always zero", "Always one"],
        correct: 1
    },
    {
        question: "47. What is the output of `Boolean(0)`?",
        answers: ["true", "false", "undefined", "null"],
        correct: 1
    },
    {
        question: "48. What will the expression `typeof true` return?",
        answers: ["'boolean'", "'true'", "'number'", "'string'"],
        correct: 0
    },
    {
        question: "49. Which operator is used to perform a logical AND operation in JavaScript?",
        answers: ["&&", "||", "!", "=="],
        correct: 0
    },
    {
        question: "1. Which of the following statements is TRUE regarding JavaScript?",
        answers: [
            "The `Math.random()` function always returns the same value.",
            "JavaScript Date objects count months from 1 to 12.",
            "A Boolean value can only be `true` or `false`.",
            "The `Math.ceil()` function rounds a number down to the nearest integer."
        ],
        correct: 2
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
