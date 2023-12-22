import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

//Ejemplo de json
const ejemplo = {
    "uv": 11,
}

function mapValue(value, minOriginal, maxOriginal, minNuevo, maxNuevo) {
    return ((value - minOriginal) / (maxOriginal - minOriginal)) * (maxNuevo - minNuevo) + minNuevo;
}

const { width, height } = Dimensions.get('window');


export default function Inicio({ navigation }) {

    let getUV = () => {
        medida = mapValue(ejemplo.uv, 0, 15, 0, 1)
        data = {
            labels: ["uv"],
            data: [medida]
        };
        return data
    }




    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => {
            valor = getUV().data
            if (valor >= 0.0666 && valor < 0.2) {
                return `rgba(140, 189, 21, ${opacity})`;
            } else if (valor >= 0.2 && valor < 0.4) {
                return `rgba(249, 229, 18, ${opacity})`;
            } else if (valor >= 0.4 && valor < 0.5333) {
                return `rgba(242, 147, 18, ${opacity})`;
            } else if (valor >= 0.5333 && valor < 0.7333) {
                return `rgba(226, 4, 32, ${opacity})`;
            } else if (valor >= 0.7333) {
                return `rgba(134, 46, 156, ${opacity})`;
            } else {
                return `rgba(32, 160, 46, ${opacity})`;
            }
        },
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };

    return (
        <LinearGradient
            colors={['#1fa0ff', '#12dafb', '#a7fdcc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
            <View style={{ position: 'relative', alignSelf: 'center' }}>
                <ProgressChart
                    data={getUV()}
                    height={height / 3}
                    strokeWidth={height / 15}
                    radius={height / 10}
                    chartConfig={chartConfig}
                    hideLegend={true}
                    width={width}
                />
                <Text style={{ position: 'absolute', top: height/6 - 16, left: width /2-20, alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: "white" }}>{ejemplo.uv.toFixed(2)}</Text>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
});