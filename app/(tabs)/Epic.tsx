import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Custom_text = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image source={require('@/assets/images/Bass.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Ed Ouston</Text>
            <Text style={styles.text}>About</Text>
          </View>
      </View>

      <View style={styles.box2}>
        <Text>Edward Ouston:</Text>
        <Text>
          My name's Edward, Ed for short, and I'm a second-year Software Dev student. My hobbies include playing bass, writing music, and playing board games. I'm looking forward to this class so I can bolster my capabilities as a front-end developer.
        </Text>
      </View>

      <View style={styles.box3}>
        <Text>Bottom Text</Text>
      </View>
    </View>
  );
}

export default Custom_text;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 16,
  },
  box1: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  box2: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    padding: 16,
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  textContainer: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
