import { HeaderTitle } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Post from '../components/Post';
import { DATA } from '../data';
import { THEME } from '../theme';

const PostScreen = ({ navigation, route }) => {

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
              { text: "OK", style: 'destructive',onPress: () => {console.log("OK Pressed")} }
            ],
            { cancelable: false }
          );
    }
    
    useEffect((post) => {
        console.log(post)
        navigation.setOptions({ title: 'Post at ' + new Date(route.params.date).toLocaleDateString() })
    })



    console.log(route.params)
    const postId = route.params.postId
    return (
        <ScrollView>
            <Image source={{uri: route.params.img}} style={styles.image} />
            <View style={styles.textWrapp}>
                <Text style={styles.title}>{route.params.text}</Text>
                <Button title="DELETE" color={THEME.DANGER_COLOR}   onPress={removeHendler}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrapp:{
        padding: 10
    },
    title:{
        fontSize: 15,
        padding: 10
    }
})




export default PostScreen;