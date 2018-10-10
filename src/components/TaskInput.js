import React from "react";
import { View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";

export default class TaskInput extends React.Component {
  render() {
    return (
      <View style={styles.section}>
        <View style={styles.task}>
          <TextInput
            style={styles.taskInput}
            placeholder={taskInput.placeholder}
            underlineColorAndroid={taskInput.underlineColorAndroid}
            placeholderTextColor={taskInput.placeholderTextColor}
          />
        </View>
        <TouchableHighlight style={styles.button}>
          <Icon size={check.size} name={check.name} color={check.color} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Icon size={edit.size} name={edit.name} color={edit.color} />
        </TouchableHighlight>
      </View>
    );
  }
}

const check = {
  name: "check",
  size: 30,
  color: "#0006"
};

const edit = {
  name: "edit",
  size: 30,
  color: "#0006"
};

const taskInput = {
  placeholder: "Task...",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "rgba(0, 0, 0, 0.6)"
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  task: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10
  },
  taskInput: {
    minHeight: 50,
    fontSize: 18,
    fontFamily: "Nunito"
  }
});
