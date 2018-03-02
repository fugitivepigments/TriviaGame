//global vars
var clock;
var counter = 30;
var wins = 0;
var losses = 0;
var unanswered = 0;
var qCount = 0;
var currentQuestion = 0;
var gameCont;
var correctAnswers = ["B: Brian Lotti", "A: Jason Lee", "C: Jeremy Klein", "C: Jim Greco", "D: The Gonz"];
var answers = [["Tony Hawk", "Brian Lotti", "Tommy Chong", "Jason Dill"], ["Jason Lee", "Tom Cruise", "Cheech Marin", "Will Smith"], ["Phil Song", "Brion Baer", "Jeremy Klein", "Gimp"], ["Bam Margera", "Z Boys", "Jim Greco", "Brandon Westgate"] ["Merle", "Leticia Buffoni", "A fruit-booter", "The Gonz"]];
var gifs = ["<img class='img-fluid text-center' src='assets/images/brianlotti.gif'>", "<img class='img-fluid text-center' src='assets/images/jasonlee.gif'>", "<img class='img-fluid text-center' src='assets/images/jeremyklein.gif'>", "<img class='img-fluid text-center' src='assets/images/jimgreco.gif'>", "<img class='img-fluid text-center' src='assets/images/gonz.gif'>"];
var questions = ["Which skater is the Big Spin named for?", "Which one of these actors was once a pro-skateboarder?", "When asked who Jerry Hsu's favorite Asian skater was, he answered:", "Who coined the terms 'mob' and 'flick'?", "Who was the first skater to get a trick on film at the Wilshire 10 rail?"];


$(document).ready(function () {

    //start button to initialize
    $("#start").on("click", function () {
        $(".reset-container").empty();
        
    });
    
    function genWin() {
        wins++;
    };
    
    function genLoss() {
        losses++;
    }
    function genUnanswered() {
        unanswered++;
    }
    function timer() {
        clock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                genUnanswered(); }
                    if (counter > 0) {
                        counter--;
                    }
                    $("#timer").text("Time: " + counter);
                }
            }
    function genHTML() {
        
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
