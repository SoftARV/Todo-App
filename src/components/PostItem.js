import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class PostItem extends React.Component {
  render() {
    const { color, name } = this.props.post;

    return (
      <TouchableOpacity
        onPress={this.props.onItemPress.bind(this)}
        style={[styles.container, { backgroundColor: color }]}
      >
        <View style={styles.title}>
          <Text style={[styles.titleText]}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

PostItem.defaultProps = {
  post: {
    name: "",
    color: "#fff"
  },
  onItemPress: () => {}
};

const styles = StyleSheet.create({
  container: {
    height: 60
  },
  title: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10
  },
  titleText: {
    color: "#000",
    fontSize: 22,
    fontFamily: "Nunito"
  }
});
