import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Image
                style={styles.iconStyle}
                source={require('./img/menu.png')}
            />
            <Text style={styles.textStyle}>My Book</Text>
            <Image
                style={styles.iconStyle}
                source={require('./img/search.png')}
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
        alignItems: "flex-end",
        paddingBottom: 20,
        height: 80,

    },
    textStyle: {
        color: "#F8F8F8",
        fontSize: 20,
        fontWeight: 'bold',

    },
    iconStyle: {
        marginLeft: 15,
        marginRight: 15,
        height: 20,
        width: 20
    }

});

export default Header;
