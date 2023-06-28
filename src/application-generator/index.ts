import {
  Rule,
  SchematicContext,
  Tree,
  chain,
} from "@angular-devkit/schematics";
import { execSync } from "child_process";

export function applicationGenerator(options: any): Rule {
  createBackEnd();
  if (options.fronEnd === "Ionic") {
    createFrontEnd("ionic-project-generator");
  } else {
    createFrontEnd("angular-project-generator");
  }
  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([]);
    return rule(tree, _context) as Rule;
  };
}

function createBackEnd(): void {
  const command = "schematics .:back-end-architecture --dry-run=false";

  try {
    execSync(command, { stdio: "inherit" });
    console.log("Ionic Angular application created successfully.");
  } catch (error) {
    console.error("Error creating Ionic Angular application:", error);
  }
}

function createFrontEnd(type: string): void {
  const command = `schematics .:${type} --dry-run=false`;

  try {
    execSync(command, { stdio: "inherit" });
    console.log("Ionic Angular application created successfully.");
  } catch (error) {
    console.error("Error creating Ionic Angular application:", error);
  }
}
