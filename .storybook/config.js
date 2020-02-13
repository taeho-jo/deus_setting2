import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.(js|mdx)$/), module);

// module.exports = {
//   addons: ["@storybook/addon-actions/register"]
// };
