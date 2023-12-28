// GOAL
// Add small greyed-out texts to the grid to indicate the x and y indices of the tiles.

import { GameObj, KaboomCtx } from "kaboom";
import { GAME, ITEM } from "../params.ts";

export function showGridIndices(k: KaboomCtx, grid: GameObj) {
  // DETERMINE where grid starts
  const startX = grid.pos[0];
  const startY = grid.pos[1];

  for (let x = 0; x < ITEM.gridWidth; x++) {
    for (let y = 0; y < ITEM.gridHeight; y++) {
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
