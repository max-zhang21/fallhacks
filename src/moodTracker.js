



function getReccomendation() {
    const moodHappy = document.getElementById("moodHappy");
    const moodCalm = document.getElementById("moodCalm");
    const moodUpset = document.getElementById("moodUpset");
    const moodAngry = document.getElementById("moodAngry");
    const moodAnxious = document.getElementById("moodAnxious");
    const changeText = document.querySelector("#reccomendation");


    if(moodHappy.checked){
        changeText.textContent = "you should: give someone a compliment";
    }
    if(moodCalm.checked){
        changeText.textContent = "you should: go catch up with a loved one";

    }
    if(moodUpset.checked){
        changeText.textContent = "you should: talk to someone you trust";

    }
    if(moodAngry.checked){
        changeText.textContent = "you should: go for a quick walk and do some thinking";

    }
    if(moodAnxious.checked){
        changeText.textContent = "you should: take some deep breaths";
    }

};
