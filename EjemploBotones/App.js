import { StatusBar } from 'expo-status-bar';
import { Alert ,Button,StyleSheet, Text, View } from 'react-native';

export default function App() {
  const despedirse=()=>{
    Alert.alert("MENSAJE", "SU SESION HA FINALIZADO")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
      title="INICIAR"
      onPress={()=>{
        Alert.alert("MENSAJE", "SU SESION HA INICIADO")
      }}
      />
      <Button
      title="FINALIZAR"
      onPress={
        despedirse
      }
      />
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
});
