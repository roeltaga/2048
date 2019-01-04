window.onload = function() {


//Pre-Setup
    //set positions of tiles in grid
    for (i=1; i<=4; i++) {
        
        for (o=1; o<=4; o++) {
            document.getElementById("a" + i + o).style.gridRow = i;
            document.getElementById("a" + i + o).style.gridColumn = o;
        }
        
    }











    //  START  //
    //  START  //
    //  START  //



    
    //starting tiles (2 tiles)
        //90% chance to be 2, 10% to be 4
        //random 1-4 for coordinates
        
    function createTile(x,y) {


        //  for loop to check if there is any empty tile

        let emptyTile=false;
        for (i=1; i<=4; i++) {
            for (o=1; o<=4; o++) {
                if (document.getElementById("b" + i + o).innerHTML == "") {
                    let emptyTile = true;
                }
            }
            if (emptyTile = true){
                break;
            }
        }


        // let emptyTile;
        // if (document.getElementById("b11").innerHTML == "") {
        //     emptyTile = true;
        // }
        // else { emptyTile = false;}
        console.log("ka tile bosh: " + emptyTile);




        if (Number.isInteger(x+y) && x!=null && y!=null) {      //nese fut input createTile(5,8) ex...
            console.log("tile added at  "+ x +":"+ y);
            document.getElementById("a" + x + y).style.backgroundColor = "#eee4da";
            document.getElementById("b" + x + y).innerHTML = 2;
        }   
        else {  // create random tile

            var newTileValue = 0;
            newTileValue = Math.random() * 10;
            newTileValue = Math.floor(newTileValue);
            if (newTileValue < 9) {
                newTileValue = 2;
            }
            else {
                newTileValue = 4;
            }

            var newTileX = 0;
            newTileX = Math.random() * (5 - 1) + 1;
            newTileX = Math.floor(newTileX);

            var newTileY = 0;
            newTileY = Math.random() * (5 - 1) + 1;
            newTileY = Math.floor(newTileY);
            
            // if tile empty create it, else re-run the function
            if (document.getElementById("b" + newTileX + newTileY).innerHTML == "") { 
                document.getElementById("a" + newTileX + newTileY).style.animation = "tileBorn 0.16s forwards linear";
                document.getElementById("a" + newTileX + newTileY).style.backgroundColor = "#eee4da";
                document.getElementById("b" + newTileX + newTileY).innerHTML = newTileValue;
            }
            else if (emptyTile == true){
                console.log("reboot birth");
                createTile();
            }
            else if (emptyTile == false) {
                console.log("Game over");
                document.write = "<h1>Game Over!</h1>";
            }
        }
        
    }

    createTile();
    createTile();







    //Save For Later

    //this is how to animate
    //document.getElementById("a11").style.animation = "tileDown1 0.2s forwards linear"; 





    //tileTo4()
    //tileTo8()
    //  set animation for tile
    //      change color ↑ or ↓
    //                        change inner html

















    // //IDK why I did this LOL
    // for (as=2; as<=9999; as *= 2) {
    //     console.log(as);
    //     if (document.getElementById("a001").innerHTML == as) {
    //         console.log("u gjet " + as);
    //     }
    // }





    // Function test to be asigned to keyboard "Up" key
    // 37 left - 38 up - 39 right - 40 down
    function goup() {
        var temp = document.getElementById("a01").style.gridRow;
        var posx = temp.charAt(0);
        if (posx < 4)
        {
            posx ++;
        }
        
        document.getElementById("a01").style.gridRow = posx;
        document.getElementById("a01").style.gridColumn = 1;
        
        document.getElementById("a01").style.backgroundColor = "#ccc";
    }

    
    document.addEventListener("keypress", checkKey);

    function checkKey(up) {
        var key = up.which || up.keyCode;
        if (key === 38) goup();
    }







}