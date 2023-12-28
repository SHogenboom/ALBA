import { GAME } from "./params.js";

// CONVERT GRID TO CANVAS POSITION
// Convert x, y grid coordinates to actual canvas position
// @param posX: x grid coordinate
// @param posY: y grid coordinate

export function convertGridToCanvasPos(posX, posY, grid) {
  // DETERMINE where grid starts
  let startX = grid.pos[0];
  let startY = grid.pos[1];

  // Compute actual position from grid position
  let actualPosX = startX + GAME.tileSize * posX;
  let actualPosY = startY + GAME.tileSize * posY;

  return [actualPosX, actualPosY];
}
