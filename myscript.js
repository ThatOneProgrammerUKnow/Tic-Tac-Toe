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
        sort_asc(userone_tiles);
        for (let i=0; i<userone_tiles.length; i++){ // Tile one 
            for (let j=i+1; j<userone_tiles.length; j++){ // Tile two
                for (let k=j+1; k<userone_tiles.length; k++){ // Tile three
                    win_combinations(userone_tiles[i] + userone_tiles[j] + userone_tiles[k]);
                }
            }
        }
    }

    if (userturn===2){
        sort_asc(usertwo_tiles);
         for (let i=0; i<usertwo_tiles.length; i++){ // Tile one 
            for (let j=i+1; j<usertwo_tiles.length; j++){ // Tile two
                for (let k=j+1; k<usertwo_tiles.length; k++){ // Tile three
                    win_combinations(usertwo_tiles[i], usertwo_tiles[j], usertwo_tiles[k]);
                }
            }
        }
    }
}


function win_combinations(combination){ // Checks to see if three tiles makes a "winning" combination
    if (
        (combination) === ("111213") ||
        (combination) === ("212223") ||
        (combination) === ("313233") ||
        (combination) === ("112131") ||
        (combination) === ("122232") ||
        (combination) === ("132333") ||
        (combination) === ("112233") ||
        (combination) === ("312211")
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

// Function sort & sawp
function sort_asc(myArray){
    for (i=0; myArray.length-2; i++){
        for (j=i; myArray.length-1; j++){
            if (myArray[j]>myArray[j+1]){swap(myArray[j], myArray[j+1])}
            
        }
    }
}
function swap(value_one, value_two){
    var temp = undefined;
    temp = value_one;
    value_one = value_two;
    value_two = temp;
    temp = undefined;
}


//.............................................................Changing tiles
for (let i=0; i< tiles.length; i++){
    tiles[i].addEventListener('click', changeTiles);
}


resetBtn.addEventListener('click', reset);
