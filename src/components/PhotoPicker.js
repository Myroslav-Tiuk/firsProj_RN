import React, { useState } from 'react'
import { StyleSheet, View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null)

    const takePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path)
            onPick(image.path)
        });
    }

    return (
        <View style={styles.wrapper}>
            <Button title='Take Photo' onPress={takePhoto} />
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})

export default PhotoPicker;
