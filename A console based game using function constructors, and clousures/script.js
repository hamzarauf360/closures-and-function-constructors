var coddingChallenge7 = (function()

  {

    var score = scoreMaintainer();
    var Question = function(question, possibleAnswers, correctAnswer) {
      this.question = question;
      this.possibleAnswers = possibleAnswers;
      this.correctAnswer = correctAnswer;
    }

    var question0 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var question1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var question2 = new Question('What is the name of this course\'s student?', ['Amir', 'Hamza', 'Rosh'], 1);

    var questions = [question0, question1, question2];

    getRandomQuestion();

    function getRandomQuestion() {
      var questionNumber = Math.round(Math.random() * 2);
      console.log(questions[questionNumber].question);
      for (var i = 0; i < questions[questionNumber].possibleAnswers.length; i++) {
        console.log(i + ': ' + questions[questionNumber].possibleAnswers[i]);
      }

      var answer;

      answer = prompt('Please Select the correct answer (Just type the number)');

      correctOrNot(questionNumber, answer);
    }


    function correctOrNot(questionNumber, answer) {

      if (questions[questionNumber].correctAnswer == answer) {
        console.log('Answer is correct');
        score(true);
        getRandomQuestion();
      } else if (questions[questionNumber].correctAnswer != answer && answer !== 'exit') {
        console.log('Answer is wrong');
        score(false);

        getRandomQuestion();
      } else if (answer == 'exit') {
        console.log('Game ended');
      }
    }

    function scoreMaintainer() {
      var score = 0;
      return function(incOrNot) {
        if (incOrNot) {
          score++;
          scoreShower(score);

        } else {
          scoreShower(score);
        }
      }
    }

    function scoreShower(score) {
      console.log('your score is: ' +
        score);
    }

  })();