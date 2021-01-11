import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { THEME } from '../theme';
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/post';


const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const img = 'https://proxy11.online.ua/oboi/r2-d1/004/231/167/view4bbb694ced916.jpg'

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
            img: img,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
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
                    <Image style={{ width: '100%', height: 200, marginBottom: 10 }} source={{ uri: img }} />
                    <Button title='Create Post' color={THEME.MAIN_COLOR} onPress={createPostHendler} />
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