import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];
if (!componentName) {
  console.log("❌ Bitte einen Komponentennamen angeben!");
  process.exit(1);
}

const componentDir = path.join(__dirname, "src", "components", componentName);
fs.mkdirSync(componentDir, { recursive: true });

fs.writeFileSync(
  path.join(componentDir, `${componentName}.jsx`),
  `import styles from "./${componentName}.module.css";

function ${componentName}() {
  return <div className={styles.container}>${componentName} Component</div>;
}

export default ${componentName};
`
);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.module.css`),
  `.${componentName} {
  /* Add styles here */
}`
);

fs.writeFileSync(
  path.join(componentDir, "index.js"),
  `export { default } from "./${componentName}";`
);

console.log(`✅ Component ${componentName} created successfully!`);
