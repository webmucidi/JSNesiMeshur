// Define an object that contains questions and answers for each state
const stateQuestions = {
    Marmara: {
      question: "Marmara bölgesinin en kalabalık şehri?",
      choices: ["Bursa", "Edirne", "İstanbul", "Kocaeli"],
      answer: "İstanbul"
    },
    Karadeniz: {
      question: "Karadeniz bölgesinin en meşhur yemeği?",
      choices: [
        "Hamsi",
        "Kebap",
        "Künefe",
        "Lahmacun"
      ],
      answer: "Hamsi"
    },
    Ege: {
      question: "Ege bölgesinin en önemli gelir kaynağı?",
      choices: [
        "Sanayi",
        "İnşaat",
        "Tarım",
        "Turizm"
      ],
      answer: "Turizm"
    }
    // Add more states here
  };
  
  //let currentQuestion = null;
  let dogruCevap;
  
  // Function that displays a random question and its choices for the selected state
  function showQuestion(bolge) {

    document.getElementById("question-container").style.display = "block";

    // Get a random question from the stateQuestions object
    const questions = stateQuestions[bolge];
    //const questionKeys = Object.keys(questions);
    //const randomQuestionKey =questionKeys[Math.floor(Math.random() * questionKeys.length)];
    const randomQuestion = questions['question'];
    dogruCevap=questions['answer'];
  
    
  
    /* Set the current question
    currentQuestion = {
      state: state,
      question: randomQuestion.question,
      choices: randomQuestion.choices,
      answer: randomQuestion.answer
    };
    */
  
    // Display the question and choices on the page
    document.getElementById("question").textContent = randomQuestion;
    document.getElementById("choices").innerHTML = "";
    questions['choices'].forEach((choice) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = choice;
      li.appendChild(input);
      li.appendChild(document.createTextNode(choice));
      document.getElementById("choices").appendChild(li);
    });
  

  }
  
  // Function that checks if the user's answer is correct
  function checkAnswer() {
    
    const userAnswer = document.querySelector('input[name="choice"]:checked').value;
      
      
    if (userAnswer === dogruCevap) {
      alert("Correct!");
    } else {
      alert("Incorrect. The correct answer is: " + dogruCevap);
    }
    // Hide the question container
    document.getElementById("question-container").style.display = "none";
    
  }
  