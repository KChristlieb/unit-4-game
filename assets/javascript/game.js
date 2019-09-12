$(document).ready(function () {

    // Global Variables
    var wins = 0;
    var losses = 0;
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

    // array for images
    var crystalsImages = ["assets/images/blue.png", "assets/images/green.png", "assets/images/purple.png", "assets/images/yellow.png"];

    // generating random nums for crystals
    function crystalsValues() {

        for (var i = 0; i < crystalsImages.length; i++) {

            var images = $("<img>");
            images.addClass("crystal-buttons crystal crystal-image");
            images.attr("src", crystalsImages[i]);
            images.attr("data-letter", Math.floor(Math.random() * 12) * +1);
            $("#crystals").append(images);
        }

    }

    function playGame() {


        var counter = 0;
        $(".score").text("Your Score: " + counter);

        // generates random target number for player to reach
        var targetNum = Math.floor(Math.random() * (120 - 19) + 19);

        // displays target number on the dom
        $(".numguess").text("Number to reach :" + targetNum);
        console.log(targetNum);

        // on click event for when user clicks a crystal
        $(".crystal-buttons").click(function () {

            // generating a number for each crystal when it is clicked

            crystalIsClicked = true;
            var crystalsValue = ($(this).attr("data-letter"));
            crystalsValue = parseInt(crystalsValue);
            // adds the click value to the score counter
            counter += crystalsValue;

            console.log(crystalsValue);
            console.log(counter);

            $(".score").text("Your Score: " + counter);

            if (counter === targetNum) {
            alert("You Win!!!");
            wins++;
            $(".wins").text("Wins: " + wins);
            $("#crystals").empty();
            crystalsValues();
            playGame();
            }

            else if (counter >= targetNum) {
            alert("Sorry, you lost :(");
            losses++;
            $(".losses").text("Losses: " + losses);
            $("#crystals").empty();
            crystalsValues();
            playGame();
            }

        });
    }


    crystalsValues();
    playGame();

});