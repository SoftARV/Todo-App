import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

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
    alignItems: "center"
  },
  button: {
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
