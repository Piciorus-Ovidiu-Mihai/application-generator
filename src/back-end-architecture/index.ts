import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { execSync } from "child_process";

export function backEndArchitecture(_options: any): Rule {
  console.log(_options);

  return (tree: Tree, _context: SchematicContext) => {
    let repositoryUrl: string = "";
    if (_options.type === "clean-architecture") {
      repositoryUrl =
        "https://github.com/Piciorus-Ovidiu-Mihai/clean-architecture-template";
    } else {
      if (_options.type === "three-tier-architecture")
        repositoryUrl =
          "https://github.com/Piciorus-Ovidiu-Mihai/three-tier-architecture-template.git";
      else
        console.error(
          'Invalid architecture type. Please provide either "clean-architecture" or "three-tier-architecture"'
        );
    }

    try {
      const command = `git clone ${repositoryUrl} ../three-tier/back-end/`;
      execSync(command, { stdio: "ignore" });
      console.log("Repository cloned successfully");
    } catch (error) {
      console.error("Error cloning repository:", error);
    }

    return tree;
  };
}
