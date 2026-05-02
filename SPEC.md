# Minecraft Web 平衡版 Spec

## Goal

Build a complete, self-contained Minecraft-inspired web game that runs from `index.html` without external dependencies. The game should feel balanced: gathering, building, movement, survival pressure, crafting, and persistence all matter, but none require a long tutorial.

## Platform

- Single HTML file: `index.html`
- No package install required for gameplay
- Canvas rendering with embedded CSS and JavaScript
- Desktop keyboard/mouse support
- Mobile touch control overlay
- Local browser persistence through `localStorage`

## Core Loop

1. Explore a procedurally generated side-view voxel world.
2. Mine grass, dirt, stone, wood, leaves, sand, coal, and iron.
3. Collect blocks into inventory.
4. Place selected blocks to build paths, shelters, and structures.
5. Manage health, hunger, and stamina.
6. Craft planks and torches from gathered materials.
7. Save and load the world.

## World

- World size: 190 × 72 blocks.
- Terrain uses smoothed deterministic noise for hills and surface variation.
- Biome variation includes grass, sand pockets, shallow water, trees, stone layers, coal, and iron.
- Trees contain mineable wood and leaves; leaves can drop apples.
- Day/night cycle changes sky, lighting, and atmosphere.

## Player

- Side-view character with gravity and block collision.
- Movement: left, right, jump, sprint.
- Sprinting costs stamina and hunger.
- Hunger slowly drains over time.
- Empty hunger damages health.
- High hunger gradually regenerates health.
- Falling out of the world or reaching zero health respawns the player.

## Inventory and Blocks

Hotbar slots:

1. Grass
2. Dirt
3. Stone
4. Wood
5. Plank
6. Sand
7. Torch
8. Apple

Block balance:

- Dirt/grass/sand mine quickly.
- Wood takes moderate time and unlocks planks.
- Stone, coal, and iron take longer.
- Having iron improves mining speed for hard blocks.
- Apples are consumable instead of placeable.

## Crafting

- `E`: converts 1 wood into 4 planks.
- `T`: converts 1 coal and 1 wood into 4 torches.
- `F`: eats one apple, restoring hunger and some health.

## Controls

Desktop:

- `A` / `D`: move
- `W` / `Space`: jump
- `Shift`: sprint
- Left click: mine targeted block
- Right click: place selected block
- `1`-`8`: select hotbar slot
- `E`: craft planks
- `T`: craft torches
- `F`: eat apple
- `R`: respawn
- `P`: save
- `L`: load

Mobile:

- On-screen movement pad
- Buttons for mine, place, craft, and eat

## UI

- Pixel-art canvas scene with distinctive warm survival-fantasy styling.
- HUD displays title, coordinates, in-game time, health, hunger, and stamina.
- Hotbar shows selected slot and item counts.
- Context messages confirm mining, placement, crafting, eating, saving, and loading.
- Crosshair and target outline show the current interaction target.

## Persistence

Saving stores:

- World block grid
- Inventory counts
- Player position, health, and hunger
- Time of day

Loading restores the saved state from `localStorage`.

## Verification

`game.test.js` checks that `index.html` includes the expected core systems:

- Canvas
- Block definitions
- World generation
- Mining
- Placement
- Crafting
- Save support
- Animation loop
- Touch controls
