import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChuckNorris{
  url?: string;
  id?: string;
}


export default function App() {

  const [Gato, setGato] = useState<ChuckNorris | null>(null);


  const gerargato = useCallback(async () => {
    try {
      const response = await axios.get<ChuckNorris>(`https://api.thecatapi.com/v1/images/search`);
      setGato(response.data);
    } catch (error) {
      console.error('Erro ao buscar gato:', error);
    }
  }, []);

  useEffect(() => {
    gerargato();
  }, [gerargato]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feito por: Ulisses Damo</Text>
      <Image style={styles.image} source={{uri: Gato?.url}} />
      <TouchableOpacity style={styles.button} onPress={gerargato}>
        <Text style={styles.buttonText}>🐱 Gerar outro gato</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2C3E50',
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
