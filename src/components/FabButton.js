import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

export default class FabButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>New Post</Text>
      </TouchableOpacity>
    );
  }
}

const add = {
  name: "add",
  size: 35,
  color: "#fff"
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    height: 60,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#c2185b"
  },
  text: {
    // marginLeft: 10,
    fontSize: 22,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Nunito"
  }
});
