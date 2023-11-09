import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Category from './pages/Category';
import Meal from './pages/Meal';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Categories'
                    component={Category}
                    options={{ headerTintColor: '#FFA500' }}
                />
                <Stack.Screen
                    name='Meals'
                    component={Meal}
                    options={ { headerTintColor: '#FFA500' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
