import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { createTodo } from "../shared/actions/TodoActions";
import { createNote } from "../shared/actions/NoteActions";
import ToolBar from "../components/ToolBar";
import FabButton from "../components/FabButton";
import Select from "../components/Select";
import DismissKeyboard from "../shared/DismissKeyboard";
import { colorList, postsList } from "../shared/Constants";
import {
  BAR_SIZE,
  APP_FONT,
  HEADLINE_FONT_SIZE,
  BODY_FONT_SIZE
} from "../shared/styles/Variables";

class NewPostScreen extends React.Component {
  static navigationOptions = {
    title: "New Post",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "#fff",
      type: ""
    };

    this._colorSelected = this._colorSelected.bind(this);
    this._typeSelected = this._typeSelected.bind(this);
  }

  _colorSelected({ value }) {
    this.setState({ color: value });
  }

  _typeSelected({ value }) {
    this.setState({ type: value });
  }

  _createPost = () => {
    switch (this.state.type) {
      case "list":
        this.props.createTodo(this.state.name, this.state.color);
        this.props.callback();
        break;
      case "note":
        this.props.createNote(this.state.name, this.state.color);
        this.props.callback();
        break;
      default:
        // Show error
        break;
    }
  };

  _renderIconType() {
    switch (this.state.type) {
      case "list":
        return (
          <Icon
            name={listIcon.name}
            type={listIcon.type}
            size={listIcon.size}
            color={"#fff"}
            containerStyle={styles.icon}
          />
        );
      case "note":
        return (
          <Icon
            name={fileIcon.name}
            type={fileIcon.type}
            size={fileIcon.size}
            color={"#fff"}
            containerStyle={styles.icon}
          />
        );
      default:
        return (
          <Icon
            name={helpIcon.name}
            type={helpIcon.type}
            size={helpIcon.size}
            color={"#fff"}
            containerStyle={styles.icon}
          />
        );
    }
  }

  render() {
    const { color } = this.state;
    const { callback } = this.props;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <ToolBar color={"#c2185b"}>
            <TouchableOpacity onPress={callback} style={styles.button}>
              <Icon
                size={xIcon.size}
                name={xIcon.name}
                type={xIcon.type}
                color={xIcon.color}
                containerStyle={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.title}>New Post</Text>
          </ToolBar>
          <View style={styles.body}>
            <View style={[styles.inputContainer, { backgroundColor: color }]}>
              <Icon
                name={editIcon.name}
                type={editIcon.type}
                size={editIcon.size}
                containerStyle={styles.iconInput}
              />
              <TextInput
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
                style={[styles.titleInput]}
                placeholder={input.placeholder}
                underlineColorAndroid={input.underlineColorAndroid}
                placeholderTextColor={input.placeholderTextColor}
              />
            </View>
            <View>
              <Select
                data={colorList}
                onValueChange={this._colorSelected}
                placeholder={"Color..."}
                reactComponent={
                  <Icon
                    name={dropletIcon.name}
                    type={dropletIcon.type}
                    size={dropletIcon.size}
                    color={color}
                    containerStyle={styles.icon}
                  />
                }
              />
            </View>
            <View>
              <Select
                data={postsList}
                onValueChange={this._typeSelected}
                placeholder={"Type..."}
                reactComponent={this._renderIconType()}
              />
            </View>
          </View>
          <FabButton
            callback={this._createPost}
            text={"Create Post"}
            color={"#4cca51"}
          />
        </View>
      </DismissKeyboard>
    );
  }
}

const input = {
  placeholder: "Title...",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "rgba(0, 0, 0, 0.6)"
};

const xIcon = {
  name: "x",
  type: "feather",
  color: "#fff",
  size: 20
};

const editIcon = {
  name: "edit-2",
  type: "feather",
  size: 20
};

const dropletIcon = {
  name: "droplet",
  type: "feather",
  size: 20
};

const fileIcon = {
  name: "file-text",
  type: "feather",
  size: 20
};

const listIcon = {
  name: "list",
  type: "feather",
  size: 20
};

const helpIcon = {
  name: "help-circle",
  type: "feather",
  size: 20
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
    flex: 1,
    backgroundColor: "#1c1c1c"
  },
  title: {
    flex: 1,
    fontSize: HEADLINE_FONT_SIZE,
    fontFamily: APP_FONT,
    color: "#fff"
  },
  inputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: BAR_SIZE,
    backgroundColor: "#fff"
  },
  titleInput: {
    flex: 1,
    fontSize: BODY_FONT_SIZE,
    fontFamily: APP_FONT,
    color: "#000"
  },
  body: {
    flex: 1
  },
  button: {
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    marginRight: 10
  },
  iconInput: {
    marginRight: 5
  }
});

export default connect(
  null,
  { createTodo, createNote }
)(NewPostScreen);
