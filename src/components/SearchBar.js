import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import ToolBar from "./ToolBar";
import {
  APP_FONT,
  TITLE_FONT_SIZE,
  BAR_SIZE
} from "../shared/styles/Variables";

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={searchIcon.name}
          type={searchIcon.type}
          size={searchIcon.size}
          containerStyle={styles.icon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={searchBar.placeholder}
          underlineColorAndroid={searchBar.underlineColorAndroid}
        />
      </View>
    );
  }
}

const searchIcon = {
  name: "search",
  type: "feather",
  size: 20
};

const searchBar = {
  placeholder: "Search...",
  underlineColorAndroid: "transparent"
};

const styles = StyleSheet.create({
  container: {
    height: BAR_SIZE,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  searchInput: {
    flex: 1,
    fontSize: TITLE_FONT_SIZE,
    fontFamily: APP_FONT
  },
  icon: {
    marginRight: 10
  }
});
