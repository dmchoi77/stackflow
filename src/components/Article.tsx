import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type ArticleParams = {
  title: string;
  articleId: string;
};
const Article: ActivityComponentType<ArticleParams> = ({ params }) => {
  console.log("🚀 ~ params:", params);
  return (
    <AppScreen appBar={{ title: "Article" }}>
      <div>
        <h1>{params.title}</h1>
      </div>
    </AppScreen>
  );
};

export default Article;
