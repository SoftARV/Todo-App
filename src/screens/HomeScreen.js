import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import FabButton from "../components/FabButton";
import NavigationService from "../shared/NavigationService";
import DismissKeyboard from "../shared/DismissKeyboard";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <SearchBar />
          <List />
          <FabButton
            onFabPressed={() => NavigationService.navigate("NewPostScreen")}
            text={"New Post"}
            color={"#c2185b"}
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
  }
});
