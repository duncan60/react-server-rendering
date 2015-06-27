var path = require("path");

var commonLoaders = [
	{ test: /\.js$/, loader: "jsx-loader" },
	{ test: /\.png$/, loader: "url-loader" },
	{ test: /\.jpg$/, loader: "file-loader" },
];
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'server', 'build');
var mainPath = path.resolve(__dirname, 'app', 'entry.js');

module.exports = [
	{
		// The configuration for the client
		name: "browser",
		entry: {
			app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            mainPath
        ]
		},
		output: {
			path: buildPath,
			filename: "bundle.js",
			publicPath: '/build/'
		},
		module: {
			loaders: commonLoaders.concat([
				{ test: /\.css$/, loader: "style-loader!css-loader" },
				{
	                test: /\.js(x)?$/,
	                loader: 'babel',
	                exclude: nodeModulesPath
	            }
			])
		},
		plugins: []
	}
];