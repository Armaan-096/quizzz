
const questions = [
    {
        question: "1. What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High-Level Text Markup Language", "Hyperlinks and Text Markup Language", "Hyper Textual Markup Language"],
        correct: 0
    },
    {
        question: "2. Which of the following is the correct HTML tag for the largest heading?",
        answers: ["<h1>", "<heading>", "<h6>", "<head>"],
        correct: 0
    },
    {
        question: "3. What is the purpose of the <a> tag in HTML?",
        answers: ["To create a table", "To define a hyperlink", "To create a form", "To display an image"],
        correct: 1
    },
    {
        question: "4. Which HTML element is used to define an unordered list?",
        answers: ["<ol>", "<ul>", "<li>", "<list>"],
        correct: 1
    },
    {
        question: "5. What attribute is used to provide a unique identifier for an HTML element?",
        answers: ["class", "id", "name", "type"],
        correct: 1
    },
    {
        question: "6. Which tag is used to insert an image in HTML?",
        answers: ["<img>", "<image>", "<src>", "<pic>"],
        correct: 0
    },
    {
        question: "7. Which of the following is the correct syntax to link an external CSS file in HTML?",
        answers: ["<link rel='stylesheet' href='styles.css'>", "<css src='styles.css'>", "<link rel='stylesheet' src='styles.css'>", "<style href='styles.css'>"],
        correct: 0
    },
    {
        question: "8. What does the <br> tag do in HTML?",
        answers: ["Creates a new paragraph", "Inserts a line break", "Creates a horizontal line", "Inserts a block of text"],
        correct: 1
    },
    {
        question: "9. Which HTML element is used to define a form for user input?",
        answers: ["<input>", "<form>", "<submit>", "<textarea>"],
        correct: 1
    },
    {
        question: "10. What is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<lb>", "<br>", "<newline>"],
        correct: 2
    },
    {
        question: "11. What is HTML?",
        answers: ["A programming language", "A markup language", "A style sheet language", "A database management system"],
        correct: 1
    },
    {
        question: "12. What is the primary use of HTML?",
        answers: ["To provide functionality", "For styling or designing the website", "To make the structure of the web page", "For server-side processing"],
        correct: 2
    },
    {
        question: "13. What is the purpose of the <div> tag in HTML?",
        answers: ["To create a division or section", "To add an image", "To insert a line break", "To create an unordered list"],
        correct: 0
    },
    {
        question: "14. What does the <p> tag represent in HTML?",
        answers: ["A paragraph", "A heading", "A hyperlink", "An image"],
        correct: 0
    },
    {
        question: "15. Can we code in text editors like Notepad and TextEdit?",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "16. An HTML element is defined by which of the following?",
        answers: [
            "A start tag, content, and an end tag", "Content only", "An end tag and content only", "None of the above"
        ],
        correct: 0
    },
    {
        question: "17. What do attributes provide in an HTML element?",
        answers: ["Additional information about elements", "A way to create new elements", "Styling options for elements",
            "Functionality for user interactions"],
        correct: 0
    },
    {
        question: "18. Attributes are always specified in the start tag",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "19. How many type of heading are there in HTML?",
        answers: ["3", "5", "6", "7"],
        correct: 2
    },
    {
        question: "20. What does the <b> tag do in HTML?",
        answers: ["Creates a bold text","Indicates BDO","Creates italic text","Creates a marked text"],
        correct: 0
    },
    {
        question: "21. What is the purpose of the <strong> tag?",
        answers: ["To create subscript text","To emphasize important text","To create italic text","To insert text"],
        correct: 1
    },
    {
        question: "22. What effect does the <i> tag have on text?",
        answers: ["Makes the text bold","Creates italic text","Delete the text","Marks the text"],
        correct: 1
    },
    {
        question: "23. What does the <em> tag do?",
        answers: ["Marks the text","Indicates emphasized text","Creates smaller text","Indicates deleted text"],
        correct: 1
    },
    {
        question: "24. What is the purpose of the <mark> tag?",
        answers: ["To create emphasized text","To mark text for reference","To create bold text","To create italic text"],
        correct: 1
    },
    {
        question: "25. What does the <small> tag do?",
        answers: ["Creates smaller text","Creates subscript text","Creates superscript text","Marks deleted text"],
        correct: 0
    },
    {
        question: "26. What does the <del> tag indicate in HTML?",
        answers: ["Inserted text","Emphasized text","Deleted text","Important text"],
        correct: 2
    },
    {
        question: "27. What is the function of the <ins> tag?",
        answers: ["To indicate Underline text","To create subscript text","To create smaller text","To create italic text"],
        correct: 0
    },
    {
        question: "28. What does the <sub> tag do in HTML?",
        answers: ["Creates superscript text","Creates subscript text","Creates bold text","Creates important text"],
        correct: 1
    },
    {
        question: "29. What is the purpose of the <sup> tag?",
        answers: ["To create bold text","To create emphasized text","Creates subscript text","Creates superscript text"],
        correct: 3
    },
    {
        question: "30. What does the <blockquote> tag do?",
        answers: ["Indicates a short quotation","Defines a block of text that is quoted from another source","Creates a bold text","Indicates emphasized text"],
        correct: 1
    },
    {
        question: "31. What is the purpose of the <q> tag?",
        answers: ["To create a block quotation","To indicate a short inline quotation","To define a citation","To create bold text"],
        correct: 1
    },
    {
        question: "32. What does the <abbr> tag represent in HTML?",
        answers: ["An abbreviation for a term","A block of text","An inline quotation","A citation from a source"],
        correct: 0
    },
    {
        question: "33. What is the function of the <address> tag?",
        answers: ["To define a physical address","To create a block quotation","To indicate a short quotation","To create an abbreviation"],
        correct: 0
    },
    {
        question: "34. What does the <cite> tag do?",
        answers: ["Indicates a citation from a source","Creates emphasized text","Defines a block of text","Indicates a short quotation"],
        correct: 0
    },
    {
        question: "35. What is the purpose of the <bdo> tag in HTML?",
        answers: ["To specify the text direction","To create a bold text","To define a block of text","To indicate emphasized text"],
        correct: 0
    },
    {
        question: "36. What does the <favicon> element specify?",
        answers: ["The title of the webpage", "The icon displayed in the browser tab", "The background color", "The default font style"],
        correct: 1
    },
    {
        question: "37. What is the purpose of the `<label>` element?",
        answers: ["To create a button", "To define a caption for an input element", "To group input elements", "To display a dropdown"],
        correct: 1
    },
    {
        question: "38. Which input type is used for selecting a date?",
        answers: ["<input type='date'>", "<input type='calendar'>", "<input type='datetime'>", "<input type='time'>"],
        correct: 0
    },
    {
        question: "39. What does the `<select>` element create?",
        answers: ["A dropdown list", "A checkbox", "A radio button", "An input field"],
        correct: 0
    },
    {
        question: "40. Which input type is used for a password field?",
        answers: ["<input type='password'>", "<input type='text'>", "<input type='hidden'>", "<input type='secure'>"],
        correct: 0
    },
    {
        question: "41. Which input type allows the user to select a color?",
        answers: ["<input type='color'>", "<input type='palette'>", "<input type='picker'>", "<input type='hex'>"],
        correct: 0
    },
    {
        question: "42. What is the purpose of the `<iframe>` element in HTML?",
        answers: ["To create a hyperlink", "To embed another document within the current HTML document", "To display images", "To define a list of items"],
        correct: 1
    },
    {
        question: "43. Which tag is used to create an ordered list in HTML?",
        answers: ["<ul>", "<ol>", "<list>", "<li>"],
        correct: 1
    },
    {
        question: "44. What is the purpose of the <meta> tag in the `<head>` section of an HTML document?",
        answers: ["To link to CSS files", "To provide metadata about the HTML document", "To define the main content", "To create a title"],
        correct: 1
    },
    {
        question: "45. What is the purpose of the required attribute in an HTML input element?",
        answers: ["To set a default value", "To specify that the input field must be filled out before submitting the form", "To limit the number of characters", "To define the input type"],
        correct: 1
    },
    {
        question: "46. What does the placeholder attribute do in an input field?",
        answers: ["It provides a default value", "It shows a hint to the user about what to enter in the field", "It makes the field required", "It defines a pattern for the input"],
        correct: 1
    },
    {
        question: "47. There are three type of CSS",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "48. Which color code is most commonly used in our programming careers?",
        answers: ["rgb","hsl","hwb","hex"],
        correct: 3
    },
    {
        question: "49. Does HTML is a programming language?",
        answers: ["True","False"],
        correct: 1
    },
    {
        question: "50. td, tr & th is topic from?",
        answers: ["Formatting","Heading","Forms","Table"],
        correct: 3
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
