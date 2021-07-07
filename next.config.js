
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['q8ka1hF2DdXLvfdb5NfMxb'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  