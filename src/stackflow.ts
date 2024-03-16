import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import MyActivity from "./components/MyActivity";
import Article from "./components/Article";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 200,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MyActivity,
    Article,
  },
  initialActivity: () => "MyActivity",
});
