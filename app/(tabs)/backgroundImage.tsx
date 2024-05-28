import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const backgroundImage = () => {
  return (
    <View style={styles.main}>
        <ImageBackground source={require('@/assets/images/Bass.png')}>
        </ImageBackground>
    </View>
  );
}

export default backgroundImage;

const styles = StyleSheet.create({

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },

});