$( document ).ready(function() {

    // variables and arrays //

    let time = 11;
    let correctCount = 0;
    let wrongCount = 0;
    let questionNumber = 0;
    let questionArray = [
    {
        question:" Babam beni nasıl öğrendi? ",
        wrong1: " Annem mesaj gönderdi " ,
        wrong2: " Positive test sonucu buldu",
        answer: " Leia söyledi ",
        wrong3: " Annem babamın yastığına not bıraktı ",
        image: "<img class='corPics' src='assets/images/leia.jpg'>",
    },
    {
        question:"Büyüdüğüm zaman ne olacağım? ",
        wrong1: " Doktor " ,
        wrong2: " Profesyonel atlet",
        answer: " Astronot ",
        wrong3: " Başbakan ",
        image: "<img class='corPics' src='assets/images/space.gif'>",
    },
    {
        question: "En çok sarılıp uyumayı sevdiğim kim?",
        wrong1: "Peder",
        answer: "Pity Pat",
        wrong2: "Annem",
        wrong3: "Leia",
        image: "<img class='corPics' src='assets/images/pity.jpg'>",
    },
    {
        question: "En sevdiğim aburcubur ne??",
        answer: "Dondurma",
        wrong2: "çikolata",
        wrong1: "Pringles",
        wrong3: "Doritos",
        image: "<img class='corPics' src='assets/images/icecream.jpg'>",
    },
    {
        question: "En sevdiğim TV dizisi ne?",
        answer: "Gossip Girl",
        wrong2: "90 Days Fiance",
        wrong1: "Umbrella Academy",
        wrong3: "Tiger King",
        image: "<img class='corPics' src='assets/images/gg.jpg'>",
    },
    {
        question: "En sevdiğim açıkhava aktivitesi ne?",
        wrong1: "bahçeyle uğraşmak",
        wrong2: "doğa yürüyüşü",
        answer: "yüzmek",
        wrong3: "kayak yapmak",
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
        $("#trivia").append("Bildiniz!");
        $("#pics").prepend(questionArray[questionNumber].image);
        correctCount++;
        console.log(correctCount);
        questionNumber++
        timeTillQuestion ();
    });
    $("div.options:not(:contains('"+correct+"'))").on("click", function() {
        $("#answers").empty();
        $("#trivia").empty();
        $("#trivia").append("Yanlış! Doğru cevap, " + correct)
        $("#pics").prepend("<div class='mt-2' style='border: 10px lightgoldenrodyellow solid;'><img src='assets/images/wrong.gif'></div>");
        $("#pics").prepend(questionArray[questionNumber].image);
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
        $("#answers").append("Doğru Cevap: " + correctCount);
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