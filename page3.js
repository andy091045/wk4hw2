import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const Page2 = () => {
    return (
        <View style={styles.pageStyle}>
            <View style={styles.pagePhotoStyle}>
                <Image
                    style={styles.PhotoStyle}
                    source={{ uri: 'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/26D1FFBF-509F-46E2-A451-20623D33AA29.png' }}
                />
            </View>
            <View style={styles.pageTextStyle}>
                <View>
                    <Text style={styles.text1Style}>Street Art Activity Book</Text>
                </View>

                <View>
                    <Text style={styles.text2Style}>Mitchell Beazley</Text>
                </View>

                <View>
                    <Text style={styles.text3Style}>Street art is colorful, vibrant, diverse and exciting.Now, you can create…</Text>
                </View>

                <View style={styles.pageBarStyle}></View>

                <View >
                    <Text style={styles.text3Style}>100% completed</Text>
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
        paddingBottom: 20,
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
    pageTextStyle: {
        paddingTop: 13,
        paddingLeft: 24,
        backgroundColor: "#F8F8F8",

    },
    pageBarStyle: {
        width: 194,
        height: 3,
        borderRadius: 3,
        backgroundColor: "#70b4a1"
    },
    PhotoStyle: {
        height: 140,
    },
    text1Style: {
        fontSize: 18,

        fontStyle: "normal",
        color: "#2e2e2e",
    },
    text2Style: {
        paddingTop: 11,
        fontSize: 14,

        fontStyle: "normal",
        color: "#717171",
    },
    text3Style: {
        paddingTop: 11,
        paddingBottom: 11,
        paddingRight: 180,
        fontSize: 12,

        fontStyle: "normal",
        color: "#b1b1b1",

    }


});

export default Page2;
