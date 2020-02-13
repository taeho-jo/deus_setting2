import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

// export const click = {
//   checkClick: action("checkClick")
// };

export const click = () => {
  return <Button checkClick={action("checkClick")} />;
};

storiesOf("Button", module).add("default", () => <Button {...action} />);
