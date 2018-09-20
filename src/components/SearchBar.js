import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import ToolBar from "../shared/ToolBar";

export default class SearchBar extends React.Component {
  render() {
    return (
      <ToolBar>
        <Icon name={search.name} size={search.size} />
        <TextInput
          style={styles.searchInput}
          placeholder={searchBar.placeholder}
          underlineColorAndroid={searchBar.underlineColorAndroid}
        />
      </ToolBar>
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
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  searchInput: {
    height: 60,
    flex: 1,
    fontSize: 22,
    fontFamily: "Nunito"
  }
});
