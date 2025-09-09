import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disallow `import * as React from 'react'` in favor of named imports
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "ImportNamespaceSpecifier[source.value='react']",
          message:
            "Use named imports from react (e.g., import { useState } from 'react') instead of namespace import.",
        },
      ],
    },
  },
];

export default eslintConfig;
