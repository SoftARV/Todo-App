import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export default class FabButton extends React.Component {
  render() {
    const { onFabPressed, text, color } = this.props;

    return (
      <View style={[styles.root, { backgroundColor: color }]}>
        <TouchableOpacity
          onPress={onFabPressed.bind(this)}
          style={styles.container}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
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
  root: {
    paddingBottom: getBottomSpace(),
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
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
