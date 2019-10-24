var answerSelected;
var possibleFriendOne = "";
var possibleOneValue = 0;
var possibleFriendTwo = "";
var possibleTwoValue = 0;


$("#subButton").on("click", function () {
    alert("hi")
    answerSelected = $("option:selected");

    for (let i = 0; i < friendMatched.length; i++) {
        if (possibleFriendOne === "") {
            possibleFriendOne = friendMatched[i];
        } else {
            possibleFriendTwo = friendMatched[i];
            for (let j = 0; j < answerSelected.length; j++) {
                possibleOneValue += Math.abs(parseInt(possibleFriendOne.scores[j]) - parseInt(answerSelected[j].value));
                // possibleTwoValue += Math.abs(parseInt(possibleFriendTwo.scores[j]) - parseInt(answerSelected[j].value));
            };
            if (possibleOneValue > possibleTwoValue) {
                possibleFriendOne = possibleFriendTwo;
            };
            possibleOneValue = 0;
            possibleTwoValue = 0;
        }
    };
    $("#surveyBody").hide();
    var friendCard = $(".container").append(
        `<div class="card w-50 m-auto">
                <img class="card-img" src=${possibleFriendOne.photo} alt="friendimg">
                <div class="card-img-overlay">
                    <h1 class="card-title">${possibleFriendOne.name}</h1>
                </div>
        </div>` 
    );
});