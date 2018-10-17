import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import {
  BAR_SIZE,
  APP_FONT,
  TITLE_FONT_SIZE
} from "../shared/styles/Variables";

export default class TaskItem extends React.Component {
  _renderIcon(isCompleted) {
    return isCompleted ? (
      <Icon
        name={checkSquareIcon.name}
        type={checkSquareIcon.type}
        size={checkSquareIcon.size}
        containerStyle={styles.icon}
      />
    ) : (
      <Icon
        name={squareIcon.name}
        type={squareIcon.type}
        size={squareIcon.size}
        containerStyle={styles.icon}
      />
    );
  }

  render() {
    const { id, text, isCompleted, style, callback } = this.props;
    return (
      <View style={style}>
        <TouchableOpacity
          onPress={callback.bind(this, id)}
          style={styles.container}
        >
          {this._renderIcon(isCompleted)}
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

const squareIcon = {
  name: "square",
  type: "feather",
  size: 20
};

const checkSquareIcon = {
  name: "check-square",
  type: "feather",
  size: 20
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: BAR_SIZE
  },
  task: {},
  taskText: {
    color: "#000",
    fontSize: TITLE_FONT_SIZE,
    fontFamily: APP_FONT
  },
  icon: {
    paddingRight: 10
  }
});
