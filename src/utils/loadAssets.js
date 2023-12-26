// GOAL
// Load all required assets.
// Spritesheets were created with TexturePacker.
// Account for animations
// Export as async function to allow for await

export async function loadAssets(k) {
  // PLAYER - BOAT
  k.loadSprite("player", "boat.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
      idle: {
        from: 0,
        to: 0,
      },
      move: {
        from: 1,
        to: 8,
      },
    },
  });
}
