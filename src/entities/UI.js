// GOAL
// Visualize the UI components as boxes in the game.
// The needed components are derived from the params file
// This file includes the sizes and positions of the UI components.

import { UI, LAYERS } from "../utils/params.js";

export function createUI(k) {
  for (let UIComponent in UI.components) {
    // No need to plot the dimensions of the actual game (outside area)
    if (UIComponent === "game") {
      continue;
    }

    // Create the UI component as an invisible box
    // Can use the showUI function below to make it visible
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
      k.opacity(0), // make fully transparent
      // by default a rect is drawn without a border.
    ]);
  }
}

export function showUI(k) {
  for (let UIComponent in UI.components) {
    // get the component from the kaboom context
    let comp = k.get(UIComponent)[0];

    // UPDATE STYLING
    // Add border
    comp.outline = {
      width: UI.styling.borderWidth,
      color: k.rgb(UI.styling.color),
    };
    comp.opacity = 0.5; // Make box less transparent

    // Plot the labels as text
    k.add([
      k.text(UIComponent, {
        size: UI.styling.fontSize,
        font: "gameFont",
      }),
      k.color(UI.styling.color),
      k.pos(UI.components[UIComponent].pos),
    ]);
  }
}
