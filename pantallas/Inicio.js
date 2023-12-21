import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Inicio({navigation}) {
    return (
        <LinearGradient
            colors={['#1fa0ff', '#12dafb', '#a7fdcc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
            <TouchableOpacity style={styles.loginButton} onPress={()=>{navigation.navigate('Login')}}>
              <Text style={styles.buttonText}>Log</Text>
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