//global vars
var clock;
var counter = 30;
var wins = 0;
var losses = 0;
var unanswered = 0;
var qCount = 0;
var currentQuestion = 0;
var clickedAnswer;

var questions = [
    {
        question: "QUESTION: Which skater is the Big Spin named for?",
        answers: {
            A: "Tony Hawk",
            B: "Brian Lotti",
            C: "Tommy Chong",
            D: "Jason Dill",
        },
        image: "<img class='img-fluid text-center' src='assets/images/brianlotti.gif'>",
        correctAnswer: "B: Brian Lotti",
},
    {
        question: "QUESTION: Which one of these actors was once a pro-skateboarder?",
        answers: {
            A: "Jason Lee",
            B: "Tom Cruise",
            C: "Cheech Marin",
            D: "Will Smith",
        },
        image: "<img class='img-fluid text-center' src='assets/images/jasonlee.gif'>",
        correctAnswer: "A: Jason Lee",
},
    {
        question: "QUESTION: When asked who Jerry Hsu's favorite Asian skater was, he answered:",
        answers: {
            A: "Phil Song",
            B: "Brion Baer",
            C: "Jeremy Klein",
            D: "Gimp",
        },
        image: "<img class='img-fluid text-center' src='assets/images/jeremyklein.gif'>",
        correctAnswer: "C: Jeremy Klein",
},
    {
        question: "QUESTION: Who coined the terms 'mob' and 'flick'?",
        answers: {
            A: "Bam Margera",
            B: "Z Boys",
            C: "Jim Greco",
            D: "Brandon Westgate",
        },
        image: "<img class='img-fluid text-center' src='assets/images/jimgreco.gif'>",
        correctAnswer: "C: Jim Greco",
},
    {
        question: "QUESTION: Who was the first skater to get a trick on film at the Wilshire 10 rail?",
        answers: {
            A: "Merle",
            B: "Leticia Buffoni",
            C: "A fruit-booter",
            D: "The Gonz",
        },
        image: "<img class='img-fluid text-center' src='assets/images/gonz.gif'>",
        correctAnswer: "D: The Gonz",
}
];



$(document).ready(function () {

    //start button to initialize
    $("#start").on("click", function () {
        $(".reset-container").empty();
        $(".game-container").removeClass("d-none");
        showQuestion();
    });

    function showQuestion() {
        timer();
      $(".question").text(questions[currentQuestion].question);
      $(".ansOne").text("A: " + questions[currentQuestion].answers.A);
      $(".ansTwo").text("B: " + questions[currentQuestion].answers.B);
      $(".ansThree").text("C: " + questions[currentQuestion].answers.C);
      $(".ansFour").text("D: " + questions[currentQuestion].answers.D);

      $(".ans").on("click", function() {
          clickedAnswer = $(this).text();
          if (clickedAnswer === questions[currentQuestion].correctAnswer) {
              console.log("NAILED IT");
              clearInterval(clock);
              genWin();
          }
          else {
              console.log("OOPS");
              clearInterval(clock);
              genLoss();
          }
        console.log( $(this).text() );
      })
    }

    function genWin() {
        wins++;
        $(".game-container").addClass("d-none");
        $(".result").text("NAILED IT! " + questions[currentQuestion].correctAnswer + " is CORRECTOMUNDO!");
        $(".resultGif").html(questions[currentQuestion].image);
        wait();
    };

    function genLoss() {
        losses++;
        $(".game-container").addClass("d-none");
        $(".result").text("BIFFED IT! The correct answer was " + questions[currentQuestion].correctAnswer);
        $(".resultsGif").html(questions[currentQuestion].image);
        
    };

    function genUnanswered() {
        unanswered++;
    };
    
    function wait() {
        setTimeout(function() {
            currentQuestion++;
            $(".result, .resultGif").addClass("d-none");
            $(".game-container").removeClass("d-none");
            showQuestion();
            clearInterval(clock);
            timer();
        }, 4000);
    };

    function timer() {
        clock = setInterval(thirtySeconds, 1000);

        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                genUnanswered();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").text("Time: " + counter);
        }
    }

});
//responses:
//4 divs with correct/incorrect classes
//if correct answer chosen, log wins++, 
//show gif, move to next question
//if else time runs out, alert time's up, log loss++
//show biff gif, move to next question
//else user picks wrong, log loss++
//show biff gif, move to next question
//final screen displays score
//show restart option button
