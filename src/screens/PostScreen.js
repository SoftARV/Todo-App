import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import { Icon } from "react-native-elements";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { connect } from "react-redux";
import TaskInput from "../components/TaskInput";
import { renameTodo, createTask } from "../shared/actions/TodoActions";
import NavigationService from "../shared/NavigationService";
import ToolBar from "../shared/ToolBar";
import FabButton from "../components/FabButton";
import DismissKeyboard from "../shared/DismissKeyboard";

class PostScreen extends React.Component {
  static navigationOptions = {
    title: "Post",
    header: null
  };

  constructor(props) {
    super(props);

    const { id } = this.props.navigation.state.params;
    const { name, color, tasks } = this.props.todos.find(
      item => item.id === id
    );
    this.state = {
      id,
      name,
      color,
      tasks,
      text: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.todos !== prevProps.todos) {
      const { id } = this.props.navigation.state.params;
      const { tasks } = this.props.todos.find(item => item.id === id);
      this.setState({ tasks });
    }
  }

  _updateTodoName = name => {
    this.setState({ name });
    this.props.renameTodo(this.state.id, name);
  };

  _createTask = () => {
    const { id, text } = this.state;
    this.props.createTask(id, text);

    this.setState({ text: "" });
  };

  _keyExtractor = (item, index) => item.id;

  _renderTaskList(tasks) {
    if (tasks.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Press the + Button to add a Task</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={tasks}
        keyExtractor={this._keyExtractor}
        renderItem={task => <TaskInput {...task.item} />}
      />
    );
  }

  render() {
    const { color, name, tasks, text } = this.state;
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
              style={styles.titleInput}
              placeholder={headerInput.placeholder}
              underlineColorAndroid={headerInput.underlineColorAndroid}
              placeholderTextColor={headerInput.placeholderTextColor}
            />
          </ToolBar>
          {this._renderTaskList(tasks)}
          <FabButton color={color}>
            <TextInput
              value={text}
              onChangeText={text => this.setState({ text })}
              style={styles.titleInput}
              placeholder={footerInput.placeholder}
              underlineColorAndroid={footerInput.underlineColorAndroid}
              placeholderTextColor={footerInput.placeholderTextColor}
            />
            <TouchableOpacity style={styles.button} onPress={this._createTask}>
              <Icon size={add.size} name={add.name} color={add.color} />
            </TouchableOpacity>
          </FabButton>
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

const footerInput = {
  placeholder: "New Task...",
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

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(
  mapStateToProps,
  { renameTodo, createTask }
)(PostScreen);
