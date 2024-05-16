import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
const [peso, setPeso] = useState();
const [estatura, setEstatura] = useState();
const [resultadoFinal, setResultadoFinal] = useState();

  const recuperarEntero =(idComponente)=>{
    let valorEntero = parseInt(idComponente);
    return valorEntero;
}

const ejecutarOperacion=(operar)=>{
  let valor1 = recuperarEntero(peso);
  let valor2 = recuperarEntero(estatura);
  let resulatado = operar(valor1,valor2);
  return resulatado
}

const imc=(pesokg, estaturaCM)=>{;
  let estaturaMetros = (estaturaCM/100) * (estaturaCM/100);
  let resulatado = pesokg / estaturaMetros;
  return resulatado.toFixed(2)
}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <TextInput
      style={styles.caja}
      value={estatura}
      onChangeText={setEstatura}
      placeholder='Ingrese su estatura en Cm'
      />
      <TextInput
      style={styles.caja}
      value={peso}
      onChangeText={setPeso}
      placeholder='Ingrese su Peso en Kg'
      />
      <Button
      title='CALCULAR SU IMC'
      onPress={()=>{
        let resultadoIMC = ejecutarOperacion(imc);
        if(resultadoIMC<18.5){
          setResultadoFinal(resultadoIMC);
          Alert.alert("ADVERTENCIA","Peso inferior al normal")
        } else if (resultadoIMC>=18.5 && resultadoIMC<24.9){
          setResultadoFinal(resultadoIMC);
          Alert.alert("MESAJE","Normal")
        } else if (resultadoIMC>=25.0 && resultadoIMC<29.9){
          setResultadoFinal(resultadoIMC);
          Alert.alert("ADVERTENCIA","Peso Superior al Normal")
        } else if (resultadoIMC>30.0){
          setResultadoFinal(resultadoIMC);
          Alert.alert("ALERTA","Tiene Obesidad")
        }
      }}
      />
      <Text>Su ICM es: {resultadoFinal} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  caja:{
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
