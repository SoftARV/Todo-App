import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { Icon } from "react-native-elements";

export default class TaskInput extends React.Component {
  render() {
    const { text, isCompleted } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.task}>
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
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Icon
            size={deleteIcon.size}
            name={deleteIcon.name}
            color={deleteIcon.color}
          />
        </TouchableHighlight>
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
    paddingRight: 10,
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
  taskText: {
    color: "#000",
    minHeight: 50,
    fontSize: 20,
    fontFamily: "Nunito"
  }
});
