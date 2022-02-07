const starOne = document.getElementById("starOne");
const starTwo = document.getElementById("starTwo");
const starThree = document.getElementById("starThree");
const starFour = document.getElementById("starFour");
const starFive = document.getElementById("starFive");

let rating = 0

function oneStarRating(event) {
    event.preventDefault()
    if (starOne) {
        starOne.classList.add("checked");
        rating = 1 
    }
};

function twoStarRating(event) {
    event.preventDefault()
    if (starTwo) {
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        rating = 2
    }
};

function threeStarRating(event) {
    event.preventDefault()
    if (starThree){
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        starThree.classList.add("checked");
        rating = 3
    }
};

function fourStarRating(event) {
    event.preventDefault()
    if (starFour) {
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        starThree.classList.add("checked");
        starFour.classList.add("checked");
        rating = 4
    }
};

function fiveStarRating(event) {
    event.preventDefault()
    if (starFive) {
        starOne.classList.add("checked");
        starTwo.classList.add("checked");
        starThree.classList.add("checked");
        starFour.classList.add("checked");
        starFive.classList.add("checked");
        rating = 5
    }
};

starOne.addEventListener("click", oneStarRating);
starTwo.addEventListener("click", twoStarRating);
starThree.addEventListener("click", threeStarRating);
starFour.addEventListener("click", fourStarRating);
starFive.addEventListener("click", fiveStarRating);