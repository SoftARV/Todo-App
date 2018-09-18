import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import FabButton from "./components/FabButton";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <List />
        <FabButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  }
});
