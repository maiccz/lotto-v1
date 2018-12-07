//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    
    var button = document.getElementById("btn");
    button.addEventListener("click", drawNumber);
    button.addEventListener("click", clear);
    button.addEventListener("click", disable);
    
    function disable(){
        document.getElementById("btn").disabled = true;
        setTimeout(function(){document.getElementById("btn").disabled = false;},1100);
    }
    
    function clear(){
        var balls = document.getElementsByClassName("ball");
        for (i = 0; i < balls.length; i++) {
            balls[i].style.visibility = "hidden";
        }
    }
    
    function drawNumber() {
        var numbers = [];
        
        while (numbers.length < 6) {
            var randomnumber = Math.floor(Math.random()*48) + 1;
            if(numbers.indexOf(randomnumber) > -1) continue;
            numbers[numbers.length] = randomnumber;
        }
        numbers.sort(function(a, b){return a-b});
    
        var balls = document.getElementsByClassName("ball");
        for (let i = 0; i < balls.length; i++) {
            setTimeout(function timer(){
                balls[i].classList.toggle("transform");
                balls[i].style.visibility = "visible";
                balls[i].innerHTML = numbers[i];
            }, i*100);
        balls[i].classList.remove("transform");
        btn.innerHTML = "Draw again";
    
        }
    }
};

