import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem';

export default function MealList({items}) {
  
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

    return <MealItem {...mealItemProps}/>;
  };
  
  return (
    <View style={styles.container}>
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
