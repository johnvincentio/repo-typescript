# react-todo-list

## Install

To install the dependencies
```
$ npm i
```

To run the application
```
$ npm start
```



```

{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": [
    "@babel/proposal-object-rest-spread",
    "@babel/proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```

```
https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
```

```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```
  "rules": {
    "no-console": 0,
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "comments": 120,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignorePattern": "^import\\s.+\\sfrom\\s.+;$"
      }
    ],
    "indent": [2, "tab", { "SwitchCase": 1 }],
    "no-tabs": 0,
    "react/jsx-indent": ["off", 2],
    "react/jsx-indent-props": ["off", 2],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to"]
      }
    ],
    "react/destructuring-assignment": ["off", "always"]
  },
	```

	```
		"rules": {
		"linebreak-style": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "no-console": 1     // Means warning
  },
	"parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  }
	```

```
	"parserOptions": {
    "tsconfigRootDir": "__dirname",
    "project": ["./tsconfig.json"]
  },
```


.prettierrc

```
{
	"singleQuote": true,
	"overrides": [
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```

```
		"sourceType": "module",
    "createDefaultProgram": true
```



