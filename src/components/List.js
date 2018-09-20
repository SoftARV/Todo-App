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
    color: "#a9d0b6",
    dark: "#6b8574"
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    dark: "#9c7c8b"
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    dark: "#9e6f3e"
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    dark: "#628196"
  },
  {
    name: "Signature",
    color: "#a390bc",
    dark: "#625670"
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    dark: "#b3aa70"
  }
];
