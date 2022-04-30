const btn = document.querySelector(".btn");

btn.addEventListener("click", e => {
    getName();
});

function getName () {
    function getRandom (maxNumber) {
        return Math.floor(Math.random() * maxNumber + 1);
    }
    
    let babyName = getRandom(2);
    
    if (babyName === 1) {
        document.querySelector(".text").innerHTML = "Dom";
    }  else if (babyName === 2) {
        document.querySelector(".text").innerHTML = "Lorenzo";
    }  else {
        console.log("Error");
    }
}


