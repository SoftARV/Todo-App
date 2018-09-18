import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

export default class SearchBar extends React.Component {
  render() {
    return (
      <LinearGradient style={styles.root} colors={["#000", "transparent"]}>
        <View style={styles.container}>
          <Icon name={search.name} size={search.size} color={search.color} />
          <TextInput
            style={styles.searchInput}
            placeholder={searchBar.placeholder}
            placeholderTextColor={searchBar.placeholderTextColor}
            underlineColorAndroid={searchBar.underlineColorAndroid}
          />
        </View>
      </LinearGradient>
    );
  }
}

const search = {
  name: "search",
  size: 26,
  color: "#fff9"
};

const searchBar = {
  placeholder: "Search Posts...",
  placeholderTextColor: "#fff6",
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
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderColor: "#fff9",
    borderWidth: 2,
    borderRadius: 20
  },
  searchInput: {
    color: "#fff",
    flex: 1,
    fontSize: 16
  }
});
