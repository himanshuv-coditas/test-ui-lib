const fs = require('fs');
const path = require('path');
const https = require('https');

const themes = {
  light: 'lara-light-blue',
  dark: 'lara-dark-blue'
};

const themesDir = path.join(__dirname, 'primeng-light', 'theme.css');
const themesDirDark = path.join(__dirname, 'primeng-dark', 'theme.css');

// Create directories if they don't exist
if (!fs.existsSync(path.dirname(themesDir))) {
  fs.mkdirSync(path.dirname(themesDir), { recursive: true });
}
if (!fs.existsSync(path.dirname(themesDirDark))) {
  fs.mkdirSync(path.dirname(themesDirDark), { recursive: true });
}

// Download theme files
Object.entries(themes).forEach(([mode, theme]) => {
  const url = `https://unpkg.com/primeng@latest/resources/themes/${theme}/theme.css`;
  const file = fs.createWriteStream(path.join(__dirname, `primeng-${mode}`, 'theme.css'));

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${theme} theme`);
    });
  }).on('error', (err) => {
    fs.unlink(file.path, () => {});
    console.error(`Error downloading ${theme}: ${err.message}`);
  });
});
