import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const Page2 = () => {
    return (
        <View style={styles.pageStyle}>
            <View style={styles.pagePhotoStyle}>
                <Image
                    style={styles.PhotoStyle}
                    source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/316F06C4-5404-4C1F-9054-71FF62D57101.png' }}
                />
            </View>
            <View style={styles.pageTextStyle}>
                <View>
                    <Text style={styles.text1Style}>Grist Mill Road</Text>
                </View>

                <View>
                    <Text style={styles.text2Style}>Christopher J.</Text>
                </View>

                <View>
                    <Text style={styles.text3Style}>Twenty-six years ago Hannah had<br /> her eye shot out. Now she wants…</Text>
                </View>

                <View style={styles.pageBarStyle}></View>

                <View style={styles.pagePhoto2Style}>
                    <Image
                        style={styles.Photo2Style}
                        source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/D191A01A-2326-4D19-8F01-FC0C145F6BD8.svg' }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageStyle: {
        paddingTop: 12,
        paddingLeft: 15,
        backgroundColor: "#F8F8F8",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ddd",
        height: 170,
        width: 360
    },
    pagePhotoStyle: {
        padding: 3,
        backgroundColor: "#F8F8F8",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        height: 146,
        width: 99
    },
    pagePhoto2Style: {
        paddingTop: 6
    },
    pageTextStyle: {
        paddingTop: 13,
        paddingLeft: 24,
        backgroundColor: "#F8F8F8",

    },
    pageBarStyle: {
        width: 194,
        height: 3,
        borderRadius: 3,
        backgroundColor: "#c3c3c3"
    },
    PhotoStyle: {
        height: 140,
    },
    Photo2Style: {
        width: 82,
        height: 21
    },
    text1Style: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontStyle: "normal",
        color: "#2e2e2e",
    },
    text2Style: {
        paddingTop: 11,
        fontSize: 14,
        fontFamily: "Roboto",
        fontStyle: "normal",
        color: "#717171",
    },
    text3Style: {
        paddingTop: 11,
        paddingBottom: 11,
        fontSize: 12,
        fontFamily: "Roboto",
        fontStyle: "normal",
        color: "#b1b1b1",
    }


});

export default Page2;
