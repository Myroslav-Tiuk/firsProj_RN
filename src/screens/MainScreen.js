import React, { useLayoutEffect } from 'react';
import { DATA } from '../data';

import Ionicons from 'react-native-vector-icons/Ionicons'
import PostList from '../components/PostList';






const MainScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons style={{ paddingLeft: 10 }} name='menu-outline' size={30} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <Ionicons style={{ paddingRight: 10 }} name='ios-camera' size={30} onPress={() => navigation.navigate("Create")} />
            ),
        });
    }, [navigation]);

    const openPostHendler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, text: post.text, img: post.img })
    }


    return (
        <PostList data={DATA} onOpen={openPostHendler} />
    );
}



export default MainScreen;