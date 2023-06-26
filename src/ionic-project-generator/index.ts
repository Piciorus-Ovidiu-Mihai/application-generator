import {
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

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ionicProjectGenerator(_options: any): Rule {
  const name: string = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    createIonicAngularApp(name);
    const rule = chain([addService(_options)]);
    return rule(tree, _context) as Rule;
  };
}

function createIonicAngularApp(name: string): void {
  const command = `ionic start ${name} blank --type=angular --capacitor --ng --no-interactive`;

  try {
    execSync(command, { stdio: 'inherit' });
    console.log('Ionic Angular application created successfully.');
  } catch (error) {
    console.error('Error creating Ionic Angular application:', error);
  }
}

function addService(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath: string = `${_options.name}/src/app`;
    let serviceBase: string = "";
    if (_options.service === "firebase-base-service")
      serviceBase = "base-firebase";
    else if (_options.service === "base-serivce") serviceBase = "base-service";
    else serviceBase = "base";

    const sourceTemplate = url(`./files/libs/${serviceBase}`);
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/libs/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addSharedComonents(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src`;
    if (_options.sharedComponents === "No") return tree;

    const sourceTemplate = url("./files/shared/components");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/shared/components`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addSharedDirectives(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src`;
    if (_options.sharedDirectives === "No") return tree;

    const sourceTemplate = url("./files/shared/directives");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/shared/directives`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addSharedPipes(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src`;
    if (_options.sharedPipes === "No") return tree;

    const sourceTemplate = url("./files/shared/pipes");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/shared/pipes`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addAuthModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;
    if (_options.authModule === "No") return tree;

    const sourceTemplate = url("./files/auth");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/auth`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addInterceptors(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;
    if (_options.interceptors === "No") return tree;

    const sourceTemplate = url("./files/libs/interceptors");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/libs/interceptors/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addGuards(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;
    if (_options.guards === "No") return tree;

    const sourceTemplate = url("./files/libs/guards");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/libs/guards/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addDashboardNavigation(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/apps`;
    if (_options.dashboard === "No") return tree;

    const sourceTemplate = url("./files/apps/dashboard");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/dashboard/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addLayout(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;

    const sourceTemplate = url("./files/layout/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/layout/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addCore(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;

    const sourceTemplate = url("./files/core/");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/core/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}

function addAboutUsPage(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app/apps`;
    if (_options.aboutUs === "No") return tree;

    const sourceTemplate = url("./files/apps/about-us");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/about-us/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}