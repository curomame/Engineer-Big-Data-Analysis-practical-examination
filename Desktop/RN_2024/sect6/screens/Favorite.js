import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealsList/MealList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function Favorite() {
  const favoriteMealIds = useSelector((state) => {
    return state.favoriteMeals.ids;
  });

  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View>
        <Text style={{ color: "white" }}>No Meals</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

const styles = StyleSheet.create({});
