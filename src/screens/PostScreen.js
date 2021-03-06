import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { removePost, toggleBooked } from '../store/actions/post';


const PostScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const postId = route.params.postId
    // const booked = route.params.booked
    // const iconName = booked ? 'star-sharp' : 'star-outline'

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

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
                { text: "OK", style: 'destructive', onPress: () => {
                    navigation.navigate('Main')
                    dispatch(removePost(postId))
                } }
            ],
            { cancelable: false }
        );
    }
    


    const booked = useSelector(state =>
        state.post.bookedPosts.some(post => post.id === postId))


    const toggleHendler = useCallback(() => {
        console.log(booked, 'are here')
        dispatch(toggleBooked(postId))
    }, [dispatch, postId])

    useEffect((post) => {
        const iconName = booked ? 'star-sharp' : 'star-outline'
        console.log(post)
        navigation.setOptions({
            booked,
            title: 'Post at ' + new Date(route.params.date).toLocaleDateString(),
            headerRight: () => (
                <TouchableOpacity>
                    <Ionicons style={{ paddingRight: 10 }} name={iconName} size={30} onPress={toggleHendler} />
                </TouchableOpacity>
            ),
        })
    }, [booked])

    if (!post) {
        return null
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrapp}>
                <Text style={styles.title}>{post.text}</Text>
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