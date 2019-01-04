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
        
    function createTile(x,y) { // x,y added again for use when moving a tile, you spawn a blank one where it was...

        //  for loop to check if there is any empty tile
        let emptyTile=false;
        loop1:
        for (i=1; i<=4; i++) {
            loop2:
            for (o=1; o<=4; o++) {
                if (document.getElementById("b" + i + o).innerHTML == "") {
                    emptyTile = true;
                    break loop1;
                }
            }
        }

        if (emptyTile == false) {
            console.log("Game over"); //to be replaced by checkIfMovesAvailable()
            document.getElementById("gameOver").style.display = "block";
            return;
        }

        else {                                                       // TILE create random tile
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
            let newTileA = document.getElementById("a" + newTileX + newTileY);
            let newTileB = document.getElementById("b" + newTileX + newTileY);

            if (newTileB.innerHTML == "") { 
                newTileA.style.animation = "tileBorn 0.16s forwards linear";

                newTileB.innerHTML = newTileValue;
                
                if (newTileValue == 4) newTileA.style.backgroundColor = "#ede0c8";
                else {newTileA.style.backgroundColor = "#eee4da";}
                // newTileA.classList.add("tileActive");
                console.log("tile added");
            }
            else {
                console.log("reboot birth");
                createTile();
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











    function doubleTile(x,y) {
        let tile = document.getElementById("b"+x+y);
        tile.innerHTML *= 2;
        console.log(tile.innerHTML);

        if (tile.innerHTML == 4) {
            document.getElementById("a"+x+y).style.backgroundColor = "#ede0c8";
        }
        else if (tile.innerHTML == 8) {
            document.getElementById("a"+x+y).style.backgroundColor = "#f2b179";
            document.getElementById("b"+x+y).style.color = "#f9f6f2";
        }
        else if (tile.innerHTML == 16) {
            document.getElementById("a"+x+y).style.backgroundColor = "#f59563";
        }
        else if (tile.innerHTML == 32) {
            document.getElementById("a"+x+y).style.backgroundColor = "#f67c5f";
        }
        else if (tile.innerHTML == 64) {
            document.getElementById("a"+x+y).style.backgroundColor = "#f65e3b";
        }
        else if (tile.innerHTML == 128) {
            document.getElementById("a"+x+y).style.backgroundColor = "#edcf72";
            document.getElementById("b"+x+y).style.fontSize = "36px";
        }
        else if (tile.innerHTML == 256) {
            document.getElementById("a"+x+y).style.backgroundColor = "#edcc61";
        }
        else if (tile.innerHTML == 512) {
            document.getElementById("a"+x+y).style.backgroundColor = "#edc850";
        }
        else if (tile.innerHTML == 1024) {
            document.getElementById("a"+x+y).style.backgroundColor = "#edc22e";
            document.getElementById("b"+x+y).style.fontSize = "32px";
        }
        else if (tile.innerHTML == 2048) {
            document.getElementById("a"+x+y).style.backgroundColor = "#b784ab";
        }
        else if (tile.innerHTML == 4096) {
            document.getElementById("a"+x+y).style.backgroundColor = "#302b25";
        }
        else if (tile.innerHTML == 8192) { //you kidding me?
            document.getElementById("a"+x+y).style.backgroundColor = "#000000";
            document.getElementById("b"+x+y).style.color = "#00ffff";
        }
        else { //Break the game please LOL
            document.getElementById("a"+x+y).style.backgroundColor = "#000000";
            document.getElementById("b"+x+y).style.color = "#ffff00";
            document.getElementById("b"+x+y).innerHTML = "You Win";
            document.getElementById("b"+x+y).style.fontSize = "18px";
        }
    }








    //TEST function

    function goDown(x,y) {
        let elem = document.getElementById("a"+x+y);
        let posx = elem.style.gridRow.charAt(0);
        if (posx < 4)
        {
            posx ++;
        }
        document.getElementById("a"+x+y).style.gridRow = posx;

        elem.style.animation = "tileDown1 0.1s forwards linear";
        //or try removing class and adding it again


        elem.addEventListener("animationend", myEndFunction(x,y));
    }

    function goDownEnd(x,y) {
        // elem.style.animation  asdasdfadsf ds = "";
    }















    //KEYBOARD Events



    window.onkeydown = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        
        if (key == 188) {
            e.preventDefault(); 
            createTile();    // <
        }

        if (key == 190) doubleTile(1,1);    // >

        if (key == 191) {   // /
            e.preventDefault();
            goDown(1,1);
        }







        if (key == 78) location.reload();    // n - New Game

     }







}








