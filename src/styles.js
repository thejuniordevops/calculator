import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff"
  },
  content: {
    flex: 1
  },
  result: {
    color: "#000000",
    fontSize: 72,
    fontWeight: "300",
    padding: Platform.OS === "ios" ? 50 : 4,
    alignSelf: "flex-end",
    
  }, 
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
    justifyContent: "center",
    alignItems: "center",
    width: "22%",
    margin: "1%",
    borderRadius:10
  },
  box2: {
    fontSize:50,
    alignItems: "center",
    width: "100%",
    height: "15%",
    marginBottom: "42%",
    borderRadius:10
  },
  controls: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "5%"
  },
  pretender: {
    backgroundColor: "#3CB6EE",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative"
  },
  gray: {
    backgroundColor: "#C2C5CC"
  },  
});

export default styles;
