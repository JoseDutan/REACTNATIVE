import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMPLO MARGIN</Text>
      <TextInput
      style={styles.caja}
      value={nombre}
      onChangeText={setNombre}
      placeholder='Ingrese su Nombre'
      />
      <TextInput
      style={styles.caja}
      value={apellido}
      onChangeText={setApellido}
      placeholder='Ingrese su Apellido'
      />
      <Button
      title='OK'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',//eje principal es el vertical
    justifyContent: 'center',//afecta al eje principal 
    alignItems: 'stretch',///afecta al eje restante en este caso horizontal
    paddingHorizontal: 10
  },
  caja:{
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  titulo:{
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 'bold',
  }
});
