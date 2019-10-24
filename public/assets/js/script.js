var answersGiven;
var friendResultOne = "";
var friendOneValue = 0;
var friendResultTwo = "";
var friendResultTwo = 0;


$("#subButton").on("click", function () {
    
    answersGiven = $("option:selected");

    for (let i = 0; i < friendFound.length; i++) {
        if (friendResultOne === "") {
            friendResultOne = friendFound[i];
        } else {
            friendResultTwo = friendFound[i];
            for (let j = 0; j < answersGiven.length; j++) {
                friendOneValue += Math.abs(parseInt(friendResultOne.scores[j]) - parseInt(answersGiven[j].value));
                // friendResultTwo += Math.abs(parseInt(friendResultTwo.scores[j]) - parseInt(answersGiven[j].value));
            };
            if (friendOneValue > friendResultTwo) {
                friendResultOne = friendResultTwo;
            };
            friendOneValue = 0;
            friendResultTwo = 0;
        }
    };
    $("#surveyBody").hide();
    var friendCard = $(".container").append(
        `<div class="card w-50 m-auto">
                <img class="card-img" src=${friendResultOne.photo} alt="friendimg">
                <div class="card-img-overlay">
                    <h1 class="card-title">${friendResultOne.name}</h1>
                </div>
        </div>` 
    );
});