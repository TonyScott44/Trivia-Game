


var eDrive = [
    {
        question: "In what year did BMW start selling the i3 and i8 models?",
        answer: "2014",
        choices: ["2013", "2014", "2015", "2016"]
    },
    {
        question: "How long does it take for the 2018 BMW i3 (without Range Extender) to accelerate from 0-60mph?",
        answer: "7.2 seconds",
        choices: ["8.3 seconds","8.9 seconds","6.5 seconds","7.2 seconds" ]
    },
    {
        question: "Which of the following is not a 2018 BMW i8 design package?",
        answer: "Deka World",
        choices: ["Deka World", "Mega World", "Giga World", "Tera World"]
    },
    {
        question: "How far can the 2018 BMW i3 (without Range Extender) travel on a single charge?",
        answer: "up to 114 miles",
        choices: ["up to 88 miles", "up to 194 miles", "up to 100 miles", "up to 114 miles"]
    },
    {
        question: "How long does it take for the 2018 BMW i8 Coupe to accelerate from 0-60mph?",
        answer: "4.2 seconds",
        choices: ["6 seconds", "3.8 seconds", "5.5 seconds", "4.2 seconds"]
    }
];

var eIndex = 0;
var corAns = 0;
var incAns = 0;
var unAns = 0;
var intervalId;
var countDown = 20;
var eCount = 0;



console.log(eDrive[eIndex].question);

$(document).ready(function () {

    $("body").on("click", "#startButton", function () {
        $("#quesEtc").text(eDrive[eIndex].question);
        $("#choice1").text(eDrive[eIndex].choices[0]);
        $("#choice2").append(eDrive[eIndex].choices[1]);
        $("#choice3").append(eDrive[eIndex].choices[2]);
        $("#choice4").append(eDrive[eIndex].choices[3]);
        $("#startButton").empty();


        start();


    });

    $("body").on("click", "#restartButton", function () {
        eNext();
    });

    $("body").on("click", "#choice1", function () {

        if (eDrive[eIndex].choices[0] === eDrive[eIndex].answer)
        {
            $("#quesEtc").text("Correct!");
            $("#choice1").empty();
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            corAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        } else {
            $("#quesEtc").text("Nope!");
            $("#choice1").text("The correct answer was: " +eDrive[eIndex].answer);
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            incAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        }

    });
    $("body").on("click", "#choice2", function () {
        if (eDrive[eIndex].choices[1] === eDrive[eIndex].answer)
        {
            $("#quesEtc").text("Correct!");
            $("#choice1").empty();
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            corAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        } else {
            $("#quesEtc").text("Nope!");
            $("#choice1").text("The correct answer was: " +eDrive[eIndex].answer);
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            incAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);

        }
    });
    $("body").on("click", "#choice3", function () {
        if (eDrive[eIndex].choices[2] === eDrive[eIndex].answer)
        {
            $("#quesEtc").text("Correct!");
            $("#choice1").empty();
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            corAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        } else {
            $("#quesEtc").text("Nope!");
            $("#choice1").text("The correct answer was: " +eDrive[eIndex].answer);
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            incAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        }
    });
    $("body").on("click", "#choice4", function () {
        if (eDrive[eIndex].choices[3] === eDrive[eIndex].answer)
        {
            $("#quesEtc").text("Correct!");
            $("#choice1").empty();
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            corAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        } else {
            $("#quesEtc").text("Nope!");
            $("#choice1").text("The correct answer was: " +eDrive[eIndex].answer);
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            stop();
            incAns++;
            eIndex++;
            eCount++;
            setTimeout(eNext,3000);
        }
    });


});

function start() {
   intervalId = setInterval(count, 1000);
}

function stop() {
    console.log("stopping");
    clearInterval(intervalId);
}

function count() {

    countDown--;
    var converted = timeConverter(countDown);
    $("#time-rem").text(converted);
    if (countDown === 0) {
        $("#quesEtc").text("Out of Time!");
        $("#choice1").text("The correct answer was: " +eDrive[eIndex].answer);
        $("#choice2").empty();
        $("#choice3").empty();
        $("#choice4").empty();
        stop();
        unAns++;
        eIndex++;
        eCount++;
        setTimeout(eNext,3000);
    }
}

function timeConverter(t) {

   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);
   return + seconds;
}

function eNext () {
    if (eCount !== eDrive.length) {
        $("#time-rem").text("30");
        $("#quesEtc").text(eDrive[eIndex].question);
        $("#choice1").text(eDrive[eIndex].choices[0]);
        $("#choice2").text(eDrive[eIndex].choices[1]);
        $("#choice3").text(eDrive[eIndex].choices[2]);
        $("#choice4").text(eDrive[eIndex].choices[3]);
        $("#restartButton").empty();
        countDown = 20;

        start();
    } else {
        $("#quesEtc").text("All done, here's how you did!");
        $("#choice1").text("Correct Answers: " +corAns);
        $("#choice2").append("Incorrect Answers: " +incAns);
        $("#choice3").append("Unanswered: " +unAns);
        setTimeout(eRestart,3000);
    }

function eRestart () {
    $("#restartButton").append("Start Over?");
    eIndex = 0;
    unAns = 0;
    incAns = 0;
    corAns = 0;
    eCount = 0;
    }

}




