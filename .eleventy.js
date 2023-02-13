module.exports = function(eleventyConfig) {
	
	eleventyConfig.setBrowserSyncConfig({
		files: './docs/css/**/*.css'
	});

	eleventyConfig.addPassthroughCopy("img");

	return {
		dir: {
			output: "docs"
		},
		passthroughFileCopy: true
	};

};