console.log("working?");

//initial "empty" array populated with 0s
let game_states = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 1;
let score_player_1 = 0;
let score_player_2 = 0;
let gameOver = false;
const results_display = document.getElementById('results');
const player1_score = document.getElementById('player1');
const player2_score = document.getElementById('player2');


// getting all grid tiles and storing them in a "tiles"
const tiles = document.querySelectorAll(".tile");
console.log(tiles);

// Event listener for each
// Add event listener
tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        console.log(tile, tiles);

        let col = index % 3; //tiles indices are from 0 till 8 , mod 3 will give the correct column 0,1 or 2
        let row = (index - col) / 3;  // eqt(*)

        // Check if the current tile is empty
        if (game_states[row][col] == 0) {

            game_states[row][col] = player;
            // change player
            player *= -1;
            // To put the corresponding circle in the grid 
            for (let row = 0; row < 3; row++) {
                // Iterate over columns
                for (let col = 0; col < 3; col++) {
                    // Check if it is player 1
                    if (game_states[row][col] == 1) {
                        tiles[(row * 3) + col].classList.add("red");
                        // Check if it is player 2
                    } else if (game_states[row][col] == -1) {
                        tiles[(row * 3) + col].classList.add("yellow"); //opposite of (*)
                    }
                }
            }


        }
    });
});


