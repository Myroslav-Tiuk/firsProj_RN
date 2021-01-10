import React, { useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PostList from '../components/PostList';
import { loadPosts } from '../store/actions/post';
import { ImageBackground } from 'react-native';


const MainScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])



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
        navigation.navigate('Post', { postId: post.id, date: post.date, text: post.text, img: post.img, booked: post.booked })
    }



    return (
        <ImageBackground source={require('../../back.png')} style={{width: '100%'}}>
            <PostList data={allPosts} onOpen={openPostHendler} />
        </ImageBackground>
    );
}



export default MainScreen;