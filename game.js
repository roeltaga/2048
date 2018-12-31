window.onload = function() {

    document.getElementById("001").innerHTML = 1024;
    //document.getElementById("01").style.backgroundColor = "#eee4da"; //color for number 2


    let x = document.getElementById("001");
    if (x.innerHTML = 1024) {
        document.getElementById("01").style.backgroundColor = "#eee4da";
    }





    // Function test to be asigned to keyboard "Up" key

    function dosth() {
        document.getElementById("01").style.backgroundColor = "#ccc";
    }

    
    document.addEventListener("keypress", checkKey);

    function checkKey(up) {
        var key = up.which || up.keyCode;
        if (key === 38) dosth();
    }







}
