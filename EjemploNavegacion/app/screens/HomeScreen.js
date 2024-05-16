import { View, Text, StyleSheet, Button } from "react-native"

export const Home = ({navigation}) => {
    return <View style={styles.container}>
        <Text> HOME </Text>
        <Button
            title="IR A CONTACTS"
            onPress={() => {
                navigation.navigate('ContactsNav')
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});