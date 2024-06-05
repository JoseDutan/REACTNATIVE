import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { getAllPostsService } from '../services/TestServices'
import { createPostService } from '../services/TestServices'
import { updatPostService } from '../services/TestServices'
import { getByUserIdService } from '../services/TestServices'
import { getPokemonService } from '../services/TestServices'
import { postProductService } from '../services/TestServices'
import { putProductService } from '../services/TestServices'
import { getDocumentTypes } from '../services/TestServices'


const getAllPosts = () => {
  getAllPostsService();
}
const createPost = () => {
  createPostService();
}
const updatePost = () => {
  updatPostService();
}
const getByUserId = () => {
  getByUserIdService();
}
const getPokemon = () => {
  getPokemonService();
}
const postProduc = () => {
  postProductService();
}
const putProduct = () => {
  putProductService();
}
const getDocument = () => {
  getDocumentTypes();
}
export const TestWebServices = () => {



  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
      <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
      <Button
        title="Filtrar"
        onPress={getByUserId}
      />
      <Button
        title="XXX"
        onPress={getPokemon}
      />

      <Button
        title="YYY"
        onPress={postProduc}
      />

      <Button
        title="ZZZ"
        onPress={putProduct}
      />
      <Button
        title="TIPOS DE DOCUMENTOS"
        onPress={getDocument}
      />

    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10

  }
});