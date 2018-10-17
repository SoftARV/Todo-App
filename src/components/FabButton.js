import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import {
  MAIN_BAR_SIZE,
  APP_FONT,
  TITLE_FONT_SIZE
} from "../shared/styles/Variables";

export default class FabButton extends React.Component {
  _renderButton(text, callback) {
    if (!callback) {
      return null;
    }

    return (
      <TouchableOpacity onPress={callback.bind(this)} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { callback, text, color } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        {this._renderButton(text, callback)}
        {this.props.children}
      </View>
    );
  }
}

FabButton.defaultProps = {
  onFabPressed: () => {},
  text: "",
  color: "#ccc"
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: getBottomSpace(),
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: MAIN_BAR_SIZE
  },
  button: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    fontSize: TITLE_FONT_SIZE,
    color: "#fff",
    fontFamily: APP_FONT
  }
});
