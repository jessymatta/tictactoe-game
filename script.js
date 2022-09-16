console.log("working?");

//initial "empty" array populated with 0s
let game_states = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 1;
let score_player_1 = 0;
let score_player_2 = 0;
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
            // Check winner
            checkWinner();

        }
    });
});


// to check if there is a winner
//to game_states matrix is populated with 1s or -1s throughout the game, so a winning states is when a row sums up to 3(player1 won) or -3 for player 2
//so will be comparing row sums, column sums and diagonal sums to check for 3s or -3s
function checkWinner() {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        let row_sum = game_states[i][0] + game_states[i][1] + game_states[i][2];
        let column_sum = game_states[0][i] + game_states[1][i] + game_states[2][i];
        if (row_sum == 3 || column_sum == 3) {
            // Player 1 wins
            score_player_1+=1;
            endGame(1);
            return
        } else if (row_sum == -3 || column_sum == -3) {
            // Player 2 wins
            score_player_2+=1;
            endGame(2);
            return
        }
    }

    // Check diagonals
    let diagonal_1_sum = game_states[0][0] + game_states[1][1] + game_states[2][2];
    let diagonal_2_sum = game_states[0][2] + game_states[1][1] + game_states[2][0];
    if (diagonal_1_sum == 3 || diagonal_2_sum == 3) {
        // Player 1 wins
        score_player_1+=1;
        endGame(1);
        return
    } else if (diagonal_1_sum == -3 || diagonal_2_sum == -3) {
        // Player 2 wins
        score_player_2+=1;
        endGame(2);
        return
    }

    // Check for a tie, no row has a 0 left in it and no one won at this stage
    if (game_states[0].indexOf(0) == -1 &&
        game_states[1].indexOf(0) == -1 &&
        game_states[2].indexOf(0) == -1) {
        endGame(0);
        return
    }
}

// Function to end the game and display the result
function endGame(winner) {

    // Check if game ended in a tie
    if (winner == 0) {
        results_display.innerText = "It's a tie"
    } else {
        results_display.innerText = `Player ${winner} won`
    }
}