import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './../pantallas/LoginScreen';
import Inicio from "../pantallas/Inicio";
import React, {useState} from "react";
import Mediciones from "../pantallas/Mediciones";
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainStack = () => {
    const [showHistoricos, setShowHistoricos] = useState(true);
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Inicio"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ paddingBottom: 48, backgroundColor: '#694fad' }}
                shifting={true}
                screenOptions={({ route }) => ({
                    headerShown: false,

                    tabBarIcon: ({ color, focused, size }) => {
                        if (route.name === "Inicio") {
                            return (focused ? <Feather name="sun" size={24} color="blue" /> : <Feather name="sun" size={24} color="black" />)
                        } else if (route.name === "Login") {
                            return (focused ? <AntDesign name="user" size={24} color="blue" /> : <AntDesign name="user" size={24} color="black" />)
                        }
                        else if (route.name === "Historicos") {
                            return (focused ? <MaterialIcons name="date-range" size={24} color="blue" /> : <MaterialIcons name="date-range" size={24} color="black" />)
                        }
                        return
                    }
                })}
            >

                <Tab.Screen
                    name="Inicio"
                    component={Inicio}
                />

                <Tab.Screen
                    name="Login"
                    component={LoginScreen}
                />

                {showHistoricos && (
                    <Tab.Screen
                        name="Historicos"
                        component={Mediciones}
                    />
                )}

            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default MainStack;