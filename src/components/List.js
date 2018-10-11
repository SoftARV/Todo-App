import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import PostItem from "./PostItem";
import NavigationService from "../shared/NavigationService";

export default class List extends React.Component {
  _keyExtractor = (item, index) => item.id;

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
    fontSize: 20,
    fontFamily: "Nunito"
  }
});
