import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { getBottomSpace } from "react-native-iphone-x-helper";
import NavigationService from "../shared/NavigationService";
import ToolBar from "../shared/ToolBar";
import TaskInput from "../components/TaskInput";
import DismissKeyboard from "../shared/DismissKeyboard";

export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: "Post",
    header: null
  };

  render() {
    const { color, name } = this.props.navigation.state.params;

    return (
      <DismissKeyboard>
        <View style={[styles.container, { backgroundColor: color }]}>
          <ToolBar color={color}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={styles.button}
            >
              <Icon size={back.size} name={back.name} color={back.color} />
            </TouchableOpacity>
            <TextInput
              style={[styles.titleInput]}
              placeholder={headerInput.placeholder}
              underlineColorAndroid={headerInput.underlineColorAndroid}
              placeholderTextColor={headerInput.placeholderTextColor}
              value={name}
            />
            <TouchableOpacity style={styles.button}>
              <Icon size={add.size} name={add.name} color={add.color} />
            </TouchableOpacity>
          </ToolBar>
          <View>
            <TaskInput />
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}

const back = {
  name: "chevron-left",
  size: 40,
  color: "#0006"
};

const add = {
  name: "add",
  size: 40,
  color: "#0006"
};

const headerInput = {
  placeholder: "Title...",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "rgba(0, 0, 0, 0.6)"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: getBottomSpace()
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  titleInput: {
    flex: 1,
    height: 60,
    fontSize: 22,
    fontFamily: "Nunito"
  },
  button: {
    justifyContent: "center",
    alignItems: "center"
  }
});
