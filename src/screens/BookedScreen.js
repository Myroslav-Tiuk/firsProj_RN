import React, {useLayoutEffect} from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { HeaderButtons , Item} from 'react-navigation-header-buttons'
import { DATA } from '../data';
import Post from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import Ionicons from 'react-native-vector-icons/Ionicons'






const BookedScreen = ({ navigation }) => {

    const openPostHendler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, text: post.text, img: post.img})
    }


    return (
        <View style={styles.wrapper}>
            <FlatList 
            data={DATA.filter(post => post.booked)}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={openPostHendler} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})

export default BookedScreen;