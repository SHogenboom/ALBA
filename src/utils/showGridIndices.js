// GOAL
// Add small greyed-out texts to the grid to indicate the x and y indices of the tiles.

import { GAME } from "./params.js";

export function showGridIndices(k) {
  for (let x = 1; x <= GAME.gridWidth; x++) {
    for (let y = 1; y <= GAME.gridHeight; y++) {
      k.add([
        k.pos(k.vec2(x * GAME.tileSize, y * GAME.tileSize)),
        k.text(`x:${x}\ny:${y}`, {
          size: 14,
          align: "center",
        }),
        k.color(17, 23, 38),
        k.z(1),
        k.anchor("center"),
      ]);
    }
  }
}
