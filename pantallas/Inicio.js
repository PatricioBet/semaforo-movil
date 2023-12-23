import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, ScrollView, View, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

//Ejemplo de json
const ejemplo = {
    "uv": 5.24,
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
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={{ paddingTop: StatusBar.currentHeight * 2 || 0, marginLeft: '4%', marginBottom: '1%', width: '92%', flexDirection: '' }}>
                    <Text style={{ fontSize: 25, fontWeight: '900', color: '#e6ebe0' }}>Indice UV</Text>
                    <Text style={{ fontSize: 25, fontWeight: '500', color: '#fdfaff', alignSelf: 'center' }}>Loja</Text>
                </View>
                <View style={styles.inicial}>
                    <ProgressChart
                        data={getUV()}
                        height={height / 3}
                        strokeWidth={height / 16}
                        radius={height / 9}
                        chartConfig={chartConfig}
                        hideLegend={true}
                        width={width * 0.9}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={styles.text}>{ejemplo.uv.toFixed(2)}</Text>
                </View>
                <View style={styles.columna}>
                    <View style={styles.secundario}>
                        <View style={styles.sec_interno}>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/search?q=-4.004822775285573%2C+-79.22642055646396') }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>Modulo 1</Text>
                                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>6.23</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sec_interno}>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/search?q=-4.004822775285573%2C+-79.22642055646396') }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>Modulo 2</Text>

                                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>5.27</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.secundario}>
                        <View style={styles.sec_interno}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/search?q=-4.004822775285573%2C+-79.22642055646396') }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>Modulo 3</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>8.55</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.sec_interno}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/search?q=-4.004822775285573%2C+-79.22642055646396') }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>Modulo 4</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>9.32</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secundario}>
                        <View style={styles.sec_interno}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/search?q=-4.004822775285573%2C+-79.22642055646396') }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>Modulo 5</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>4.02</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.sec_interno}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/search?q=-4.004822775285573%2C+-79.22642055646396') }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>Modulo 6</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>6.15</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        alignItems: 'center',
        flex: 1
    },
    inicial: {
        position: 'relative',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(20,80,180,0.4)',
        borderRadius: 20,
        margin: '2%',
        width: '95%',
    },
    columna: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%', // Ocupar todo el ancho disponible
        paddingHorizontal: 10, // Agregar espacios laterales
        marginTop: 10,
    },
    secundario: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%', // Ocupar todo el ancho disponible
        marginBottom: 10, // Espacio inferior entre filas
    },
    sec_interno: {
        backgroundColor: 'rgba(0,0,80,0.3)',
        borderRadius: 15,
        height: 140, // Altura fija de los elementos internos
        width: '48%', // Ancho fijo para cada elemento
        marginHorizontal: '1%', // Espacio horizontal entre elementos
    },
    text: {
        position: 'absolute',
        fontSize: 30,
        fontWeight: '900',
        color: "white",
        alignSelf: 'center'
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },

});