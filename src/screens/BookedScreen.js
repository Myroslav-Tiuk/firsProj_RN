import React, { useLayoutEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux'

import PostList from '../components/PostList';
import Ionicons from 'react-native-vector-icons/Ionicons'


const BookedScreen = ({ navigation }) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons style={{ paddingLeft: 10 }} name='menu-outline' size={30} onPress={() => navigation.openDrawer()} />
            ),
        });
    }, [navigation]);

const bookedPosts = useSelector(state => state.post.bookedPosts)

    const openPostHendler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, text: post.text, img: post.img , booked: post.booked })
    }


    return (
        <ImageBackground source={require('../../back.png')} style={{ width: '100%' }}>
            <PostList data={bookedPosts} onOpen={openPostHendler} />
        </ImageBackground>

    );
}


export default BookedScreen;