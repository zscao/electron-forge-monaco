

# Add Monaco Editor

Ref: https://github.com/suren-atoyan/monaco-react#use-monaco-editor-as-an-npm-package

1. add package 'monaco-editor/react'
2. add webpack plugin 'monaco-editor-webpack-plugin'
3. add the plugin to webpack config:
```javascript
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [new MonacoWebpackPlugin()]
};
```

4. config the loader:
```javascript
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";

loader.config({ monaco });
// ...
```

# Type Monaco Editor

```typescript
import MonacoEditor, { OnMount, OnChange, OnValidate, BeforeMount } from "@monaco-editor/react";

export function TextEditor() {
  const handleEditorChange: OnChange = (value, event) => {
  }
  const handleEditorDidMount: OnMount = (editor, monaco) => {
  }
  const handleEditorWillMount: BeforeMount = (monaco) => {
  }
  const handleEditorValidation: OnValidate = (markers) => {
  }

  return (
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}
```