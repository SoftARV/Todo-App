import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class PostItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: item.color }]}
      >
        <View style={styles.title}>
          <Text style={[styles.titleText]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70
  },
  title: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10
  },
  titleText: {
    color: "#000",
    fontSize: 22,
    fontFamily: "Nunito Regular"
  }
});
