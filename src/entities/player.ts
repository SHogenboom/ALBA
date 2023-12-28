import { KaboomCtx } from "kaboom";
import { LAYERS } from "../params.ts";

// MAKE PLAYER
// Create a player entity with the loaded assets
// @param k: kaboomContext (includes all kaboom functions)

export function makePlayer(k: KaboomCtx) {
  const player = k.add([
    "player", // label for easy retrieval
    k.sprite("player"), // load the player assets (defined in loadSprites)
    k.area(), // add area to the image so we can use it for collision detection
    k.anchor("center"), // define position from center of image
    k.scale(0.5), // scale image down to 50% to fit in grid tiles
    k.pos(0, 0), // initial position (updated later on) - without it the player never has a position to set.
    k.z(LAYERS.gridElements), // ensure plotted on top of grid.)
  ]);

  // start animation
  player.play("move", { loop: true });

  return player;
}
