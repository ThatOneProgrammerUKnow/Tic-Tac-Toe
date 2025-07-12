var tiles = document.querySelectorAll('td');
var resetBtn = document.querySelector('#reset-btn');

var userone_tiles = [];
var usertwo_tiles= [];

var user_winner = 0;
var userturn = 1;
//.............................................................Methods
function changeTiles(){ // Change tiles method
    if (user_winner !== 0){ return; }

    if (userturn === 1){ // User one's turn
        userone_tiles.push(this.getAttribute('id'));

        if (this.textContent===''){
            this.textContent='X';
            
            if (userone_tiles.length>=3){
                check_win();      
            }

            userturn = 2;
        } 

        
    } else if (userturn === 2){ // User two's turn
        usertwo_tiles.push(this.getAttribute('id'));

        

        if (this.textContent===''){
            this.textContent='O';

            if (usertwo_tiles.length >= 3){
            check_win();
            }

            userturn = 1; 
        }
    }

} //_________________End of ChangeTiles

function check_win(){ // Checks to see if the user wins
    if (userturn===1){
        for (let i=0; i<userone_tiles.length; i++){ // Tile one 
            for (let j=i+1; j<userone_tiles.length; j++){ // Tile two
                for (let k=j+1; k<userone_tiles.length; k++){ // Tile three
                    win_combinations(userone_tiles[i] + userone_tiles[j] + userone_tiles[k]);
                }
            }
        }
    }

    if (userturn===2){
         for (let i=0; i<usertwo_tiles.length; i++){ // Tile one 
            for (let j=i+1; j<usertwo_tiles.length; j++){ // Tile two
                for (let k=j+1; k<usertwo_tiles.length; k++){ // Tile three
                    win_combinations(usertwo_tiles[i] + usertwo_tiles[j] + usertwo_tiles[k]);
                }
            }
        }
    }
}


function win_combinations(combination){ // Checks to see if three tiles makes a "winning" combination
    if (
        (combination) === ("t11t12t13") ||
        (combination) === ("t21t22t23") ||
        (combination) === ("t31t32t33") ||
        (combination) === ("t11t21t31") ||
        (combination) === ("t12t22t32") ||
        (combination) === ("t13t23t33") ||
        (combination) === ("t11t22t33") ||
        (combination) === ("t31t22t11")
    ){
    result = true;
    user_winner = userturn;
    win();
    } else{
        result = false;
    }
}

function win(){ // Someone won!
    alert("User " + user_winner + " is the winner!");
    reset();

}

function reset(){ // Reset everything
    for (let i=0; i<tiles.length; i++){
        tiles[i].textContent = '';
    }
    userone_tiles=[];
    usertwo_tiles=[];
    user_winner = 0;
    userturn = 1;
}

//.............................................................Changing tiles
for (let i=0; i< tiles.length; i++){
    tiles[i].addEventListener('click', changeTiles);
}


resetBtn.addEventListener('click', reset);
