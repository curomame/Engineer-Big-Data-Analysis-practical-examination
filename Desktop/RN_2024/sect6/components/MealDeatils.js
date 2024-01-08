import { View, Text, StyleSheet } from "react-native";

export default function MealDeatils({duration, complexity, affordability,style,textStyle}) {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  innerConatiner: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    //ios
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
