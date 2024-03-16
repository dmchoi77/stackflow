import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import MyActivity from "./components/MyActivity";
import Article from "./components/Article";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 200,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        MyActivity: "/my-activity",
        Article: "/articles/:articleId",
      },
      fallbackActivity: () => "MyActivity",
    }),
  ],
  activities: {
    MyActivity,
    Article,
  },
  // initialActivity: () => "MyActivity",
});
