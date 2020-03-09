import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";



const ButtonControls = ({ content, style, onPress, onLayout }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress} onLayout={onLayout ? onLayout : null}>
      <Text style={styles.text}>{content}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 30,
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: "#cacaca",
    textShadowRadius: 1
  },
  box: {
    backgroundColor: "#333E00"
  }
})

export default React.memo(ButtonControls)
