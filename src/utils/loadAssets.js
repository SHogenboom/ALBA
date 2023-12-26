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

  // TILES
  let tileSize = 64; // size of the tiles in the spritesheet

  k.loadSpriteAtlas("tiles.png", {
    gridTop: {
      x: tileSize * 6, // fifth element
      y: 0,
      width: tileSize,
      height: tileSize,
    },
    gridBottom: {
      x: tileSize * 2, // third element
      y: 0,
      width: tileSize,
      height: tileSize,
    },
    gridCenter: {
      x: tileSize * 0, // first element
      y: 0,
      width: tileSize,
      height: tileSize,
    },
  });

  // CODE BLOCKS
  let originalSize = 376; // see the original assets - before having combined them into a spritesheet
  let newSize = originalSize / 2; // To create the spritesheet we scaled the original assets down to 50% of their original size
  let codeBlocks = ["down", "left", "right", "up"]; // the order in which the code blocks appear in the spritesheet

  // LOOP over the elements of the codeblocks (stringed indices) to create the different sprites.
  for (let codeBlockIndex in codeBlocks) {
    k.loadSpriteAtlas("codeblocks.png", {
      // Assign the value name equal to the element of the codeblocks array (e.g., "left")
      [codeBlocks[codeBlockIndex]]: {
        // The indices are strings, convert to numbers to use in calculations
        x: Number(codeBlockIndex) * originalSize, // determine where the sprite starts in the spritesheet
        y: 0, // spritesheet only has one row, so y is always 0
        width: newSize, // all codeblocks have the same size
        height: newSize,
      },
    });
  }
}
