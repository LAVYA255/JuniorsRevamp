const fs = require('fs');
const path = require('path');
const dir = './src/components';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/margin: "-100px"/g, 'margin: "0px"');
    content = content.replace(/margin: "-50px"/g, 'margin: "0px"');
    content = content.replace(/duration: 0.8/g, 'duration: 0.6');
    content = content.replace(/duration: 0.6/g, 'duration: 0.4');
    content = content.replace(/duration: 0.5/g, 'duration: 0.4');
    fs.writeFileSync(fullPath, content);
  }
});
