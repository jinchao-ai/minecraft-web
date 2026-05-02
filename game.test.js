const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : '';

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(html.includes('<canvas id="game"'), 'index.html should contain the main game canvas');
assert(html.includes('const BLOCKS'), 'index.html should define block types');
assert(html.includes('function generateWorld'), 'index.html should generate terrain');
assert(html.includes('function mineBlock'), 'index.html should support mining blocks');
assert(html.includes('function placeBlock'), 'index.html should support placing blocks');
assert(html.includes('function craftPlanks'), 'index.html should include basic crafting');
assert(html.includes('localStorage.setItem(SAVE_KEY'), 'index.html should save game state');
assert(html.includes('requestAnimationFrame(loop)'), 'index.html should run an animation loop');
assert(html.includes('touch-controls'), 'index.html should include mobile touch controls');

console.log('Game contract checks passed');
