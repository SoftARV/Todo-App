import { Model } from "@nozbe/watermelondb";

export default class Task extends Model {
  static table = "task";
  static associations = {
    tasks: { type: "belongs_to", key: "post_id" }
  };
}
