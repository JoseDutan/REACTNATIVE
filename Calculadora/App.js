import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react'

export default function App() {
  const [num1, setNum1] = useState("Ingrese un Numero")
  const[num2, setNum2] = useState("Ingrese un Numero")
  const[resultadoS, setResultadoS] = useState("")
  const[resultadoR, setResultadoR] = useState("")
  const[resultadoM, setResultadoM] = useState("")

  const recuperarEntero =(idComponente)=>{
    let valorEntero = parseInt(idComponente);
    return valorEntero;
}
  const sumar =(sum1, sum2)=>{
    let resultado = sum1+sum2;
    return resultado;
}
  const restar = (res1, res2) =>{
    let resultado = res1-res2;
    return resultado;
}
const multiplicar = (mun1, mun2) =>{
  let resultado = mun1*mun2;
  return resultado;
}
  const ejecutarOperacion=(operar)=>{
    let valor1 = recuperarEntero(num1);
    let valor2 = recuperarEntero(num2);
    let resulatado = operar(valor1,valor2);
    return resulatado
}
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <TextInput
      style={styles.cajaTexto}
      value={num1}
      onChangeText={(num)=>{
        setNum1(num);
      }}
      />
      <TextInput
      style={styles.cajaTexto}
      value={num2}
      onChangeText={(num)=>{
        setNum2(num);
      }}
      />
      <Button
        title='SUMAR'
        onPress={()=>{
          let resultadoSuma = ejecutarOperacion(sumar);
          setResultadoS(resultadoSuma);
        }}
      />
      <Text>Resultado Suma {resultadoS}</Text>

      <Button
        title='RESTAR'
        onPress={()=>{
          let resultadoResta = ejecutarOperacion(restar);
          setResultadoR(resultadoResta);
        }}
      />
      <Text>Resultado Resta {resultadoR}</Text>

      <Button
        title='MULTIPLICAR'
        onPress={()=>{
          let resultadoMultiplicar = ejecutarOperacion(multiplicar);
          setResultadoM(resultadoMultiplicar);
        }}
      />
      <Text>Resultado Multiplicar {resultadoM}</Text>
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
