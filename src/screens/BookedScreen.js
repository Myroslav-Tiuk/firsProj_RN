import React, { useLayoutEffect } from 'react';
import { DATA } from '../data';

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
    const openPostHendler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, text: post.text, img: post.img})
    }

    const data = DATA.filter(post => post.booked)
    return (
        <PostList data={data} onOpen={openPostHendler} />
    );
}


export default BookedScreen;