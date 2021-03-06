import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { removeTodo } from "../shared/actions/TodoActions";
import PostItem from "./PostItem";
import NavigationService from "../shared/NavigationService";
import { BAR_SIZE, APP_FONT, BODY_FONT_SIZE } from "../shared/styles/Variables";

class List extends React.Component {
  _keyExtractor = (item, index) => item.id;

  _renderPost(post) {
    return (
      <PostItem
        post={post.item}
        onItemPress={() => NavigationService.navigate("PostScreen", post.item)}
      />
    );
  }

  _renderHiddenItem(post) {
    const { id } = post.item;
    return (
      <View style={[styles.rowBack]}>
        <TouchableOpacity
          style={styles.deleteHiddenButton}
          onPress={() => this.props.removeTodo(id)}
        >
          <Icon
            size={deleteIcon.size}
            name={deleteIcon.name}
            type={deleteIcon.type}
            color={deleteIcon.color}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Start by Creating a Post</Text>
        </View>
      );
    }

    return (
      <SwipeListView
        useFlatList
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderPost}
        renderHiddenItem={this._renderHiddenItem.bind(this)}
        rightOpenValue={-100}
      />
    );
  }
}

const deleteIcon = {
  name: "trash-2",
  type: "feather",
  size: 30,
  color: "#fff"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#90a4ae",
    fontSize: BODY_FONT_SIZE,
    fontFamily: APP_FONT
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 15
  },
  deleteHiddenButton: {
    backgroundColor: "#e53935",
    width: 100,
    height: BAR_SIZE,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(
  null,
  { removeTodo }
)(List);
