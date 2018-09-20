import React from "react";
import { View, StyleSheet } from "react-native";
import StatusBarSizeIOS from "react-native-status-bar-size";

export default class ToolBar extends React.Component {
  state = { currentStatusBarHeight: StatusBarSizeIOS.currentHeight };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBarSizeIOS.addEventListener(
      "didChange",
      this._handleStatusBarSizeDidChange
    );
  }

  componentWillUnmount() {
    StatusBarSizeIOS.removeEventListener(
      "didChange",
      this._handleStatusBarSizeDidChange
    );
  }

  _handleStatusBarSizeDidChange(currentStatusBarHeight) {
    this.setState({ currentStatusBarHeight });
  }

  render() {
    const { color } = this.props;

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            paddingTop: this.state.currentStatusBarHeight
          }
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}

ToolBar.defaultProps = {
  color: "#fff"
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "center"
  }
});