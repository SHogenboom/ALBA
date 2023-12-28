import { KaboomCtx } from "kaboom";
import { STYLING } from "../params.ts";

// GOAL
// Load all reqSTYLINGred assets.
// Spritesheets were created with TexturePacker.
// Account for animations
// Export as async function to allow for await

export async function loadAssets(k: KaboomCtx) {
  // PLAYER - BOAT
  k.loadSprite("player", "sprites/boat.png", {
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

  // FINISH - STARFISH
  k.loadSprite("finish", "sprites/starfish.png", {
    sliceX: 6,
    sliceY: 5,
    anims: {
      idle: {
        from: 0,
        to: 19,
      },
      achieved: {
        from: 20,
        to: 30,
      },
    },
  });

  // TILES
  const tileSize = 64; // size of the tiles in the spritesheet

  k.loadSpriteAtlas("sprites/tiles.png", {
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
  const originalSize = 376; // see the original assets - before having combined them into a spritesheet
  const newSize = originalSize / 2; // To create the spritesheet we scaled the original assets down to 50% of their original size

  // LOOP over the elements of the codeblocks (stringed indices) to create the different sprites.
  for (const codeBlockIndex in STYLING.codeBlockSprites) {
    k.loadSpriteAtlas("sprites/codeblocks.png", {
      // Assign the value name equal to the element of the codeblocks array (e.g., "left")
      [STYLING.codeBlockSprites[codeBlockIndex]]: {
        // The indices are strings, convert to numbers to use in calculations
        x: Number(codeBlockIndex) * originalSize, // determine where the sprite starts in the spritesheet
        y: 0, // spritesheet only has one row, so y is always 0
        width: newSize, // all codeblocks have the same size
        height: newSize,
      },
    });
  }

  // FONTS
  // Load a custom font from a .ttf file
  k.loadFont("gameFont", "fonts/UbuntuMono-Bold.ttf");
}
