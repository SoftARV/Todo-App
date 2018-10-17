import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  BAR_SIZE,
  APP_FONT,
  TITLE_FONT_SIZE
} from "../shared/styles/Variables";

export default class TaskItem extends React.Component {
  render() {
    const { id, text, isCompleted, style, callback } = this.props;
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity onPress={callback.bind(this, id)} style={styles.task}>
          <Text
            style={[
              styles.taskText,
              {
                textDecorationLine: isCompleted ? "line-through" : "none",
                textDecorationStyle: "solid"
              }
            ]}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const deleteIcon = {
  name: "delete",
  size: 30,
  color: "#0006"
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flexDirection: "row",
    height: BAR_SIZE
  },
  task: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    borderBottomWidth: 0.5,
    borderColor: "#0000004c"
  },
  taskText: {
    color: "#000",
    fontSize: TITLE_FONT_SIZE,
    fontFamily: APP_FONT
  }
});
