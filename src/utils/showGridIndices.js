// GOAL
// Add small greyed-out texts to the grid to indicate the x and y indices of the tiles.

export function showGridIndices(k, gridWidth, gridHeight, tileSize) {
  for (let x = 1; x <= gridWidth; x++) {
    for (let y = 1; y <= gridHeight; y++) {
      k.add([
        k.pos(k.vec2(x * tileSize, y * tileSize)),
        k.text(`x:${x}\ny:${y}`, {
          size: 14,
          align: "center",
        }),
        k.color(17, 23, 38),
        k.z(1),
        k.anchor("center"),
      ]);
    }
  }
}
