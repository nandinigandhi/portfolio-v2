// document.addEventListener('DOMContentLoaded', () => {
//     const gridContainer = document.getElementById('gridContainer');
//     const tilesImage = document.getElementById('tilesImage');
//     const rows = 5;
//     const cols = 4;
//     const totalTiles = rows * cols; // 20 tiles
//     const tilesToFlip = 13; // Exactly 13 flippable tiles

//     // Wait for the image to load
//     tilesImage.onload = () => {
//         const imgWidth = tilesImage.naturalWidth;
//         const imgHeight = tilesImage.naturalHeight;
//         const tileWidth = imgWidth / cols; // Width of each tile
//         const tileHeight = imgHeight / rows; // Height of each tile

//         // Hide the original image since we'll use it in tiles
//         tilesImage.style.display = 'none';

//         // Generate tiles dynamically
//         for (let i = 0; i < totalTiles; i++) {
//             const row = Math.floor(i / cols);
//             const col = i % cols;

//             const tile = document.createElement('div');
//             tile.classList.add('tile');

//             const tileFront = document.createElement('div');
//             tileFront.classList.add('tile-front');

//             const tileImg = document.createElement('img');
//             tileImg.src = './images/tiles.jpg'; // Match your HTML path
//             tileImg.style.position = 'absolute';
//             tileImg.style.width = `${imgWidth}px`;
//             tileImg.style.height = `${imgHeight}px`;
//             tileImg.style.left = `-${col * tileWidth}px`;
//             tileImg.style.top = `-${row * tileHeight}px`;

//             tileFront.appendChild(tileImg);

//             const tileBack = document.createElement('div');
//             tileBack.classList.add('tile-back');

//             tile.appendChild(tileFront);
//             tile.appendChild(tileBack);

//             gridContainer.appendChild(tile);
//         }

//         // Randomly select 13 tiles to be flippable
//         const tiles = document.querySelectorAll('.tile');
//         const flipIndices = new Set();
//         while (flipIndices.size < tilesToFlip) {
//             const randomIndex = Math.floor(Math.random() * totalTiles);
//             flipIndices.add(randomIndex);
//         }

//         tiles.forEach((tile, index) => {
//             if (flipIndices.has(index)) {
//                 tile.classList.add('can-flip');
//             }
//         });
//     };

//     // Error handling for image loading
//     tilesImage.onerror = () => {
//         console.error('Failed to load the tiles image at ./images/tiles.jpg');
//     };
// });