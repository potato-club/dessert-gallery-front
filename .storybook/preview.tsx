import type { Preview } from "@storybook/react";
import "../styles/globals.css";
import React from "react";
import { RecoilRoot } from "recoil";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <RecoilRoot>
          <Story {...context} />
        </RecoilRoot>
      );
    },
  ],
};

export default preview;
