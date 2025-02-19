const homeScoreText = document.getElementById("homeScore");
const guestScoreText = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

homeScoreText.innerText = homeScore;
guestScoreText.innerText = guestScore;

function addPoint (points, team) {
        if (team == "HOME") {
            homeScore += points;
            homeScoreText.innerText = homeScore;
            
        } else {
            guestScore += points;
            guestScoreText.innerText = guestScore;
        }
     // Toggling "Lead" class to indicate leading score
    if (homeScore > guestScore) {
        homeScoreText.classList.add("lead");
        guestScoreText.classList.remove("lead");
    } else if (guestScore > homeScore) {
        guestScoreText.classList.add("lead");
        homeScoreText.classList.remove("lead");
    } else {
        // Remove the lead class if both scores are equal
        homeScoreText.classList.remove("lead");
        guestScoreText.classList.remove("lead");
    }
}

function reset () {
    homeScore = 0;
    guestScore = 0;
    homeScoreText.innerText = homeScore;
    guestScoreText.innerText = guestScore;
    homeScoreText.classList.remove("lead");
    guestScoreText.classList.remove("lead");
}