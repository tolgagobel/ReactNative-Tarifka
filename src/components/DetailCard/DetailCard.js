import React from 'react'
import { Image, View, Text } from 'react-native'

function DetailCard({ meal }) {
    return (
        <View>
            <Image />
            <Text>{meal.strMeal}</Text>
        </View>
    )
}

export default DetailCard;
