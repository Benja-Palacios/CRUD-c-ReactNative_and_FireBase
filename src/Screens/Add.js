import React from "react"
import * as RN from 'react-native'
import EmojiPicker from "rn-emoji-keyboard"
import { database } from "../config/fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Add(){
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = React.useState(true);
    const [newItem, setNewItem] = React.useState({
        emoji: '😞',
        name: '',
        isSold: false,
        createdAt: new Date()
    });

    const onSend = async () => {
        await addDoc(collection(database, 'productos'), newItem);
        navigation.goBack();
    }

    const handlepick = (emojiObject) => {
        setNewItem({
            ...newItem,
            emoji: emojiObject.emoji,
        })
    }

    return(
        <RN.View style={styles.conteiner}>
            <RN.Text style={styles.title}>Selecciona un Producto Nuevo</RN.Text>
            <RN.Text style={styles.emoji} onPress={() => setIsOpen(true)}>{newItem.emoji}</RN.Text>
            <EmojiPicker
                onEmojiSelected={handlepick}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <RN.TextInput
                onChangeText={(text) => setNewItem({...newItem, name:text})}
                placeholder="Nombre del Producto"
                style={styles.inputConatiner}
            />
            <RN.TextInput
                onChangeText={(text) => setNewItem({...newItem, price:text})}
                placeholder="$ Precio"
                style={styles.inputConatiner}
                keyboardType="number-pad"
            />
            <RN.Button title="Publicar" onPress={onSend}/>
        </RN.View>            
    )
}

const styles = RN.StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title:{
        fontSize: 32,
        fontWeight: '700',
    },
    inputConatiner:{
        width: ' 90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius:6,
    },
    emoji:{
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        marginVertical: 6
    }
})