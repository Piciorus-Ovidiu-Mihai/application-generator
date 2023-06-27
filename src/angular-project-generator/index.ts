import {
  MergeStrategy,
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  externalSchematic,
  mergeWith,
  move,
  strings,
  template,
  url,
} from "@angular-devkit/schematics";

export function angularProjectGenerator(_options: any): Rule {
  const name: string = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([
      createProject(name),
      addService(_options),
      addSharedComonents(_options),
      addSharedPipes(_options),
      addSharedDirectives(_options),
      addAuthModule(_options),
      addInterceptors(_options),
      addGuards(_options),
      addDashboardNavigation(_options),
      addAboutUsPage(_options),
      addLayout(_options),
      addCore(_options),
      addTheme(_options),
      overrideAppRoot(_options),
      overrideDependecies(_options),
      addComponentsPage(_options),
      addDirectivesPage(_options),
      addPipesPage(_options),
      overrideGlobalStyle(_options),
      addConstantForRoutes(_options),
      removeMenuItems(_options),
    ]);
    return rule(tree, _context) as Rule;
  };
}

function createProject(name: string): Rule {
  return externalSchematic("@schematics/angular", "ng-new", {
    name,
    version: "16.0.0",
    directory: name,
    routing: true,
    style: "scss",
    inlineStyle: false,
    inlineTemplate: false,
  });
}

function addService(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath: string = `${_options.name}/src/app/libs/`;
    let serviceBase: string = "";
    if (_options.service === "firebase-base-service")
      serviceBase = "base-firebase";
    else if (_options.service === "base-serivce") serviceBase = "base-service";
    else serviceBase = "base";

    const sourceTemplate = url(`./files/libs/${serviceBase}/`);
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addSharedComonents(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/shared/components/`;
    if (_options.sharedComponents === "No") {
      const sourceTemplate = url("./files/shared/components/home-template/");
      const sourceParametrizeTemplate = apply(sourceTemplate, [
        template({
          ..._options,
          ...strings,
        }),
        move(moveToPath),
      ]);
      tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
      return tree;
    }

    const sourceTemplate = url("./files/shared/components/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addSharedDirectives(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/shared/directives/`;
    if (_options.sharedDirectives === "No") return tree;

    const sourceTemplate = url("./files/shared/directives/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addSharedPipes(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/shared/pipes/`;
    if (_options.sharedPipes === "No") return tree;

    const sourceTemplate = url("./files/shared/pipes/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addAuthModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/auth/`;
    if (_options.authModule === "No") return tree;

    const sourceTemplate = url("./files/auth/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addInterceptors(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/libs/interceptors/`;
    if (_options.interceptors === "No") return tree;

    const sourceTemplate = url("./files/libs/interceptors/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addGuards(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/libs/guards/`;
    if (_options.guards === "No") return tree;

    const sourceTemplate = url("./files/libs/guards/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addDashboardNavigation(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/apps/home/`;
    if (_options.dashboard === "No") {
      return removeRouteFromFile(
        `${name}/src/app/core/core-routing.module.ts`,
        "home"
      );
    }

    const sourceTemplate = url("./files/apps/home/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addLayout(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/layout/`;

    const sourceTemplate = url("./files/layout/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addCore(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/core/`;

    const sourceTemplate = url("./files/core/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addAboutUsPage(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/apps/about-us/`;
    if (_options.aboutUs === "No") {
      return removeRouteFromFile(
        `${_options.name}/src/app/core/core-routing.module.ts`,
        "about-us"
      );
    }

    const sourceTemplate = url("./files/apps/about-us/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addTheme(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/themes/`;

    const sourceTemplate = url("./files/themes/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

export function overrideAppRoot(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app`;
    const sourceTemplate = url("./files/root/");

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(
      tree,
      _context
    ) as Tree;

    return tree;
  };
}

export function overrideDependecies(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}`;
    const sourceTemplate = url("./files/dependencies/");

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(
      tree,
      _context
    ) as Tree;

    return tree;
  };
}

export function addDirectivesPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps/directives/`;
    const sourceTemplate = url("./files/apps/directives/");
    if (_options.sharedDirectives === "No") {
      return removeRouteFromFile(
        `${name}/src/app/core/core-routing.module.ts`,
        "directives"
      );
    }

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}

export function addPipesPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps/pipes/`;
    const sourceTemplate = url("./files/apps/pipes/");
    if (_options.sharedPipes === "No") {
      return removeRouteFromFile(
        `${name}/src/app/core/core-routing.module.ts`,
        "pipes"
      );
    }

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}

export function addComponentsPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps/components/`;
    const sourceTemplate = url("./files/apps/components/");
    if (_options.sharedComponents === "No") {
      return removeRouteFromFile(
        `${name}/src/app/core/core-routing.module.ts`,
        "components"
      );
    }

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}

export function overrideGlobalStyle(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/`;
    const sourceTemplate = url("./files/override/");

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(
      tree,
      _context
    ) as Tree;

    return tree;
  };
}

export function addConstantForRoutes(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/constants/constants.ts`;
    let arrayOfRoutes: string[] = [];

    if (_options.sharedPipes === "No") {
      arrayOfRoutes.push("pipes");
    }

    if (_options.sharedComponents === "No") {
      arrayOfRoutes.push("components");
    }

    if (_options.sharedDirectives === "No") {
      arrayOfRoutes.push("directives");
    }

    if (_options.dashboard === "No") {
      arrayOfRoutes.push("home");
    }

    if (_options.aboutUs === "No") {
      arrayOfRoutes.push("about-us");
    }

    const content = `export const routeToRemove = ${JSON.stringify(
      arrayOfRoutes
    )};`;
    tree.create(moveToPath, content);
    console.log(content);

    return tree;
  };
}

export function removeMenuItems(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/constants/menus.ts`;
    let arrayOfRoutes: string[] = [];

    if (_options.sharedPipes === "No") {
      arrayOfRoutes.push("Pipes");
    }

    if (_options.sharedComponents === "No") {
      arrayOfRoutes.push("Components");
    }

    if (_options.sharedDirectives === "No") {
      arrayOfRoutes.push("Directives");
    }

    if (_options.dashboard === "No") {
      arrayOfRoutes.push("Home");
    }

    if (_options.aboutUs === "No") {
      arrayOfRoutes.push("About us");
    }

    if (_options.authModule === "No") {
      arrayOfRoutes.push("Login");
    }

    const content = `export const menus = ${JSON.stringify(arrayOfRoutes)};`;
    tree.create(moveToPath, content);
    console.log(content);

    return tree;
  };
}

export function overrideNoAuthAppRoot(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app`;
    const sourceTemplate = url("./override/override-root/");

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(
      tree,
      _context
    ) as Tree;

    return tree;
  };
}

function removeRouteFromFile(filePath: string, routeName: string): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (!tree.exists(filePath)) {
      console.error(`File "${filePath}" does not exist.`);
      return;
    }

    const fileContent = tree.read(filePath)?.toString("utf-8");
    if (!fileContent) {
      console.error(`Failed to read content from file "${filePath}".`);
      return;
    }

    const lines = fileContent.split("\n");
    const updatedLines = [];
    let removeNextTwoLines = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes(`path: '${routeName}'`)) {
        // Skip current line and the next two lines
        i += 2;
        removeNextTwoLines = true;
        continue;
      }

      if (removeNextTwoLines) {
        // Skip next two lines
        removeNextTwoLines = false;
        continue;
      }

      updatedLines.push(line);
    }

    const updatedContent = updatedLines.join("\n");
    tree.overwrite(filePath, updatedContent);

    return tree;
  };
}
