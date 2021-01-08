import { HeaderTitle } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Post from '../components/Post';
import { DATA } from '../data';
import { THEME } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons'


const PostScreen = ({ navigation, route }) => {
    // console.log(state.post)

    // const icon = state.booked ? 'star-sharp' : 'star-outline'

    const post = DATA.find(p => p.id === postId)

    const removeHendler = () => {
        Alert.alert(
            "Delete Post",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", style: 'destructive', onPress: () => { console.log("OK Pressed") } }
            ],
            { cancelable: false }
        );
    }

    useEffect((post) => {
        // const booked = route.params.booked
        // const iconName = booked ? 'star-sharp' : 'star-outline'
        console.log(post)
        navigation.setOptions({
            title: 'Post at ' + new Date(route.params.date).toLocaleDateString(), 
            headerRight: () => (
                <Ionicons style={{ paddingRight: 10 }} name={iconName} size={30} onPress={() => Alert.alert('blablabla')} />
            ),
        })
    })



    console.log(route.params)
    const postId = route.params.postId
    const booked = route.params.booked

    const iconName = booked ? 'star-sharp' : 'star-outline'
    
    return (
        <ScrollView>
            <Image source={{ uri: route.params.img }} style={styles.image} />
            <View style={styles.textWrapp}>
                <Text style={styles.title}>{route.params.text}</Text>
                <Button title="DELETE" color={THEME.DANGER_COLOR} onPress={removeHendler} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrapp: {
        padding: 10
    },
    title: {
        fontSize: 15,
        padding: 10
    }
})




export default PostScreen;