import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux'
import { DATA } from '../data';
import { THEME } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { toggleBooked } from '../store/actions/post';


const PostScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()


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

    const bookedToggle = useSelector(state => 
        state.post.bookedPosts.some(post => post.id === postId))

    const toggleHendler = useCallback(() => {
        console.warn(postId, 'are here')
        dispatch(toggleBooked(postId))
    }, [dispatch, postId])

    useEffect((post) => {
        // booked,
        console.log(post)
        navigation.setOptions({
            title: 'Post at ' + new Date(route.params.date).toLocaleDateString(),
            headerRight: () => (
                <Ionicons style={{ paddingRight: 10 }} name={iconName} size={30} onPress={toggleHendler} />
            ),
        })
    })



    const postId = route.params.postId
    const booked = route.params.booked



    const iconName = booked ? 'star-sharp' : 'star-outline'

    return (
        <ScrollView>
            <Image source={{ uri: route.params.img }} style={styles.image} />
            <View style={styles.textWrapp}>
                <Text style={styles.title}>{route.params.text}</Text>
                <Button title="DELETE" color={THEME.DANGER_COLOR} onPress={toggleHendler} />
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