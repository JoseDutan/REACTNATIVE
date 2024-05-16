import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Modal } from 'react-native';
import { useState } from 'react';

let productos = [
  { Anombre: "Doritos", categoria: "Snacks", precioCompra: 0.48, precioVenta: 0.45, id: 100 },
  { Anombre: "Manicho", categoria: "Golosina", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { Anombre: "Yogurt", categoria: "Lacteos", precioCompra: 0.40, precioVenta: 0.50, id: 102 },
  { Anombre: "Galleta Amor", categoria: "Reposteria", precioCompra: 1.00, precioVenta: 1.25, id: 103 },
  { Anombre: "Fideos", categoria: "Pasta", precioCompra: 2.50, precioVenta: 3.00, id: 104 }
]

let esNuevo = true;

let indiceSeleccionado = -1;
export default function App() {
  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [pdcom, setPdc] = useState();
  const [pdven, setPdv] = useState();
  const [numProd, setNumProd] = useState(productos.length)
  const [modalVisible, setModalVisible] = useState(false)

  let ItemProducto = ({indice, producto}) => {
    return (
      <View style={styles.itemProducto}>
        <View style={styles.itemId}>
          <Text style={styles.textoCero}>
            {producto.id}
          </Text>
        </View>
        <View style={styles.itemNombre}>
          <Text style={styles.textoPrincipal}>
            {producto.Anombre}
          </Text>
          <Text style={styles.textoSecundario}>
            {producto.categoria}
          </Text>
        </View>
        <View style={styles.itemPrecio}>
          <Text style={styles.textoTerciario}>
            {producto.precioVenta}
          </Text >
        </View>
        <View style={styles.itemBotones}>
          <TouchableOpacity onPress={() => {
            setCodigo(producto.id.toString())
            setNombre(producto.Anombre);
            setCategoria(producto.categoria);
            setPdc(producto.precioCompra.toString())
            setPdv(producto.precioVenta.toString())
            esNuevo = false
            indiceSeleccionado = indice
          }}>
            <Text> E </Text>
          </TouchableOpacity>
          <Pressable onPress={() => {
            setModalVisible(true);
            indiceSeleccionado = indice;
          }}>
            <Text> X </Text>
          </Pressable>
        </View>
      </View>
    )
  }

  let limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setPdv(null);
    setPdc(null);
    esNuevo = true;
  }

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == codigo) {
        return true;
      }
    }
    return false;
  }

  let guardarProducto = () => {
    if (esNuevo) {
      if (codigo == null || nombre == null || categoria == null
        || pdcom == null || pdven == null) {
        Alert.alert("INFO.", "Lenar todos los campos");
        return;
      } else {
        if (existeProducto()) {
          Alert.alert("INFO.", "Ese codigo ya existe: " + codigo);
          return;
        } else {
          let producto = {
            Anombre: nombre, categoria: categoria,
            precioCompra: parseFloat(pdcom), precioVenta: parseFloat(pdven), id: parseInt(codigo)
          };
          productos.push(producto);
        }
      }
    } else {
      productos[indiceSeleccionado].Anombre = nombre;
      productos[indiceSeleccionado].categoria = categoria;
      productos[indiceSeleccionado].precioCompra = parseFloat(pdcom);
      productos[indiceSeleccionado].precioVenta = parseFloat(pdven);
    }
    limpiar();
    setNumProd(productos.length);
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>PRODUCTOS</Text>
        <TextInput style={styles.txt}
          value={codigo}
          placeholder='CODIGO'
          onChangeText={setCodigo}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput style={styles.txt}
          value={nombre}
          placeholder='NOMBRE'
          onChangeText={setNombre}
        />
        <TextInput style={styles.txt}
          value={categoria}
          placeholder='CATEGORIA'
          onChangeText={setCategoria}
        />
        <TextInput style={styles.txt}
          value={pdcom}
          placeholder='PRECIO DE COMPRA'
          onChangeText={(aux) => {
            setPdc(aux)
            let compra = parseFloat(aux)
            let valor = compra * 0.1
            let resultado = compra + valor
            setPdv(resultado.toFixed(2).toString())
          }}
          keyboardType='numeric'

        />
        <TextInput style={styles.txt}
          value={pdven}
          placeholder='PRECIO DE VENTA'
          keyboardType='numeric'
          editable={false}
        />
      </View>
      <View style={styles.areaBotones}>
        <Button
          title='Guardar'
          onPress={() => {
            guardarProducto()
          }}
        />

        <Button
          title='Nuevo'
          onPress={() => {
            limpiar();
          }}
        />
        <Text>Elementos:  {numProd}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          data={productos}
          renderItem={({index, item}) => {
            return <ItemProducto
              indice={index}
              producto={item}
            />
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>AUTOR: Jose Dutan</Text>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>
                Está seguro que quiere eliminar
              </Text>
              <View>
                <Button
                  color="red"
                  title=' Aceptar '
                  onPress={() => {
                    productos.splice(indiceSeleccionado, 1);
                    setNumProd(productos.length);
                    limpiar();
                    setModalVisible(!modalVisible)
                  }}
                />
                <Button
                  style={styles.buttonClose}
                  title=' Cancelar '
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  titulo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  areaCabecera: {
    flex: 3,
    //backgroundColor: 'chartreuse',
    justifyContent: 'space-around',
  },
  txt: {
    borderWidth: 1,
    //borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5,
    borderRadius: 20
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10

  },
  areaContenido: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-around',
    //backgroundColor: 'coral'
  },
  itemProducto: {
    flexDirection: 'row',
    backgroundColor: 'honeydew',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    //justifyContent: 'space-around',
    //alignItems: 'center'
  },
  itemId: {
    //backgroundColor: 'darkgray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
  textoCero: {
    fontSize: 20,
  },
  itemNombre: {
    //backgroundColor: 'darkgray',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: '5'
  },
  textoPrincipal: {
    //backgroundColor: 'green',
    fontSize: 20,
  },
  textoSecundario: {
    //backgroundColor: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    padding: 2
  },
  itemPrecio: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: '3'

  },
  textoTerciario: {
    //backgroundColor: 'green',
    fontWeight: 'bold',
    flexDirection: 'columns',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    margin: 10
  },
  itemBotones: {
    flex: 2,
    //backgroundColor: 'darkorange',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
