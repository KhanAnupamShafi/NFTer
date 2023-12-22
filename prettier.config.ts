// @ts-check

module.exports = {
  // Standard prettier options
  singleQuote: true,
  semi: true,
  // Since prettier 3.0, manually specifying plugins is required

  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  pluginSearchDirs: false,
  // This plugin's options
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '',
    '^(next/(.*)$)|^(next$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@uploadthing/(.*)$',
    '^uploadthing/(.*)$',
    '',
    '^~/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'decorators-legacy',
  ],
  importOrderTypeScriptVersion: '5.0.0',
};