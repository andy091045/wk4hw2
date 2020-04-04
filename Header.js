import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Image
                style={styles.iconStyle}
                source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/77708ADD-D59B-4BF8-A8BD-F1606D93342F.svg' }}
            />
            <Text style={styles.textStyle}>My Book</Text>
            <Image
                style={styles.iconStyle}
                source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/710661D2-0E48-47E8-82D7-6662CF3CB481.svg' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        padding: 8,
        backgroundColor: "#00b49f",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 56,
        width: 360
    },
    textStyle: {
        color: "#F8F8F8",
        fontSize: 20,
        fontFamily: "Roboto",

    },
    iconStyle: {
        height: 40,
        width: 40
    }

});

export default Header;
