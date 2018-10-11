import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Icon } from "react-native-elements";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { connect } from "react-redux";
import TaskInput from "../components/TaskInput";
import { renameTodo } from "../shared/actions/TodoActions";
import NavigationService from "../shared/NavigationService";
import ToolBar from "../shared/ToolBar";
import DismissKeyboard from "../shared/DismissKeyboard";

class PostScreen extends React.Component {
  static navigationOptions = {
    title: "Post",
    header: null
  };

  constructor(props) {
    super(props);

    const { id, name, color, task } = this.props.navigation.state.params;
    this.state = {
      id,
      name,
      color,
      task
    };
  }

  _updateTodoName = name => {
    this.setState({ name });
    this.props.renameTodo(this.state.id, name);
  };

  _renderTask(tasks) {
    if (tasks.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Press the + Button to add a Task</Text>
        </View>
      );
    }

    return <TaskInput />;
  }

  render() {
    const { color, name, task } = this.state;
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
              value={name}
              onChangeText={this._updateTodoName}
              style={[styles.titleInput]}
              placeholder={headerInput.placeholder}
              underlineColorAndroid={headerInput.underlineColorAndroid}
              placeholderTextColor={headerInput.placeholderTextColor}
            />
            <TouchableOpacity style={styles.button}>
              <Icon size={add.size} name={add.name} color={add.color} />
            </TouchableOpacity>
          </ToolBar>
          {this._renderTask(task)}
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    color: "#0006",
    fontSize: 20,
    fontFamily: "Nunito"
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

export default connect(
  null,
  { renameTodo }
)(PostScreen);
