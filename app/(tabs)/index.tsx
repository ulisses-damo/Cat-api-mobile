import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ChuckNorris{
  icon_url?: string;
  id?: string;
  value?: string;
}


export default function App() {

  const [Chuck, setChuck] = useState<ChuckNorris | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const translateText = useCallback(async (text: string): Promise<string> => {
    try {
      console.log('Tentando traduzir com LibreTranslate...');
      
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: 'en',
          target: 'pt',
          format: 'text'
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.translatedText) {
        console.log('Tradução bem-sucedida com LibreTranslate');
        return data.translatedText;
      } else {
        throw new Error('Resposta sem texto traduzido');
      }
      
    } catch (error) {
      console.error('Erro na tradução:', error);
      console.log('Retornando texto original em inglês');
      return text;
    }
  }, []);

  const gerarPiada = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<ChuckNorris>(`https://api.chucknorris.io/jokes/random`);
      const originalJoke = response.data;
      
      if (originalJoke.value) {
        const translatedText = await translateText(originalJoke.value);
        setChuck({
          ...originalJoke,
          value: translatedText
        });
      } else {
        setChuck(originalJoke);
      }
    } catch (error) {
      console.error('Erro ao buscar piada:', error);
    } finally {
      setIsLoading(false);
    }
  }, [translateText]);
  useEffect(() =>{
    gerarPiada()
  }, [gerarPiada])
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={{uri: Chuck?.icon_url}} />
      <Text style={styles.text}>
        {isLoading ? "Carregando e traduzindo..." : (Chuck?.value ?? "Erro ao carregar piada")}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152265',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
