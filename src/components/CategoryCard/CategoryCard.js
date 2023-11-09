import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './CategoryCard.style';

function CategoryCard({ category, onSelect }) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <View style={styles.body}>
                    <Text style={styles.text}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CategoryCard;
