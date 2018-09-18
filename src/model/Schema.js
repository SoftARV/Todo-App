import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const todoSchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: "post",
      columns: [
        { name: "title", type: "string" },
        { name: "color", type: "string" },
        { name: "type", type: "string" },
        { name: "is_pinned", type: "bool" }
      ]
    }),
    tableSchema({
      name: "task",
      columns: [
        { name: "body", type: "string" },
        { name: "is_done", type: "bool" },
        { name: "post_id", type: "string", isIndexed: true }
      ]
    })
  ]
});
