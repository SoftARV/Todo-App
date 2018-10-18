import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import NewPostScreen from "./NewPostScreen";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import FabButton from "../components/FabButton";
import NavigationService from "../shared/NavigationService";
import DismissKeyboard from "../shared/DismissKeyboard";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ isVisible: false });
  }

  render() {
    const { todos } = this.props;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <List todos={todos} />
          <SearchBar />
          <FabButton
            callback={() => this.setState({ isVisible: true })}
            text={"New Post"}
            color={"#c2185b"}
          />
          <Modal
            avoidKeyboard
            style={styles.modalContainer}
            onBackButtonPress={this.closeModal}
            onBackdropPress={this.closeModal}
            isVisible={this.state.isVisible}
          >
            <NewPostScreen callback={this.closeModal} />
          </Modal>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  },
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
    height: 400
  }
});

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(mapStateToProps)(HomeScreen);
