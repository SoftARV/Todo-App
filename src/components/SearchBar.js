import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Icon name={search.name} size={search.size} />
          <TextInput
            style={styles.searchInput}
            placeholder={searchBar.placeholder}
            underlineColorAndroid={searchBar.underlineColorAndroid}
          />
        </View>
      </View>
    );
  }
}

const search = {
  name: "search",
  size: 26
};

const searchBar = {
  placeholder: "Search Posts...",
  underlineColorAndroid: "transparent"
};

const styles = StyleSheet.create({
  root: {
    zIndex: 2,
    position: "absolute",
    width: Dimensions.get("screen").width,
    top: 0
  },
  container: {
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  searchInput: {
    flex: 1,
    fontSize: 20
  }
});
