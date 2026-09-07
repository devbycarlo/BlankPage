const fs = require('node:fs/promises');
const path = require('node:path');

const file = path.join(__dirname, 'node_modules/serverlesswp/src/wordpress/directory.js');

(async () => {
  let content = await fs.readFile(file, 'utf8');
  const old = 'await fs.rename(staging, runtimeDir);';
  const replacement = 'await fs.rm(runtimeDir, { recursive: true, force: true });\n        await fs.rename(staging, runtimeDir);';
  if (content.includes(old) && !content.includes('await fs.rm(runtimeDir')) {
    content = content.replace(old, replacement);
    await fs.writeFile(file, content);
    console.log('Patched serverlesswp directory.js for /tmp/wp ENOTEMPTY fix');
  }
})();
