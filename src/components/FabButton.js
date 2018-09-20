import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export default class FabButton extends React.Component {
  render() {
    const { onFabPressed } = this.props;

    return (
      <View style={styles.root}>
        <TouchableOpacity
          onPress={onFabPressed.bind(this)}
          style={styles.container}
        >
          <Text style={styles.text}>New Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

FabButton.defaultProps = {
  onFabPressed: () => {}
};

const add = {
  name: "add",
  size: 35,
  color: "#fff"
};

const styles = StyleSheet.create({
  root: {
    paddingBottom: getBottomSpace(),
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#c2185b"
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    flex: 1,
    height: 60
  },
  text: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Nunito"
  }
});
