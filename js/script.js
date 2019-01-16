/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif"; {
            
        }
        
    var q1Result = $("#question1").val();
        $("#question1").click(function(calculateShoeScore){
            
        })
        
       function calculateShoeScore(shoe) {
        if (shoe === "Comfort") {
            return 3;
        }
        else if (shoe === "Style") {
            return 4;
        }
        else if (shoe === "Athletic") {
            return 5;
        }
        else { 
            return 0;
            
        }
    var q2Result = $("#question2").val();
        $("#question2").click(function(calculateSeasonScore){
            
        })
        function calculateSeasonScore(season) {
        if (season === "Winter") {
            return 3;
        }
        else if (season === "Spring") {
            return 4;
        }
        else if (season === "Summer") {
            return 5;
        }
        else if (season === "Fall") {
            return 10;
        }
        else {
            return 0;
        }
    }
    var q3Result = $("#question3").val();
        $("#question3").click(function(calculateColorScore){
            
        })
        function calculateColorScore(color) {
        if (color === "Red") {
            return 3;
        }
        else if (color === "Blue") {
            return 4;
        }
        else if (color === "White") {
            return 5;
        }
        else if (color === "Black") {
            return 10;
        }
        else {
            return 0;
        }
    }
    $("button").click(function() {
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q1Result = $("#question3").val();
        var totalScore;
        totalScore = calculateShoeScore(q1Result);
        totalScore = totalScore + calculateSeasonScore(q2Result);
        totalScore = totalScore + calculateColorScore(q2Result);
        console.log(totalScore);
        placement(totalScore, name);
    });
    function displayResult
        
        var q3Result = $("#question3").val();
        var totalScore;

});
