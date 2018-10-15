import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList
} from "react-native";

export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: { name: props.placeholder, color: "#fff", value: "" },
      isActive: false,
      animation: new Animated.Value(60)
    };
  }

  _toogle = () => {
    let initialValue = this.state.isActive
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.isActive
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      isActive: !this.state.isActive
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  };

  _setSelected = item => {
    console.log(item);
    this.setState({ selected: item });
    this.props.onValueChange(item);
    this._toogle();
  };

  _renderData({ item }) {
    const { button, title } = styles;
    return (
      <TouchableOpacity style={button} onPress={() => this._setSelected(item)}>
        <Text style={[title, { color: item.color }]}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  _keyExtractor = (item, index) => item.name;

  render() {
    const { data } = this.props;
    const { container, titleContainer, title, button, body } = styles;
    return (
      <Animated.View style={[container, { height: this.state.animation }]}>
        <View style={titleContainer} onLayout={this._setMinHeight.bind(this)}>
          <TouchableOpacity style={button} onPress={this._toogle}>
            <Text style={[title, { color: this.state.selected.color }]}>
              {this.state.selected.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={body} onLayout={this._setMaxHeight.bind(this)}>
          <FlatList
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderData.bind(this)}
          />
        </View>
      </Animated.View>
    );
  }
}

Select.defaultProps = {
  data: [],
  placeholder: "Select..."
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4d4d4d",
    overflow: "hidden"
  },
  titleContainer: {
    width: "100%"
  },
  title: {
    fontSize: 22,
    fontFamily: "Nunito"
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    height: 60
  },
  body: {
    height: 180
  }
});
