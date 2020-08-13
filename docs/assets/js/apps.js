$( document ).ready(function() {

      // variables and arrays //

      let time = 11;
      let correctCount = 0;
      let wrongCount = 0;
      let questionNumber = 0;
      let questionArray = [
        {
            question:"How did daddy learn about me? ",
            wrong1: " Through a text from mommy " ,
            wrong2: " Finding the positive test ",
            answer: " Leia told him ",
            wrong3: " Mommy left a note on daddy's pillow ",
            image: "<img class='corPics' src='assets/images/leia.jpg'>",
        },
      {
          question:"When I grow up I am going to be ",
          wrong1: " A doctor " ,
          wrong2: " A profesional athlete",
          answer: " An astronaut ",
          wrong3: " President ",
          image: "<img class='corPics' src='assets/images/space.gif'>",
      },
      {
          question: "Who is my favorite cuddle buddy?",
          wrong1: "Papa",
          answer: "Pity Pat",
          wrong2: "Mama",
          wrong3: "Leia",
          image: "<img class='corPics' src='assets/images/pity.jpg'>",
      },
      {
          question: "What is my favorite snack?",
          answer: "ice cream",
          wrong2: "chocolate",
          wrong1: "pringles",
          wrong3: "cashews",
          image: "<img class='corPics' src='assets/images/icecream.jpg'>",
      },
      {
          question: "What's my favorite TV show?",
          answer: "Gossip Girl",
          wrong2: "That 70's show",
          wrong1: "Community",
          wrong3: "Hell's Kitchen",
          image: "<img class='corPics' src='assets/images/gg.jpg'>",
      },
      {
          question: "What's my favorite outdoor activity?",
          wrong1: "gardening",
          wrong2: "hiking",
          answer: "swimming",
          wrong3: "skiing",
          image: "<img class='corPics' src='assets/images/swim.gif'>",
      },
      
  ]
  
  //main game loop//
  
  let start = function () {
      $("#start").on("click", function () {
          $("#start").remove();
          $("#pics").empty();
          $("#trivia").append().html(questionArray[questionNumber].question);
          answerShuffle();
          choice ();
      });
  }
  
  //functions for shuffling anf choosing answers
  
   let answerShuffle = function() {
      let answerArray = [questionArray[questionNumber].answer, questionArray[questionNumber].wrong1, questionArray[questionNumber].wrong2, questionArray[questionNumber].wrong3]
      answerArray.sort(function(a,b){return 0.5 - Math.random()});
      return answerArray.forEach(element => {
      $("#answers").append("<div class='options m-2'>" + element + "</div>")
      });
    }
  
  let choice = function () {
      let correct = questionArray[questionNumber].answer;
      $("div.options:contains('"+correct+"')").on("click", function() {
          $("#answers").empty();
          $("#trivia").empty();
          $("#trivia").append("Correct!");
          $("#pics").prepend(questionArray[questionNumber].image);
          correctCount++;
          console.log(correctCount);
          questionNumber++
          timeTillQuestion ();
      });
      $("div.options:not(:contains('"+correct+"'))").on("click", function() {
          $("#answers").empty();
          $("#trivia").empty();
          $("#trivia").append("Wrong! Correct answer was, " + correct)
          $("#pics").prepend("<div style='border: 10px lightgoldenrodyellow solid;'><img src='assets/images/wrong.gif'></div>");
          wrongCount++;
          console.log(wrongCount);
          questionNumber++
          timeTillQuestion ()
      });
      
  }
  
  // variables and functions for question timer 
  
  let timeTillQuestion = function () {
      setTimeout(nextQuestion, 10000)
  }
  
  //function to bring next question and start game over//
  
  let nextQuestion = function() {
      if (questionNumber <= 5) {
      time = 11;
      $("#trivia").empty();
      $("#pics").empty();
      $("#timer").empty();
      $("#trivia").append().html(questionArray[questionNumber].question);
      answerShuffle();
      choice ();
      console.log(questionNumber);
      }
      else {
          $("#trivia").empty();
          $("#pics").empty();
          $("#timer").empty();
          $("#trivia").append("GAME OVER");
          $("#answers").append("Correct Answers: " + correctCount);
          $("#pics").append("Wrong Answers: " + wrongCount);
          let retry= $('<input type="button" value="retry" id="retry" class="offset-lg-5 col-lg-2 btn btn-success"/>');
          $("#buttons").append(retry);
          $("#retry").on("click", function() {
              correctCount = 0;
              wrongCount = 0;
              questionNumber = 0;
              $("#retry").remove();
              $("#trivia").empty();
              $("#pics").empty();
              $("#timer").empty();
              $("#answers").empty();
              $("#trivia").append().html(questionArray[questionNumber].question);
              answerShuffle();
              choice ();
          });
      }
  }
  
  start()
  

});