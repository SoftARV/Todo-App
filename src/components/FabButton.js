import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default class FabButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon size={add.size} name={add.name} color={add.color} />
      </TouchableOpacity>
    );
  }
}

const add = {
  name: "add",
  size: 50,
  color: "#fff"
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#c2185b",
    borderRadius: 40
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});
