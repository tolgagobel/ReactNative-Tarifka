import React from 'react'
import { Image, View, Text, TouchableOpacity, Linking, Alert } from 'react-native'
import styles from './DetailCard.style'

function DetailCard({ meal }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.desc}>{meal.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={meal.strYoutube ?() => Linking.openURL(meal.strYoutube):Alert.alert("Bu tarifin videosu silinmiştir") }>
                <Text style={styles.button_title}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailCard;
