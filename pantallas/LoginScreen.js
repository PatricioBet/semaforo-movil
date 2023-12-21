import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      console.log('Iniciar sesión con:', email, password);
      Alert.alert(email, password);
    };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'+1}
      >
        <LinearGradient
          colors={['#1fa0ff', '#12dafb', '#a7fdcc']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.inner}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <Image source={require('./../img/UNL3.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Correo"
                onChangeText={setEmail}
                value={email}
              />
            </View>
  
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
            </View>
  
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
  
            <View style={styles.signupContainer}>
              <Text>¿No tienes cuenta?</Text>
              <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com') }}>
                <Text style={styles.signupText}>Regístrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  };

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
  
export default LoginScreen;