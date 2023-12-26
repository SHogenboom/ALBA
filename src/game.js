// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling
import { loadAssets } from "./utils/loadAssets.js"; // load assets (sprites, fonts etc)
import { makePlayer } from "./entities/player.js"; // create player entity

// GLOBAL VARIABLES
// 540 x 960 pixels, 16:9 ratio
const gameWidth = 960;
const gameHeight = 540;

// CREATE GAME
const k = kaboom({
  width: gameWidth,
  height: gameHeight,
  canvas: document.querySelector("#game"),
  global: false,
  debug: true,
});

// enter inspect mode
k.debug.inspect = true;

// LOAD ASSETS
// wait for assets to load before continuing
await loadAssets(k);

// CREATE PLAYER
let player = k.add(makePlayer(k));
player.play("move", { loop: true });
