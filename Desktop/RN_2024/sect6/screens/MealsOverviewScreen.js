import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export default function MealsOverviewScreen({ navigation, route }) {
  // const route = useRoute();

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const pressHandler = () => {
    navigation.navigate("DeatilRecipe", { categoryId: catId });
  };

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id:item.id,
      title: item.title,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageUrl: item.imageUrl,
    };

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
