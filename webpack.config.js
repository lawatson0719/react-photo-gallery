module.exports = {
	entry: './src/js/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader:'babel-loader',
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				query: {
					presets: ['react']
				}
			}
		]
	}
};