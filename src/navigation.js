import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './container/home';
import Detail from './container/Detail';
import MyBag from './container/myBag';
const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="false">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Detail' component={Detail} />
                <Stack.Screen name='MyBag' component={MyBag} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
