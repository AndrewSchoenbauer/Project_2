const starOne = document.getElementById("starOne");
const starTwo = document.getElementById("starTwo");
const starThree = document.getElementById("starThree");
const starFour = document.getElementById("starFour");
const starFive = document.getElementById("starFive");

function oneStarRating() {
    if (starOne) {
        starOne.classList.add("checked");
        console.log("hello")
    }
};

function twoStarRating() {
    if (starTwo) {
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
    }
};

function threeStarRating() {
    if (starThree){
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        starThree.classList.add("checked");
    }
};

function fourStarRating() {
    if (starFour) {
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        starThree.classList.add("checked");
        starFour.classList.add("checked");
    }
};

function fiveStarRating() {
    if (starFive) {
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        starThree.classList.add("checked");
        starFour.classList.add("checked");
        starFive.classList.add("checked");
    }
};

starOne.addEventListener("click", oneStarRating);
starTwo.addEventListener("click", twoStarRating);
starThree.addEventListener("click", threeStarRating);
starFour.addEventListener("click", fourStarRating);
starFive.addEventListener("click", fiveStarRating);