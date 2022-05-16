
let contar = 0;

incrementClick = function() {

    updateDisplay(++contar);
       

}

function updateDisplay(val) {
    document.getElementById("contador").innerHTML = val;


}


