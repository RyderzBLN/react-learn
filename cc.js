import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawComponentName = process.argv[2];
if (!rawComponentName) {
  console.log("❌ Bitte einen Komponentennamen angeben!");
  process.exit(1);
}

const componentName =
  rawComponentName.charAt(0).toUpperCase() +
  rawComponentName.slice(1).toLowerCase();

const componentDir = path.join(__dirname, "src", "components", componentName);
fs.mkdirSync(componentDir, { recursive: true });

fs.writeFileSync(
  path.join(componentDir, `${componentName}.jsx`),
  `import React from "react";
import "./${componentName}.style.css";

function ${componentName}() {
  return <div className="${componentName}">${componentName} Component</div>;
}

export default ${componentName};
`
);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.style.css`),
  `.${componentName} {
  /* Add styles here */
}`
);

console.log(`✅ Component ${componentName} created successfully!`);
