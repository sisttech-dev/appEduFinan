import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    HomeNavBar,
    PerfilNavBar,
    RodaNavBar
} from './StackNavigation'

const Tab = createBottomTabNavigator()

export default function ShowBottomTabs(){
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name ='HomeTab' component={HomeNavBar}/> 
            <Tab.Screen name ='RodaTab' component={RodaNavBar}/> 
            <Tab.Screen name ='PerfilTab' component={PerfilNavBar}/> 
        </Tab.Navigator>
        )
}