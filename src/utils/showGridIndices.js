// GOAL
// Add small greyed-out texts to the grid to indicate the x and y indices of the tiles.

import { GAME } from "./params.js";

export function showGridIndices(k, grid) {
  // DETERMINE where grid starts
  let startX = grid.pos[0];
  let startY = grid.pos[1];

  for (let x = 0; x < GAME.gridWidth; x++) {
    for (let y = 0; y < GAME.gridHeight; y++) {
      k.add([
        k.pos(k.vec2(startX + x * GAME.tileSize, startY + y * GAME.tileSize)),
        k.text(`x:${x}\ny:${y}`, {
          size: 14,
          align: "center",
        }),
        k.color(17, 23, 38),
        k.anchor("center"),
      ]);
    }
  }
}
