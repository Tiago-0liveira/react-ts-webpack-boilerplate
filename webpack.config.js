const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: ["./src/App.tsx"],
		vendor: ["react", "react-dom"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].bundle.js",
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"],
		fallback: {
			util: require.resolve("util/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
						},
					},
				],
			},
		],
	},
	externals: { sqlite3: "commonjs sqlite3" },

	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
};
