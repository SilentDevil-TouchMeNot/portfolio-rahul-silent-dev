const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Fix the audioStarted flag logic
content = content.replace(
    /if\(audioStarted\) return;\s+audioStarted = true;/,
    `if(audioCtx && audioCtx.state === 'running') return;`
);

// Add audioCtx.resume() to startOnInteraction
content = content.replace(
    /function startOnInteraction\(\)\{\s+initAudio\(\);\s+\}/,
    `function startOnInteraction(){
    if(audioCtx) audioCtx.resume();
    initAudio();
  }`
);

fs.writeFileSync('index.html', content);
