import React, {useLayoutEffect} from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { HeaderButtons , Item} from 'react-navigation-header-buttons'
import { DATA } from '../data';
import Post from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import Ionicons from 'react-native-vector-icons/Ionicons'






const MainScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
                <Ionicons  style={{paddingRight: 10}} name='ios-camera' size={30} onPress={() => alert('camera')} />
          ),
        });
      }, [navigation]);

    const openPostHendler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, text: post.text, img: post.img})
    }


    return (
        <View style={styles.wrapper}>
            <FlatList 
            data={DATA}
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

export default MainScreen;