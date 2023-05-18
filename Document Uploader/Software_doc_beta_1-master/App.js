import DocumentServer2 from "./component/Pages/DocumentServer2"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'Sreact-native';
import HomeScreen from "./component/Pages/Home";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <Stack.Navigator initialRouteName= "Home">
            <Stack.Screen name= "Home" component ={HomeScreen}/>np
        </Stack.Navigator>
    )
}

