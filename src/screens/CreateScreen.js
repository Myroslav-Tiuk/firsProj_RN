import React, { useLayoutEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { THEME } from '../theme';
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';


const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const imgRef = useRef()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons style={{ paddingLeft: 10 }} name='menu-outline' size={30} onPress={() => navigation.toggleDrawer()} />
            ),
        });
    }, [navigation]);

    const createPostHendler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoPickHandler = path => {
        imgRef.current = path
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Create new Post</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Add text Post"
                        value={text}
                        onChangeText={setText}
                        multiline />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button title='Create Post' color={THEME.MAIN_COLOR} onPress={createPostHendler} disabled={!text} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10
    }
})


export default CreateScreen;