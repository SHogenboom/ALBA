// GOAL
// Visualize the UI components as boxes in the game.

import { UI, LAYERS } from "./params.js";

export function showUI(k) {
  for (let UIComponent in UI.components) {
    // No need to plot the dimensions of the actual game
    if (UIComponent === "game") {
      continue;
    }

    // Visualize the UI component as a box
    k.add([
      UIComponent, // name
      // Dimensions specified in params.js
      k.rect(
        UI.components[UIComponent].width,
        UI.components[UIComponent].height,
        { radius: UI.styling.radius } // round corners
      ),
      k.z(LAYERS.ui), // plot on top of the background
      k.pos(UI.components[UIComponent].pos), // position
      // STYLING
      k.opacity(0.5), // make transparent
      k.outline(UI.styling.borderWidth, k.rgb(UI.styling.color)), // add border
    ]);

    // Plot the labels as text
    k.add([
      k.text(UIComponent, {
        size: UI.styling.fontSize,
      }),
      k.color(UI.styling.color),
      k.pos(UI.components[UIComponent].pos),
    ]);
  }
}
