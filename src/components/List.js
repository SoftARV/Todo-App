import React from "react";
import { StyleSheet, FlatList } from "react-native";
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
    return (
      <FlatList
        style={styles.container}
        data={posts}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderPost}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

const posts = [
  {
    name: "Shot",
    color: "#a9d0b6"
  },
  {
    name: "Juice",
    color: "#e9bbd1"
  },
  {
    name: "Mighty Juice",
    color: "#eba65c"
  },
  {
    name: "Sandwich",
    color: "#95c3e4"
  },
  {
    name: "Signature",
    color: "#a390bc"
  },
  {
    name: "Coffee",
    color: "#fef2a0"
  }
];
