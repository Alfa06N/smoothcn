#!/usr/bin/env node
// cli/index.js
const { execSync } = require('child_process');

const component = process.argv[2]; // The component part
const username = 'Alfa06N';

console.log(`🚀 Adding ${component} to your project...`);

// 1. Download the library core (transitions/variants) if missing
// Using degit to pull specific folders
execSync(
  `npx degit ${username}/smoothcn/src/lib/smoothcn src/lib/smoothcn --force`,
);

// 2. Download the specific component
execSync(
  `npx degit ${username}/smoothcn/src/components/smoothcn/${component} src/components/smoothcn/${component} --force`,
);

console.log(`✅ ${component} added successfully!`);
