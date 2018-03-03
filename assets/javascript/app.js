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
        image: "<img class='img-fluid text-center d-block mx-auto' src='assets/images/brianlotti.gif'>",
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
        image: "<img class='img-fluid text-center d-block mx-auto' src='assets/images/jasonlee.gif'>",
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
        image: "<img class='img-fluid text-center d-block mx-auto' src='assets/images/jeremyklein.gif'>",
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
        image: "<img class='img-fluid text-center d-block mx-auto' src='assets/images/jimgreco.gif'>",
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
        image: "<img class='img-fluid text-center d-block mx-auto' src='assets/images/gonz.gif'>",
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
    });

    function showQuestion() {
      timer();
      $(".question").text(questions[currentQuestion].question);
      $(".ansOne").text("A: " + questions[currentQuestion].answers.A);
      $(".ansTwo").text("B: " + questions[currentQuestion].answers.B);
      $(".ansThree").text("C: " + questions[currentQuestion].answers.C);
      $(".ansFour").text("D: " + questions[currentQuestion].answers.D);
    }

    function genWin() {
        wins++;
        $(".game-container").addClass("d-none");
        $(".winloss-container").removeClass("d-none");
        $(".result").text("NAILED IT! " + questions[currentQuestion].correctAnswer + " is CORRECTOMUNDO!");
        $(".resultGif").html(questions[currentQuestion].image);
        wait();
    };

    function genLoss() {
        losses++;
        $(".game-container").addClass("d-none");
        $(".winloss-container").removeClass("d-none");
        $(".result").text("BIFFED IT! The correct answer was " + questions[currentQuestion].correctAnswer);
        $(".resultGif").html("<img class='img-fluid text-center d-block mx-auto' src='assets/images/fatFail.gif'>");
        wait();
    };

    function gameOver() {
      $(".game-container").addClass("d-none");
      $(".winloss-container").removeClass("d-none");
      $(".result").text("GAME OVER! You had " + losses + " wrong and " + wins + " right answers.");
      $(".resultGif").html('');

      if (unanswered) {
        $(".result2").text("TIME'S UP! MAJOR BAIL!");
      }
    }

    function genUnanswered() {
        unanswered++;
    };
    
    function wait() {

        // IF THE CURRENT QUESTION IS THE LAST QUESTION
        // WE WANT TO END THE GAME
        if (currentQuestion+1 === questions.length) {
          console.log('GAME OVER');
          gameOver();
          return;
        }

        // WAIT 5 SECONDS AND THEN SHOW THE NEXT QUESTION
        setTimeout(function() {
            currentQuestion++;
            $(".reset-container").empty();
            showQuestion();
            $(".game-container").removeClass("d-none");
            $(".winloss-container").addClass("d-none");

            clearInterval(clock);
            timer();
        }, 5000);
    };

    function timer() {
        $(".timer").text("Time: 30");
        counter = 30;
        clock = setInterval(thirtySeconds, 1000);

        function thirtySeconds() {

            // Game over
            if (counter === 0) {
                clearInterval(clock);
                genUnanswered();
                gameOver();
            }

            // Count down
            if (counter > 0) {
                counter--;
            }

            $(".timer").text("Time: " + counter);
        }
    }

});