import {
  MergeStrategy,
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  move,
  strings,
  template,
  url,
} from "@angular-devkit/schematics";
import { execSync } from "child_process";

export function ionicProjectGenerator(_options: any): Rule {
  const name: string = _options.name;

  
  createIonicAngularApp(name);
  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([
      addService(_options),
      overrideAppRoot(_options),
      addSharedComonents(_options),
      addSharedDirectives(_options),
      addSharedPipes(_options),
      addAuthModule(_options),
      addInterceptors(_options),
      addGuards(_options),
      addDashboardNavigation(_options),
      addLayout(_options),
      addCore(_options),
      addAboutUsPage(_options),
      addGlobalTheme(_options),
      overrideAppStyle(_options),
      overrideDependecies(_options),
      addDirectivesPage(_options),
      addPipesPage(_options),
      addIonicComponentsPage(_options),
      addComponentsPage(_options),
      addConstantForRoutes(_options)
    ]);
    return rule(tree, _context) as Rule;
  };
}

// Create ionic blank application
function createIonicAngularApp(name: string): void {
  const command = `ionic start ${name} blank --type=angular --capacitor --ng --no-interactive`;

  try {
    execSync(command, { stdio: "inherit" });
    console.log("Ionic Angular application created successfully.");
  } catch (error) {
    console.error("Error creating Ionic Angular application:", error);
  }
}

// Add services
function addService(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath: string = `${_options.name}/src/app/libs`;
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

// Add shared components
function addSharedComonents(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/shared/components/`;
    if (_options.sharedComponents === "No") return tree;

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

// Add shared directives
function addSharedDirectives(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/shared/directives/`;
    if (_options.sharedDirectives === "No") return tree;

    const sourceTemplate = url("./files/shared/directives");
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

// Add Shared Pipes
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

// Add Authentication Module
function addAuthModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/auth/`;
    if (_options.authModule === "No") {
      return overrideNoAuthAppRoot(_options);
    }

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

// Add Generic Interceptors
function addInterceptors(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/libs/interceptors/`;
    if (_options.interceptors === "No") return tree;

    const sourceTemplate = url("./files/libs/interceptors");
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

// Add Generic Guards
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

// Add Dashboard Navigation
function addDashboardNavigation(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/apps/dashboard/`;
    if (_options.dashboard === "No") return tree;

    const sourceTemplate = url("./files/apps/dashboard/");
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

// Add main layout for the application
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

// Add core module
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

// Add About Us Page
function addAboutUsPage(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/apps/about-us/`;
    if (_options.aboutUs === "No") return tree;

    const sourceTemplate = url("./files/apps/about-us");
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

export function overrideNoAuthAppRoot(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app`;
    const sourceTemplate = url("./override/not-aut/");

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

export function addGlobalTheme(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/theme/`;
    const sourceTemplate = url("./files/theme/");

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

export function overrideAppStyle(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src`;
    const sourceTemplate = url("./files/global-style/");

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
    if (_options.sharedDirectives === "No") return tree;

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
    if (_options.sharedPipes === "No") return tree;

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

export function addIonicComponentsPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps/ionic-components/`;
    const sourceTemplate = url("./files/apps/ionic-components/");
    if (_options.ionicComponents === "No"){
      return tree;
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
    if (_options.sharedComponents === "No") return tree;

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

export function addConstantForRoutes(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/constants/constants.ts`;
    let arrayOfRoutes: string[] = [];
    if (_options.ionicComponents === "No"){
      arrayOfRoutes.push('ionic-components')
    }

    if(_options.sharedPipes === 'No'){
      arrayOfRoutes.push('pipes')
    }

    if(_options.sharedComponents === 'No'){
      arrayOfRoutes.push('components')
    }

    if(_options.sharedDirectives === 'No'){
      arrayOfRoutes.push('directives')
    }

    if(_options.dashboard === 'No'){
      arrayOfRoutes.push('dashboard')
    }

    if(_options.aboutUs === 'No'){
      arrayOfRoutes.push('about-us')
    }

    const content = `export const routeToRemove = ${JSON.stringify(arrayOfRoutes)};`;
    tree.create(moveToPath, content);
    console.log(content)

    return tree;
  };
}

export function removeMenuItems(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/constants/menus.ts`;
    let arrayOfRoutes: string[] = [];
    if (_options.ionicComponents === "No"){
      arrayOfRoutes.push('Ionic')
    }

    if(_options.sharedPipes === 'No'){
      arrayOfRoutes.push('Pipes')
    }

    if(_options.sharedComponents === 'No'){
      arrayOfRoutes.push('Components')
    }

    if(_options.sharedDirectives === 'No'){
      arrayOfRoutes.push('Directives')
    }

    if(_options.dashboard === 'No'){
      arrayOfRoutes.push('Dashboard')
    }

    if(_options.aboutUs === 'No'){
      arrayOfRoutes.push('About us')
    }

    if(_options.authModule === 'No'){
      arrayOfRoutes.push('Authentication')
    }

    const content = `export const menus = ${JSON.stringify(arrayOfRoutes)};`;
    tree.create(moveToPath, content);
    console.log(content)

    return tree;
  };
}
