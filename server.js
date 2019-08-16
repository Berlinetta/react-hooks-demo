const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const getConfig = require('./webpack.config.js');

const host = "localhost";
const port = "3001";

const webpackConfig = getConfig();
webpackConfig.entry.unshift(`webpack-dev-server/client?http://${host}:${port}`, "webpack/hot/dev-server");

const devServerOptions = {
    contentBase: './dist',
    hot: true,
    hotOnly: true,
    host,
    port,
    index: 'index.html',
    stats: {
        colors: true
    },
    inline: false,
    historyApiFallback: true
};
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, host, () => {
    console.log(`dev server started: http://${host}:${port}`);
});
