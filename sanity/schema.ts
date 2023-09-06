import { type SchemaTypeDefinition } from 'sanity';
import rivers from './schemas/rivers';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [rivers],
};
