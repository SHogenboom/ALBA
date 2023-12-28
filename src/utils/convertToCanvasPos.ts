import { GameObj, KaboomCtx } from "kaboom";
import { GAME } from "../params.ts";

// CONVERT GRID TO CANVAS POSITION
// Convert x, y grid coordinates to actual canvas position
// @param posX: x grid coordinate
// @param posY: y grid coordinate
// @param grid: grid level

export function convertGridToCanvasPos(
  k: KaboomCtx,
  posX: number,
  posY: number,
  grid: GameObj
) {
  // DETERMINE where grid starts
  const startX = grid.pos[0];
  const startY = grid.pos[1];

  // Compute actual position from grid position
  const actualPosX = startX + GAME.tileSize * posX;
  const actualPosY = startY + GAME.tileSize * posY;

  const actualPos = k.vec2(actualPosX, actualPosY);

  return actualPos;
}
