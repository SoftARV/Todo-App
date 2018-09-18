import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class PostItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={[styles.card, { backgroundColor: item.color }]}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={[styles.titleText]}>{item.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 2
  },
  header: {
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  title: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    paddingLeft: 10
  },
  titleText: {
    height: 50,
    fontSize: 20,
    fontWeight: "bold"
  }
});
