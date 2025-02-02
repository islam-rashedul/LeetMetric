document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById('search-btn');
    const userNameInput = document.getElementById('user-input');
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');

    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateUsername(username){
        if(username.trim()===""){
            alert("Username should not be empty");
        }

        const regex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }

    searchButton.addEventListener('click', function(){
        const username = userNameInput.value;
        console.log(username);
    })
    

});