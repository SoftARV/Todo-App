import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Icon } from "react-native-elements";

export default class Post extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={[styles.card, { backgroundColor: item.color }]}>
        <View style={styles.header}>
          <View style={styles.title}>
            <TextInput
              style={[styles.titleInput]}
              placeholder={headerInput.placeholder}
              underlineColorAndroid={headerInput.underlineColorAndroid}
              placeholderTextColor={headerInput.placeholderTextColor}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Icon size={add.size} name={add.name} color={item.dark} />
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
              <Icon size={check.size} name={check.name} color={item.dark} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon size={edit.size} name={edit.name} color={item.dark} />
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
  card: {
    minHeight: 300,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 10
  },
  header: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  section: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10
  },
  titleInput: {
    height: 50,
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
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
    fontSize: 16
  }
});
