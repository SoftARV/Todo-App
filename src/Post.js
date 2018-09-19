import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import NavigationService from "./shared/NavigationService";

export default class Post extends React.Component {
  static navigationOptions = {
    title: "Post",
    header: null
  };

  render() {
    const { color, dark, name } = this.props.navigation.state.params;

    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => NavigationService.goBack()}
            style={styles.button}
          >
            <Icon size={add.size} name={"chevron-left"} color={dark} />
          </TouchableOpacity>
          <View style={styles.title}>
            <TextInput
              style={[styles.titleInput]}
              placeholder={headerInput.placeholder}
              underlineColorAndroid={headerInput.underlineColorAndroid}
              placeholderTextColor={headerInput.placeholderTextColor}
              value={name}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Icon size={add.size} name={add.name} color={dark} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.section}>
            <View style={styles.task}>
              <TextInput
                style={styles.taskInput}
                placeholder={taskInput.placeholder}
                underlineColorAndroid={taskInput.underlineColorAndroid}
                placeholderTextColor={taskInput.placeholderTextColor}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Icon size={check.size} name={check.name} color={dark} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon size={edit.size} name={edit.name} color={dark} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const add = {
  name: "add",
  size: 40
};

const check = {
  name: "check",
  size: 30
};

const edit = {
  name: "edit",
  size: 30
};

const headerInput = {
  placeholder: "Title...",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "rgba(0, 0, 0, 0.6)"
};

const taskInput = {
  placeholder: "Task...",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "rgba(0, 0, 0, 0.6)"
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  section: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    paddingLeft: 10
  },
  titleInput: {
    height: 50,
    fontSize: 22,
    fontFamily: "Nunito"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 50
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
