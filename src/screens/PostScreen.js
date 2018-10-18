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
import { SwipeListView } from "react-native-swipe-list-view";
import TaskItem from "../components/TaskItem";
import {
  renameTodo,
  createTask,
  toggleTask,
  removeTask
} from "../shared/actions/TodoActions";
import NavigationService from "../shared/NavigationService";
import ToolBar from "../components/ToolBar";
import FabButton from "../components/FabButton";
import DismissKeyboard from "../shared/DismissKeyboard";
import {
  BAR_SIZE,
  APP_FONT,
  HEADLINE_FONT_SIZE,
  TITLE_FONT_SIZE,
  BODY_FONT_SIZE
} from "../shared/styles/Variables";

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
      const { name, tasks } = this.props.todos.find(item => item.id === id);
      this.setState({ name, tasks });
    }
  }

  _updateTodoName = name => {
    this.props.renameTodo(this.state.id, name);
  };

  _createTask = () => {
    const { id, text } = this.state;
    this.props.createTask(id, text);

    this.setState({ text: "" });
  };

  _removeTask(id) {
    this.props.removeTask(this.state.id, id);
  }

  _toggleTask = id => {
    this.props.toggleTask(this.state.id, id);
  };

  _keyExtractor = (item, index) => item.id;

  _renderTaskRow(task) {
    const { color } = this.state;
    return (
      <TaskItem
        style={{ backgroundColor: color }}
        callback={this._toggleTask}
        {...task.item}
      />
    );
  }

  _renderHiddenItem(task) {
    const { id } = task.item;
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={styles.deleteHiddenButton}
          onPress={this._removeTask.bind(this, id)}
        >
          <Icon
            size={deleteIcon.size}
            name={deleteIcon.name}
            type={deleteIcon.type}
            color={deleteIcon.color}
          />
        </TouchableOpacity>
      </View>
    );
  }

  _renderTaskList(tasks) {
    if (tasks.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Press the + Button to add a Task</Text>
        </View>
      );
    }

    return (
      <SwipeListView
        useFlatList
        data={tasks}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderTaskRow.bind(this)}
        rightOpenValue={-100}
        renderHiddenItem={this._renderHiddenItem.bind(this)}
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
              <Icon
                size={chevronLeftIcon.size}
                name={chevronLeftIcon.name}
                type={chevronLeftIcon.type}
                containerStyle={styles.icon}
              />
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
              style={styles.bottomInput}
              placeholder={footerInput.placeholder}
              underlineColorAndroid={footerInput.underlineColorAndroid}
              placeholderTextColor={footerInput.placeholderTextColor}
            />
            <TouchableOpacity style={styles.button} onPress={this._createTask}>
              <Icon
                size={plusIcon.size}
                name={plusIcon.name}
                type={plusIcon.type}
              />
            </TouchableOpacity>
          </FabButton>
        </View>
      </DismissKeyboard>
    );
  }
}

const chevronLeftIcon = {
  name: "chevron-left",
  type: "feather",
  size: 20
};

const plusIcon = {
  name: "plus",
  type: "feather",
  size: 23
};

const deleteIcon = {
  name: "trash-2",
  type: "feather",
  size: 20,
  color: "#fff"
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
    fontSize: BODY_FONT_SIZE,
    fontFamily: APP_FONT
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  titleInput: {
    flex: 1,
    fontSize: HEADLINE_FONT_SIZE,
    fontFamily: APP_FONT
  },
  bottomInput: {
    flex: 1,
    fontSize: TITLE_FONT_SIZE,
    fontFamily: APP_FONT
  },
  button: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 15
  },
  deleteHiddenButton: {
    backgroundColor: "#e53935",
    width: 100,
    height: BAR_SIZE,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    paddingRight: 10
  }
});

function mapStateToProps({ todo }) {
  const { todos } = todo;
  return { todos };
}

export default connect(
  mapStateToProps,
  { renameTodo, createTask, toggleTask, removeTask }
)(PostScreen);
