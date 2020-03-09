import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import * as actions from "../../actions";
import styles from "./styles";
import  Button from "../Button/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxHeight: 0,
      controlsPadding: 0
    };
  }

  measureControls = e => {
    const { height } = e.nativeEvent.layout;
    const padding = height * 0.0; 
    this.setState({ controlsPadding: padding });
  };

  measureBox = e => {
    const { height } = e.nativeEvent.layout;
    this.setState({ boxHeight: height });
  };

  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.content}>
          {this.props.result ?  
          <Text numberOfLines={1} style={styles.result}>
          {this.props.result}
        </Text> : 
          <Text numberOfLines={1} style={styles.result}>
          {this.props.defaultVal}
        </Text> }
          <View style={styles.controls} onLayout={this.measureControls}>
    <View
      style={[
        styles.pretender,
        {
          height: this.state.boxHeight / 2 + this.state.controlsPadding
        }
      ]}
    />
    <View style={styles.row}>
    
      <Button
        style={[styles.box, styles.gray]}
        content="7"
        onPress={() => this.props.saveExpression("7")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="8"
        onPress={() => this.props.saveExpression("8")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="9"
        onPress={() => this.props.saveExpression("9")}
      />
      
      
    </View>
    <View style={styles.row}>
      <Button
        style={[styles.box, styles.gray]}
        content="4"
        onPress={() => this.props.saveExpression("4")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="5"
        onPress={() => this.props.saveExpression("5")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="6"
        onPress={() => this.props.saveExpression("6")}
      />
      
    </View>
    <View style={styles.row}>
      <Button
        style={[styles.box, styles.gray]}
        content="1"
        onPress={() => this.props.saveExpression("1")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="2"
        onPress={() => this.props.saveExpression("2")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="3"
        onPress={() => this.props.saveExpression("3")}
      />
      
    </View>
    <View style={styles.row}>
     <Button
        style={[styles.box, styles.gray]}
        content="C"
        onPress={() => this.props.clearResult()}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="0"
        onPress={() => this.props.saveExpression("0")}
      />
      <Button
        style={[styles.box, styles.gray]}
        content="."
        onPress={() => this.props.saveExpression(".")}
      />
      
    </View>
    <View style={{ width:'20%', height: '90%', position:'absolute', right: 20, top: 20}}>
      <Button
        style={[styles.box2, styles.gray]}
        content="/"
        onPress={() => this.props.saveExpression("/")}
      />
      <Button
        style={[styles.box2, styles.gray]}
        content="*"
        onPress={() => this.props.saveExpression("*")}
      />
      <Button
        style={[styles.box2, styles.gray]}
        content="-"
        onPress={() => this.props.saveExpression("-")}
      />
      <Button
        style={[styles.box2, styles.gray]}
        content="+"
        onPress={() => this.props.saveExpression("+")}
      />
      <Button
        style={[styles.box2, styles.gray]}
        content="="
        onPress={this.props.calcResult}
      />
      
    </View>
  </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ expression, result, defaultVal}) => ({ expression, result, defaultVal });

const mapDispatchToProps = dispatch => ({
  saveExpression: payload => dispatch(actions.saveExpression(payload)),
  calcResult: () => dispatch(actions.calcResult()),
  clearResult: () => dispatch(actions.clearResult()),
  togglePlusMinus: payload => dispatch(actions.togglePlusMinus(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
