import React from 'react'
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';

function Meal({ route }) {
    const strCategory = route.params.strCategory;
    const { data } = useFetch(`${Config.API_URL}filter.php?c=${strCategory}`);


    console.log('====================================');
    console.log(`${Config.API_URL}filter.php?c=`+strCategory);
    console.log('====================================');

    const renderMeal = ({ item }) => (
        <MealCard meal={item} />
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
        flex:1,
        backgroundColor: '#FFA500',
    },
});
export default Meal;
