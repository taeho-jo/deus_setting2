import React from "react";
// import { Button } from "@storybook/react/demo";

export default { title: "Header" };

export const beforeLogin = () => <button>Hello button</button>;

export const withEmojidd = () => (
  <button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);
