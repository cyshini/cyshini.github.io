module.exports = function(eleventyConfig) {
	
	eleventyConfig.setBrowserSyncConfig({
		files: './docs/css/**/*.css'
	});

	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("fonts");

	return {
		dir: {
			output: "docs"
		},
		passthroughFileCopy: true
	};

};