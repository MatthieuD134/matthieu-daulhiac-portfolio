const path = require('path');

const buildEslintCommand = (filenames) =>
  `yarn next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.{md,json,html,js,jsx,ts,tsx}': 'yarn prettier --write',
};
