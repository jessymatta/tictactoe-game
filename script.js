console.log("working?");

// getting all grid tiles and storing them in a "tiles"
const tiles = document.querySelectorAll(".tile");
console.log(tiles);

// Event listener for each
// Add event listener
tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
      console.log(tile,tiles);
    });
  });