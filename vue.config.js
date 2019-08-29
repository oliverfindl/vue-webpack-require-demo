"use strict";

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
	chainWebpack: config => {

		// https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
		const svgRule = config.module.rule("svg");
		svgRule.uses.clear();
		svgRule.use("html-loader").loader("html-loader");

		// https://www.npmjs.com/package/webpack-bundle-analyzer
		config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);

	}
};
