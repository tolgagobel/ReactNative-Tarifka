import React from 'react'
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';

function Meal({ navigation, route }) {
    const strCategory = route.params.strCategory;
    const { data } = useFetch(`${Config.API_URL}filter.php?c=${strCategory}`);

    const handleSelect = idMeal => {
        navigation.navigate('Detail',{idMeal});
    }

    const renderMeal = ({ item }) => (
        <MealCard meal={item} onSelect={() => handleSelect(item.idMeal)} />
      );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500',
    },
});
export default Meal;
