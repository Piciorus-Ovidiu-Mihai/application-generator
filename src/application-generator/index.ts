import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { angularProjectGenerator } from '../angular-project-generator';


export function applicationGenerator(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([
      angularProjectGenerator(_options),

    ]);
    return rule(tree, _context) as Rule;
  };
}
