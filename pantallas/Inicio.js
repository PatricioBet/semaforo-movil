import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, ScrollView, View, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { medidas, promedio } from '../Hooks/Conexion';


//Ejemplo de json


function mapValue(value, minOriginal, maxOriginal, minNuevo, maxNuevo) {
    return ((value - minOriginal) / (maxOriginal - minOriginal)) * (maxNuevo - minNuevo) + minNuevo;
}

const { width, height } = Dimensions.get('window');


export default function Inicio({ navigation }) {
    const [valorUv, setValorUv] = useState(0.0);
    const [showVal, setShowVal] = useState(true);

    const ejemplo = {
        "uv": 5.24,
    }

    let getUV = () => {
        //const datos = await promedio()
        const medida = mapValue(ejemplo.uv, 0, 15, 0, 1)

        data = {
            labels: ["uv"],
            data: [medida]
        };

        return data
    }

    useEffect(() => {
        const obtenerPromedio = async () => {
            const valorPromedio = await promedio();
            setValorUv(valorPromedio.uv);
            setShowVal(false);
        };
        if (showVal) {
            obtenerPromedio();
        }
    }, [showVal]);

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => {
            valor = valorUv
            if (valor >= 1 && valor < 3) {
                return `rgba(140, 189, 21, ${opacity})`;
            } else if (valor >= 3 && valor < 6) {
                return `rgba(249, 229, 18, ${opacity})`;
            } else if (valor >= 6 && valor < 8) {
                return `rgba(242, 147, 18, ${opacity})`;
            } else if (valor >= 8 && valor < 11) {
                return `rgba(226, 4, 32, ${opacity})`;
            } else if (valor >= 11) {
                return `rgba(134, 46, 156, ${opacity})`;
            } else {
                return `rgba(32, 160, 46, ${opacity})`;
            }
        },
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false


    };

    const renderRecomendaciones = () => {

        const [activeDotIndex, setActiveDotIndex] = useState(0)
        const _carousel = useRef()

        const _renderItem = ({ item, index }) => {
            return (
                <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 15 }}>
                    <Text style={styles.text}>{item.title}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 20, textAlign: 'center', color: 'white', margin: '3%' }}>{item.description}</Text>
                    </View>
                </View>
            );
        };

        let data = [
            { title: 'Gafas de sol', description: 'Ofrecen protección vital para los ojos contra los rayos UV.' }
        ];
        
        if (valorUv >= 3 && valorUv < 6) {
            data.push(
                { title: 'Sombrero', description: 'Use gorra o sombrero para cubrir rostro y cuello del sol.' },
                { title: 'Protector solar', description: 'Aplique protector solar de factor bajo cada dos horas para resguardar la piel.' },
            );
        } else if (valorUv >= 6 && valorUv < 8) {
            data.push(
                { title: 'Sombrero', description: 'Un sombrero o gorra es esencial para proteger rostro y cuello.' },
                { title: 'Ropa manga larga', description: 'Opte por prendas frescas y de manga larga para cubrir la mayor parte de la piel.' },
                { title: 'Protector solar', description: 'Utilice protector solar de factor bajo cada dos horas para mantener la piel protegida.' },
                { title: 'Cuide a los bebes', description: 'Los bebés requieren especial atención; evite su exposición directa al sol.' },
                { title: 'Sombra', description: 'Busque áreas con sombra para descansar y resguardarse del sol.' },
            );
        } else if (valorUv >= 8 && valorUv < 11) {
            data.push(
                { title: 'Sombrero', description: 'Un sombrero o gorra es esencial para proteger rostro y cuello.' },
                { title: 'Ropa manga larga', description: 'Use ropa ligera pero de manga larga para proteger la piel.' },
                { title: 'Protector solar', description: 'Aplique protector solar de factor alto cada dos horas para una protección adecuada.' },
                { title: 'Cuide a los niños', description: 'Evite la exposición solar excesiva en los niños, es crucial proteger su piel delicada.' },
                { title: 'Sombra', description: 'Encuentre áreas con sombra para minimizar la exposición directa al sol.' },
                { title: 'Evite el sol', description: 'Es aconsejable evitar la exposición al sol entre las 12h y 16h, cuando los rayos son más intensos.' },
            );
        } else if (valorUv >= 11) {
            data = [{ title: 'Evite el sol', description: 'Se recomienda evitar la exposición al sol durante todo el día debido a la extrema intensidad de los rayos UV.' }];
        }
        

        return (
            <View style={styles.recomendaciones}>
                <View >
                    <Carousel
                        ref={_carousel}
                        data={data}
                        renderItem={_renderItem} // Utiliza _renderItem aquí
                        sliderWidth={Dimensions.get('window').width * 0.9} // Quité las comillas ya que se espera un número
                        itemWidth={Dimensions.get('window').width * 0.7} // Quité las comillas ya que se espera un número
                        onSnapToItem={index => setActiveDotIndex(index)}
                    />
                </View>
            </View>
        );
    };

    const [componentesRenderizados, setComponentesRenderizados] = useState(null);

    useEffect(() => {
        const obtenerComponentesRenderizados = async () => {
            const data = await medidas()
            const filas = [];
            for (let i = 0; i < data.length; i += 2) {
                filas.push(data.slice(i, i + 2));
            }
            const componentes = (
                <View style={styles.columna}>
                    {filas.map((fila, index) => (
                        <View key={index} style={styles.secundario}>
                            {fila.map(item => (
                                <View key={item.id} style={styles.sec_interno}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const googleLink = `https://www.google.com/search?q=${item.latitud}%2C${item.longitud}`;
                                            Linking.openURL(googleLink);
                                        }}
                                    >
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginTop: "3%" }}>
                                            Modulo {item.id}
                                        </Text>
                                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fdfaff', alignSelf: 'center', marginVertical: "10%" }}>
                                            {item.uv}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            );

            setComponentesRenderizados(componentes);
        };

        obtenerComponentesRenderizados();
    }, []);


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
                        data={{
                            labels: ["uv"],
                            data: [mapValue(valorUv, 0, 15, 0, 1)]
                        }}
                        height={height / 3}
                        strokeWidth={height / 16}
                        radius={height / 9}
                        chartConfig={chartConfig}
                        hideLegend={true}
                        width={width * 0.9}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={styles.text}>{valorUv.toFixed(2)}</Text>
                </View>


                {renderRecomendaciones()}

                {componentesRenderizados}

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
    recomendaciones: {
        backgroundColor: 'rgba(0,0,80,0.3)',
        borderRadius: 15,
        height: 200, // Altura fija de los elementos internos
        width: '94%', // Ancho fijo para cada elemento
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1%',
        padding: '2%'
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