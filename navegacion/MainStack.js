import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from './../pantallas/LoginScreen';
import Inicio from "../pantallas/Inicio";
import React from "react";
import Mediciones from "../pantallas/Mediciones";
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{
                        tabBarLabel: 'Inicio',
                        tabBarIcon: ({color, size})=>(
                            <Feather name="sun" size={24} color="black" />
                        ),
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        tabBarLabel: 'Log in',
                        tabBarIcon: ({color, size})=>(
                            <AntDesign name="user" size={24} color="black" />
                        ),
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name="Historico"
                    component={Mediciones}
                    options={{
                        tabBarLabel: 'Historicos',
                        tabBarIcon: ({color, size})=>(
                            <MaterialIcons name="date-range" size={24} color="black" />
                        ),
                        headerShown: false,
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;