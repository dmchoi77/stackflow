import { ActivityComponentType, useActivity, useStack } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

const MyActivity: ActivityComponentType = () => {
  const { push } = useFlow();
  const activity = useActivity();
  console.log("🚀 ~ activity:", activity);

  const stack = useStack();
  console.log("🚀 ~ stack:", stack);

  const onClick = () => {
    push("Article", {
      title: "Hello",
    });
    // replace("Article", {
    //   title: "Hello",
    // });
  };

  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>
        My Activity
        <button onClick={onClick}>Go to article page</button>
      </div>
    </AppScreen>
  );
};

export default MyActivity;
