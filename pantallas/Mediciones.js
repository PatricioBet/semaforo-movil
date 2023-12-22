import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions, StyleSheet } from 'react-native';

let datos = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
        {
            data: [
                11.2,
                10,
                4.56,
                8,
                3,
                11
            ]
        }
    ]
}


export default function Mediciones() {
    return (
        <LinearGradient
            colors={['#1fa0ff', '#12dafb', '#a7fdcc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
            <LineChart
                data={datos}
                width={Dimensions.get("window").width * .9}
                height={Dimensions.get("window").width * 0.6}
                yAxisSuffix=" uv"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 15
                }}
            />
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
        alignItems: 'center',
        justifyContent: 'center'
    },
});