import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [dolares, setDolares] = useState("Ingrese Monto")
  const [pesosMexicanos, setPesosMexicanos] = useState("")
  const [pesosColombianos, setPesosColombianos] = useState("")
  const [euros, setEuros] = useState("")


  const recuperarFloat = (idComponente) =>{
    let valorFloat = parseFloat(idComponente);
    return valorFloat
}

  const convertirPesosMexicanos = (valorDolares) => {
    const tasaCambio = 16.78;
    const valorConvertido = valorDolares * tasaCambio;
    return valorConvertido.toFixed(2);
}

  const convertirPesosColombianos = (valorDolares) => {
    const tasaCambio = 3886.64;
    const valorConvertido = valorDolares * tasaCambio;
    return valorConvertido.toFixed(2);
}

  const convertirEuros = (valorDolares) => {
    const tasaCambio = 0.93;
    const valorConvertido = valorDolares * tasaCambio;
    return valorConvertido.toFixed(2);
}

const ejecutarOperacion=(operar)=>{
  let valor1 = recuperarFloat(dolares);
  let resulatado = operar(valor1);
  return resulatado
}
  return (
    <View style={styles.container}>
      <Text>Convertidor</Text>
      <TextInput
        style={styles.cajaTexto}
        value={dolares}
        onChangeText={(dinero)=>{
          setDolares(dinero)
        }}
      />
      <Button
        title='Pesos Mexicanos'
        onPress={()=>{
          let resutadoPM = ejecutarOperacion(convertirPesosMexicanos);
          setPesosMexicanos(resutadoPM);
        }}
      />
      <Text>Pesos Mexicanos {pesosMexicanos}</Text>

      <Button
        title='Pesos Colombianos'
        onPress={()=>{
          let resultadoPC = ejecutarOperacion(convertirPesosColombianos);
          setPesosColombianos(resultadoPC);
        }}
      />
      <Text>Pesos Colombianos {pesosColombianos}</Text>

      <Button
        title='Euros'
        onPress={()=>{
          let resultadoE = ejecutarOperacion(convertirEuros);
          setEuros(resultadoE);
        }}
      />
      <Text>Euros {euros}</Text>
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
