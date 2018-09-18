import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { todoSchema } from "./src/model/schema";
import Post from "./src/model/Post";
import Task from "./src/model/Task";

const adapter = new SQLiteAdapter({
  dbName: "todoApp",
  schema: todoSchema
});

const database = new Database({
  adapter,
  modelClasses: [Post, Task]
});

AppRegistry.registerComponent(appName, () => App);
