// Press button:
//generate Math.floor(Math.random()*6) for each dice roll1 and roll2
//target dice1 and dice2 with roll1 and roll2 and select image accordingly
//Update heading to announce winner from greater of roll 1 and roll1

function playDice() {
    var roll1=Math.floor((Math.random()*6)+1);
    var roll2=Math.floor((Math.random()*6)+1);

    document.querySelector("#diceImg1").setAttribute("src", "images/red" + roll1 + ".jpg");
    document.querySelector("#diceImg2").setAttribute("src", "images/blue" + roll2 + ".jpg");


    if(roll1>roll2) {
        document.querySelector("h1").innerHTML="&#9873 Player 1 Wins";
    }
    else if(roll1<roll2) {
        document.querySelector("h1").innerHTML="Player 2 Wins &#9873";
    }
    else {document.querySelector("h1").innerHTML="It's a Draw!";
    }
}