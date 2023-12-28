// GOAL
// Visualize the UI components as boxes in the game.
// The needed components are derived from the params file
// This file includes the sizes and positions of the UI components.

import { KaboomCtx } from "kaboom";
import { UI, STYLING, LAYERS } from "../params.ts";

export function createUI(k: KaboomCtx) {
  for (const UIComponent in UI) {
    // No need to plot the dimensions of the actual game (outside area)
    if (UIComponent === "game") {
      continue;
    }

    // extract component
    const component = UI[UIComponent];

    if (component) {
      // extract positions - not sure why direct passing doesn't work
      const { x, y } = component.pos;

      // Create the UI component as an invisible box
      // Can use the showUI function below to make it visible
      k.add([
        UIComponent, // name
        // Dimensions specified in params.js
        k.rect(
          component.width,
          component.height,
          { radius: STYLING.styling.radius } // round corners
        ),
        k.z(LAYERS.ui), // plot on top of the background
        k.pos(k.vec2(x, y)), // position
        // STYLING
        k.opacity(0), // make fully transparent
        // by default a rect is drawn without a border.
      ]);
    }
  }
}

export function showUI(k: KaboomCtx) {
  for (const UIComponent in UI) {
    // get the component from the kaboom context
    const comp = k.get(UIComponent)[0];
    // extract info - not sure why direct passing doesn't work
    // Something with incompatible types
    const { x, y } = comp.pos;
    const { r, g, b } = STYLING.styling.color;

    // UPDATE STYLING
    // Add border
    comp.outline = {
      width: STYLING.styling.borderWidth,
      color: STYLING.styling.color,
    };
    comp.opacity = 0.5; // Make box less transparent

    // Plot the labels as text
    k.add([
      k.text(UIComponent, {
        size: STYLING.styling.fontSize,
        font: "gameFont",
      }),
      k.color(r, g, b),
      k.pos(x, y),
    ]);
  }
}
