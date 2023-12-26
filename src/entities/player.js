// GOAL
// Create a player entity with the loaded assets - without adding it directly to the canvas

export function makePlayer(k) {
  const player = k.make([
    k.sprite("player"), // load the player assets (defined in loadSprites)
    k.pos(k.center()), // place in middle of screen
    k.area(), // add area to the image so we can use it for collision detection
    k.anchor("center"), // define position from center of image
    k.scale(0.5), // scale image down to 50% to fit in grid tiles
  ]);

  return player;
}
