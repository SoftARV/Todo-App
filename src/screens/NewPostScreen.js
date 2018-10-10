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
import NavigationService from "../shared/NavigationService";
import ToolBar from "../shared/ToolBar";
import FabButton from "../components/FabButton";
import Select from "../shared/Select";
import DismissKeyboard from "../shared/DismissKeyboard";
import { colorList } from "../shared/Constants";

class NewPostScreen extends React.Component {
  static navigationOptions = {
    title: "New Post",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "#fff"
    };
  }

  _colorSelected({ value }) {
    this.setState({ color: value });
  }

  _createPost = () => {
    this.props.createTodo(this.state.name, this.state.color);
    NavigationService.goBack();
  };

  render() {
    const { color } = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <ToolBar color={"#c2185b"}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={styles.button}
            >
              <Icon size={40} name={"chevron-left"} color={"#fff"} />
            </TouchableOpacity>
            <Text style={styles.title}>New Post</Text>
          </ToolBar>
          <View style={styles.body}>
            <View style={[styles.inputContainer, { backgroundColor: color }]}>
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
                onValueChange={this._colorSelected.bind(this)}
                placeholder={"Color..."}
              />
            </View>
          </View>
          <FabButton
            onFabPressed={this._createPost}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontFamily: "Nunito",
    color: "#fff"
  },
  inputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    height: 60,
    backgroundColor: "#fff"
  },
  titleInput: {
    flex: 1,
    fontSize: 22,
    fontFamily: "Nunito",
    color: "#000"
  },
  body: {
    flex: 1
  },
  button: {
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(
  null,
  { createTodo }
)(NewPostScreen);
