import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.atlas-probeg.ru/graphql',
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
