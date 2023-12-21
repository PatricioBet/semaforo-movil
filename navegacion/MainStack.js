import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './../pantallas/LoginScreen';
import Inicio from "../pantallas/Inicio";
import React from "react";
import Mediciones from "../pantallas/Mediciones";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShow: false,
                }}
            >

                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                />

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />

                <Stack.Screen
                    name="Historico"
                    component={Mediciones}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;