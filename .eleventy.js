export default function (eleventyConfig) {
  // Layout aliases (CRITICAL)
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("blog", "blog.njk");
  eleventyConfig.addPassthroughCopy("assets");
  // Homepage
  eleventyConfig.addPassthroughCopy("index.html");

  // Static pages
  eleventyConfig.addPassthroughCopy("contact");
  eleventyConfig.addPassthroughCopy("programs");
  eleventyConfig.addPassthroughCopy("privacy-policy");
  eleventyConfig.addPassthroughCopy("terms-and-conditions");

  
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md");
  });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}

