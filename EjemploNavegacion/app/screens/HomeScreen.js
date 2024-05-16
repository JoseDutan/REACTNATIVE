import { View, Text, StyleSheet, Button } from "react-native"

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <View style={styles.titulo} >
        <Text> HOME </Text>
        </View>
        <View style={styles.botones}>
            <Button
                title="CONTACTOS"
                onPress={() => {
                    navigation.navigate('ContactsNav')
                }}
            />
            <Button
                title="PRODUCTOS"
                onPress={() => {
                    navigation.navigate('ProductosNav')
                }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        //backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    botones: {
        //backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
});