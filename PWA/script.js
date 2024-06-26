// Quiz questions and answers (replace with your own)
const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["London", "Paris", "Berlin"]
    },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("quiz-container");
  const submitButtonEl = document.getElementById("submit-button");
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    questionEl.innerHTML = `<h3>${question.question}</h3>`; // Add question content
    questionEl.innerHTML += `<ul>`; // Add answer options list
    question.options.forEach(option => {
      questionEl.innerHTML += `<li><input type="radio" name="answer" value="${option}"> ${option}</li>`;
    });
    questionEl.innerHTML += `</ul>`; // Close answer options list
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === questions[currentQuestion].answer) {
        score++;
        questionEl.innerHTML = "Correct!";
      } else {
        questionEl.innerHTML = "Incorrect. The correct answer is " + questions[currentQuestion].answer;
      }
    } else {
      questionEl.innerHTML = "Please select an answer.";
    }
    submitButtonEl.disabled = true; // Disable submit button after answering
  }
  
  function submitQuiz() {
    checkAnswer();
    if (currentQuestion === questions.length - 1) {
      questionEl.innerHTML += `<p>Your score is ${score} out of ${questions.length}</p>`;
    } else {
      currentQuestion++;
      displayQuestion();
      submitButtonEl.disabled = false; // Enable submit button for next question
    }
  }
  
  displayQuestion();
  
  submitButtonEl.addEventListener("click", submitQuiz);
  