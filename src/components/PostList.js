import React from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native'

import Post from './Post'


const PostList = ({data = [], onOpen}) => {

if(!data.length) {
    return <View style={styles.wrapper}>
            <Text style={styles.noItem}>Create your first post</Text>
        </View>
}

    return(
        <View style={styles.wrapper}>
            <FlatList 
            data={data}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,

    },
    noItem: {
        padding: 20,
        fontSize: 20,
        fontWeight: "600"
    }
})

export default PostList;