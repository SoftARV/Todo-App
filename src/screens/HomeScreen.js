import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import BottomDrawer from "rn-bottom-drawer";
import NewPostScreen from "./NewPostScreen";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import FabButton from "../components/FabButton";
import NavigationService from "../shared/NavigationService";
import DismissKeyboard from "../shared/DismissKeyboard";
import { MAIN_BAR_SIZE } from "../shared/Constants";

const CONTAINER_HEIGHT = 400;

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

    this._toogleModal = this._toogleModal.bind(this);
  }

  _toogleModal() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { todo } = this.props;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <List data={todo} />
          <SearchBar />
          <FabButton
            callback={this._toogleModal}
            text={"New Post"}
            color={"#c2185b"}
          />
          <Modal
            avoidKeyboard
            hideModalContentWhileAnimating
            style={styles.modalContainer}
            onBackButtonPress={this._toogleModal}
            onBackdropPress={this._toogleModal}
            isVisible={this.state.isVisible}
          >
            <NewPostScreen callback={this._toogleModal} />
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
    height: CONTAINER_HEIGHT
  }
});

function mapStateToProps({ todo, note }) {
  return { todo };
}

export default connect(mapStateToProps)(HomeScreen);
