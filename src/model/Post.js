import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class Post extends Model {
  static table = "post";
  static associations = {
    tasks: { type: "has_many", foreignKey: "post_id" }
  };

  @field("title")
  title;
  @field("type")
  type;
  @field("is_pinned")
  isPinned;
}
