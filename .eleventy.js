const markdownIt = require("markdown-it");
const markdownItAnc = require("markdown-it-anchor");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/public/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/*/*.md/");
  const md = markdownIt({
    html: true,
  });
  md.use(markdownItAnc, {
    tabIndex: false,
  });
  eleventyConfig.addCollection("games", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/games/**/*.md");
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
    extensions: "html",
    filters: {
      base: "htmlBaseUrl",
      html: "transformWithHtmlBase",
      pathPrefix: "addPathPrefixToUrl",
    },
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "docs",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: ["njk", "html"],
    dataTemplateEngine: "njk",
    pathPrefix: process.env.NODE_ENV === "production" ? "/gamevortex" : "",
  };
};
