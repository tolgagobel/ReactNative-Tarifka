import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard';

function Category({navigation}) {
    const {data} = useFetch(`${Config.API_URL}categories.php`);

    const handleSelect = strCategory => {
        navigation.navigate('Meals', {strCategory});
    }

    const renderCategory = ({ item }) => (
        <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)} />
    )

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={data.categories}
        renderItem={renderCategory}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFA500',
    },
  });

export default Category;
