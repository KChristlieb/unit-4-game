$(document).ready(function() {

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
            images.addClass("crystal-buttons crystal crystal-images");
            images.attr("src", crystalsImages[i]);
            images.attr("date-letter", Math.floor(Math.random() *12) *+1);
            $("#crystals").append(images);
        };
    };

    function playGame() {

        var counter = 0;
        $(".score").text("Your Score: " + counter);

        // generates random target number for player to reach
        var targetNum = Math.floor(Math.random() * (120-19) + 19);

        // displays target number on the dom
        $(".numguess").text("Number to reach :" + targetNum);
        console.log(targetNum);
    }
});