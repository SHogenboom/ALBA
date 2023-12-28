import { KaboomCtx } from "kaboom";
import { LAYERS } from "../params.ts";

// MAKE FINISH
// Create a finish entity with the loaded assets - without adding it directly to the canvas
// @param k: kaboomContext (includes all kaboom functions)

export function makeFinish(k: KaboomCtx) {
  const finish = k.add([
    "finish", // label for easy retrieval
    k.sprite("finish"), // load the player assets (defined in loadSprites)
    k.area(), // add area to the image so we can use it for collision detection
    k.anchor("center"), // define position from center of image
    k.scale(0.15), // scale image down to 50% to fit in grid tiles
    k.pos(0, 0), // initial position (updated later on) - without it the player never has a position to set.
    k.z(LAYERS.gridElements), // ensure plotted on top of grid.)
  ]);

  // start animation
  finish.play("idle", { loop: true });

  return finish;
}
