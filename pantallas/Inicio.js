import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const data = {
    labels: ["Swim"],
    data: [0.4]
};
const { width, height } = Dimensions.get('window');

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

export default function Inicio({ navigation }) {
    return (
        <LinearGradient
            colors={['#1fa0ff', '#12dafb', '#a7fdcc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
                <View style={{ position: 'relative', alignSelf:'center' }}>
                <ProgressChart
                    data={data}
                    height={height/3}
                    strokeWidth={height/15}
                    radius={height/10}
                    chartConfig={chartConfig}
                    hideLegend={true}
                    width={width}
                />
                <Text style={{ position: 'absolute', top: height/6-16, left: width/2-18, alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: "white" }}>6.25</Text>
                </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate('Login') }}>
                <Text style={styles.buttonText}>Log</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate('Historico') }}>
                <Text style={styles.buttonText}>Historico</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32, // Tamaño más grande
        fontWeight: 'bold', // Puede añadir negrita para más énfasis
        color: '#000', // Color diferente
        shadowColor: "#fff",

        marginBottom: 40, // Aumentar el espacio inferior
    },
    logo: {
        width: 120,
        height: 130,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    loginButton: {
        backgroundColor: 'blue',
        width: '100%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    signupText: {
        marginLeft: 5,
        color: 'blue',
    },
    gradient: {
        flex: 1,
    },
});