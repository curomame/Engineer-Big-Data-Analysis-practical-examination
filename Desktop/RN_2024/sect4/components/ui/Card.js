import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    //ad
    elevation: 4,
    //ios
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});
