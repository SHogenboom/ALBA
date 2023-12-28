import { UI, GAME } from "../utils/params.js";

// SHOW QUESTION
// Show the question in the correct place on the canvas
// @param k: kaboomContext (includes all kaboom functions)

export function showQuestion(k) {
  // Get the container
  let questionBox = k.get("questionBox")[0];

  // Add the question to the container
  questionBox = k.add([
    "question", // name,
    k.text(GAME.question, {
      size: UI.styling.fontSize,
      font: "gameFont",
    }),
    k.color(UI.styling.color),
    // Determine the center of the UI box.
    // NOTE: ui containers are plotted from the top-left corner
    k.pos(
      questionBox.pos.x + questionBox.width / 2,
      questionBox.pos.y + questionBox.height / 2
    ),
    // Determine position from center of text
    k.anchor("center"),
  ]);

  return questionBox;
}
