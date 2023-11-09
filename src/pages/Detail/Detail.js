import React from 'react'
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import DetailCard from '../../components/DetailCard'

function Detail({ route }) {
    const  id  = route.params.idMeal;
    const { data } = useFetch(`${Config.API_URL}lookup.php?i=${id}`);
    console.log('====================================');
    console.log(data.meals);
    console.log('====================================');

    const render = ({item}) => <DetailCard meal={item}/>
    return (
        <SafeAreaView>
            <FlatList
            data={data.meals}
            renderItem={render}
            />
        </SafeAreaView>
    );
}

export default Detail;
