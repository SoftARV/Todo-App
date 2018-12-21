import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
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

  _renderDrawer = () => {
    return (
      <View style={styles.modalContainer}>
        <NewPostScreen />
      </View>
    );
  };

  render() {
    const { todo } = this.props;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <List data={todo} />

          <BottomDrawer
            renderContent={this._renderDrawer}
            containerHeight={CONTAINER_HEIGHT}
            startUp={false}
            downDisplay={MAIN_BAR_SIZE}
            backgroundColor={"#1c1c1c"}
          />
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
    height: 400
  }
});

function mapStateToProps({ todo, note }) {
  return { todo };
}

export default connect(mapStateToProps)(HomeScreen);
