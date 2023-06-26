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
      addStyle(_options),
      overrideAppRoot(_options),
      overrideDependecies(_options),
      addComponentsPage(_options),
      addDirectivesPage(_options),
      addPipesPage(_options)
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

    const sourceTemplate = url("./files/apps/home");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/home/`),
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

function addStyle(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;

    const sourceTemplate = url("./files/styles");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/styles/`),
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
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(tree, _context) as Tree;

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
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(tree, _context) as Tree;

    return tree;
  };
}

export function addDirectivesPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps`;
    const sourceTemplate = url("./files/apps/directives/");
    if (_options.sharedDirectives === "No") return tree;

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/directives/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}

export function addPipesPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps`;
    const sourceTemplate = url("./files/apps/pipes/");
    if (_options.sharedPipes === "No") return tree;

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/pipes/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}


export function addComponentsPage(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app/apps`;
    const sourceTemplate = url("./files/apps/components/");
    if (_options.sharedComponents === "No") return tree;

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(`${moveToPath}/components/`),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}