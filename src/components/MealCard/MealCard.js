import React from 'react';
import { ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './MealCard.style';

function MealCard({ meal, onSelect }) {
    return (
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
          <ImageBackground source={{ uri: meal.strMealThumb }} style={styles.imageBackground}>
            <View style={styles.body}>
              <Text style={styles.text}>{meal.strMeal}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

    );
  }



export default MealCard;
