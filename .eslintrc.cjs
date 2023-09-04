module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	// parserOptions: {
	// 	project: "./tsconfig.json",
	// 	tsconfigRootDir: "./",
	// },
	plugins: ["react-refresh"],
	// plugins: ["react-refresh", "@typescript-eslint", "import"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
	// settings: {
	// 	"import/resolver": {
	// 		typescript: {
    //             project: '.'
    //         },
	// 	},
	// },
};
