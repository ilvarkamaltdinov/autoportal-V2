import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './graph/schema.graphql',
  documents: 'apollo/**/*.ts',
  generates: {
    'types/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      }
    },
  },
};

export default config;
