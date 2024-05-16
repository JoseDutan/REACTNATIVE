import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react'

export default function App() {
  const [nombre, setNombre] = useState("Ingrese su Nombre")
  const[apellido, setApellido] = useState("Ingrese su Apellido")
  const[nombreCompleto, setnombreCompleto] = useState("")
  return (
    <View style={styles.container}>
      <Text>Ejemplo TextImput</Text>
      <Text>Hola {nombreCompleto}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={nombre}
        onChangeText={(txt)=>{
          setNombre(txt);
        }}
      />
      <TextInput
      style={styles.cajaTexto}
        value={apellido}
        onChangeText={(txt)=>{
          setApellido(txt);
        }}
      />
      <Button
        title='Saludar'
        onPress={()=>{
          let completo = nombre +" "+ apellido;
          setnombreCompleto(completo);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10
  }
});
