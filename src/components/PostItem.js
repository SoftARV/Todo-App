import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import {
  BAR_SIZE,
  APP_FONT,
  BUTTON_FONT_SIZE
} from "../shared/styles/Variables";

export default class PostItem extends React.Component {
  numberOfTasks(tasks) {
    // TODO: only count the ones to be completed
    return tasks.length;
  }

  render() {
    const { color, name, tasks } = this.props.post;

    return (
      <View style={{ backgroundColor: color }}>
        <TouchableOpacity
          onPress={this.props.onItemPress.bind(this)}
          style={styles.container}
        >
          <View style={styles.titleContainer}>
            <Icon
              name={listIcon.name}
              type={listIcon.type}
              size={listIcon.size}
              containerStyle={styles.icon}
            />
            <Text style={styles.title}>{name}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Icon
              name={checkCircleIcon.name}
              type={checkCircleIcon.type}
              size={checkCircleIcon.size}
              containerStyle={styles.icon}
            />
            <Text style={styles.tasksText}>{this.numberOfTasks(tasks)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const listIcon = {
  name: "list",
  type: "feather",
  size: 20
};

const checkCircleIcon = {
  name: "check-circle",
  type: "feather",
  size: 20
};

PostItem.defaultProps = {
  post: {
    name: "",
    color: "#fff"
  },
  onItemPress: () => {}
};

const styles = StyleSheet.create({
  container: {
    height: BAR_SIZE,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    color: "#000",
    fontSize: BUTTON_FONT_SIZE,
    fontFamily: APP_FONT
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    marginRight: 10
  },
  tasksText: {
    fontSize: BUTTON_FONT_SIZE,
    fontFamily: APP_FONT
  }
});
