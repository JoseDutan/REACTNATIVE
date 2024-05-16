import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

let personas = [
  { nombre: "Thor", apellido: "Thillas", cedula: "0242342342" },
  { nombre: "Amber", apellido: "Flores", cedula: "172312313" },
  { nombre: "Peter", apellido: "Parker", cedula: "076123233" }
]
//esNuevo indica si se esta creando una nueva persona o se esta modificando una existente
let esNuevo = true;
//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;
export default function App() {
  const [txtCedula, setTxtCedula] = useState()
  const [txtNombre, setTxtNombre] = useState()
  const [txtApellido, setTxtApellido] = useState()
  const [numElementos, setNumElemntos] = useState(personas.length)

  let ItemPersona = ({indice, persona}) => {
    return (
      <View style={styles.itemPersonas}>
        <View style={styles.itemIndice}>
          <Text> {indice} </Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {persona.nombre} {persona.apellido}
          </Text>
          <Text style={styles.textoSecundario}>
            {persona.cedula}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title='E'
            color="green"
            onPress={() => {
              setTxtCedula(persona.cedula);
              setTxtNombre(persona.nombre);
              setTxtApellido(persona.apellido);
              esNuevo = false;
              indiceSeleccionado = indice
            }}
          />
          <Button
            title='X'
            color="red"
            onPress={() => {
              indiceSeleccionado = indice
              personas.splice(indiceSeleccionado, 1)
              console.log('ARRELO PERSONAS', personas)
              setNumElemntos(personas.length)
            }}
          />
        </View>
      </View>
    );
  }

  let limpiar = () => {
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  }

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  }

  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("INFO", "Ya existe una persona con la cedula: " + txtCedula)
      } else {
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula }
        personas.push(persona);
        setTxtCedula(null);
      }
    } else {
      personas[indiceSeleccionado].nombre = txtNombre
      personas[indiceSeleccionado].apellido = txtApellido
    }
    limpiar();
    setNumElemntos(personas.length)
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su Cedula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su Nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su Apellido'
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={() => {
              guardarPersona();
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Elementos: {numElementos} </Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({index, item}) => {
            return <ItemPersona
              indice={index}
              persona={item}
            />
          }}
          keyExtractor={item => item.cedula}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>AUTOR: Jose Dutan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column', //. eje principal vertical
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista: {
    //backgroundColor: 'lightpink'
  },
  itemPersonas: {
    backgroundColor: 'lemonchiffon',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10
  },
  textoPrincipal: {
    fontSize: 20
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16
  },
  areaCabecera: {
    flex: 4,
    //backgroundColor: 'chartreuse',
    justifyContent: 'center',
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral'
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemIndice: {
    //backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {
    //backgroundColor: 'darkorange',
    flex: 6,
    paddingLeft: 5
  },
  itemBotones: {
    flex: 2,
    //backgroundColor: 'darkorange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txt: {
    borderWidth: 1,
    //borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
