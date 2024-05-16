import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from '@rneui/base';
import { useState } from 'react';
import { Alert } from 'react-native';
export default function App() {
  const [name, setName] = useState()

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder='Ingrese su Nombre'
        label='Nombre'
      />
      <Text> {name} </Text>
      <Button
        title="OK"
        icon={{
          name: 'reddit',
          type: 'zocial',
          size: 20,
          color: 'white'
        }}
        onPress={()=>{
          Alert.alert("INFO", "Su nombre es "+name)
        }}
      />
      <Button
        title="Cancelar"
        icon={<Icon
          name='plancast'
          type='zocial'
          color='white'
        />}
      />
      <Icon
        name='cloudy-sharp'
        type='ionicon'
        color='black'
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
});
