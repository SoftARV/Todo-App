import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import PostItem from "./PostItem";
import NavigationService from "../shared/NavigationService";

export default class List extends React.Component {
  _keyExtractor = (item, index) => item.name;

  _renderPost(post) {
    return (
      <PostItem
        post={post.item}
        onItemPress={() => NavigationService.navigate("PostScreen", post.item)}
      />
    );
  }

  render() {
    const { todos } = this.props;
    if (todos.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Start by Creating a Post</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={todos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderPost}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#90a4ae",
    fontSize: 18,
    fontFamily: "Nunito"
  }
});

// const todos = [
//   {
//     name: "Shot",
//     color: "#a9d0b6",
//     tasks: [
//       ({ task: "Task", state: false },
//       { task: "Task", state: false },
//       { task: "Task", state: false })
//     ]
//   },
//   {
//     name: "Juice",
//     color: "#e9bbd1",
//     tasks: [
//       ({ task: "Task", state: false },
//       { task: "Task", state: false },
//       { task: "Task", state: false })
//     ]
//   },
//   {
//     name: "Mighty Juice",
//     color: "#eba65c",
//     tasks: [
//       ({ task: "Task", state: false },
//       { task: "Task", state: false },
//       { task: "Task", state: false })
//     ]
//   },
//   {
//     name: "Sandwich",
//     color: "#95c3e4",
//     tasks: [
//       ({ task: "Task", state: false },
//       { task: "Task", state: false },
//       { task: "Task", state: false })
//     ]
//   },
//   {
//     name: "Signature",
//     color: "#a390bc",
//     tasks: [
//       ({ task: "Task", state: false },
//       { task: "Task", state: false },
//       { task: "Task", state: false })
//     ]
//   },
//   {
//     name: "Coffee",
//     color: "#fef2a0",
//     tasks: [
//       ({ task: "Task", state: false },
//       { task: "Task", state: false },
//       { task: "Task", state: false })
//     ]
//   }
// ];
