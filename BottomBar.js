import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BottomBar = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.box}>
                <View style={styles.center}>
                    <Image style={styles.Home} source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/5E29B3A7-7F57-4AD3-9F70-2634391141EC.svg' }} />
                    <Text style={styles.word}>Home</Text>
                </View>
                <View style={styles.center}>
                    <Image style={styles.book} source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/777B1589-D20B-4250-8DBE-DA5773259E9D.svg' }} />
                    <Text style={styles.word}>My book</Text>
                </View>
                <View style={styles.center}>
                    <Image style={styles.Favorites} source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/7E8351E3-0B87-4604-881B-B2E021F29798.svg' }} />
                    <Text style={styles.word}>Favorites</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        elevation: 2,
    },
    box: {
        backgroundColor: '#ffffff',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        top: 10,
        zIndex: 2,
        paddingBottom: 15
    },
    word: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#818181',
        lineHeight: 20,

    },
    Home: {
        width: 40,
        height: 40,
    },
    book: {
        width: 40,
        height: 40,
    },
    Favorites: {
        width: 40,
        height: 40,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default BottomBar;