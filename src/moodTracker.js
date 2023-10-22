



function getReccomendation() {
    const moodHappy = document.getElementById("moodHappy");
    const moodCalm = document.getElementById("moodCalm");
    const moodUpset = document.getElementById("moodUpset");
    const moodAngry = document.getElementById("moodAngry");
    const moodAnxious = document.getElementById("moodAnxious");
    const changeText = document.querySelector("#reccomendation");


    if(moodHappy.checked){
        alert("I'M HAPPY")
        changeText.textContent = "you should: give someone a compliment";
    }
    if(moodCalm.checked){
        alert("I'M Calm")
        changeText.textContent = "you should: go catch up with a loved one";

    }
    if(moodUpset.checked){
        alert("I'M upset")
        changeText.textContent = "you should: talk to someone you trust";

    }
    if(moodAngry.checked){
        alert("I'M ANGRY")
        changeText.textContent = "you should: go for a quick walk and do some thinking";

    }
    if(moodAnxious.checked){
        alert("I'M AnXiOuS")
        changeText.textContent = "you should: take some deep breaths";

    }

};
