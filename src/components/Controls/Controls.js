// import React from "react";
// import { View, Text } from "react-native";

// import { Box } from "../Box/";
// import styles from "./styles";

// const Controls = props => (
//   <View style={styles.controls} onLayout={props.measureControls}>
//     <View
//       style={[
//         styles.pretender,
//         {
//           height: props.boxHeight / 2 + props.controlsPadding
//         }
//       ]}
//     />
//     <View style={styles.row}>
//       <Box
//         style={[styles.box, styles.gray]}
//         content="7"
//         onPress={() => props.saveExpression("7")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="8"
//         onPress={() => props.saveExpression("8")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="9"
//         onPress={() => props.saveExpression("9")}
//       />
      
      
//     </View>
//     <View style={styles.row}>
//       <Box
//         style={[styles.box, styles.gray]}
//         content="4"
//         onPress={() => props.saveExpression("4")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="5"
//         onPress={() => props.saveExpression("5")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="6"
//         onPress={() => props.saveExpression("6")}
//       />
      
//     </View>
//     <View style={styles.row}>
//       <Box
//         style={[styles.box, styles.gray]}
//         content="1"
//         onPress={() => props.saveExpression("1")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="2"
//         onPress={() => props.saveExpression("2")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="3"
//         onPress={() => props.saveExpression("3")}
//       />
      
//     </View>
//     <View style={styles.row}>
//      <Box
//         style={[styles.box, styles.gray]}
//         content="C"
//         onPress={() => props.clearResult()}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="0"
//         onPress={() => props.saveExpression("0")}
//       />
//       <Box
//         style={[styles.box, styles.gray]}
//         content="."
//         onPress={() => props.saveExpression(".")}
//       />
      
//     </View>
//     <View style={{ width:'20%', height: '90%', position:'absolute', right: 20, top: 20}}>
//       <Box
//         style={[styles.box2, styles.gray]}
//         content="/"
//         onPress={() => props.saveExpression("/")}
//       />
//       <Box
//         style={[styles.box2, styles.gray]}
//         content="*"
//         onPress={() => props.saveExpression("*")}
//       />
//       <Box
//         style={[styles.box2, styles.gray]}
//         content="-"
//         onPress={() => props.saveExpression("-")}
//       />
//       <Box
//         style={[styles.box2, styles.gray]}
//         content="+"
//         onPress={() => props.saveExpression("+")}
//       />
//       <Box
//         style={[styles.box2, styles.gray]}
//         content="="
//         onPress={props.calcResult}
//       />
      
//     </View>
//   </View>
// );

// export default Controls;
