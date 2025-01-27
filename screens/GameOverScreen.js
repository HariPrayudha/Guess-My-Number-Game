import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onRestartGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Title>GAME OVER!!!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={[styles.image, imageStyle]} source={require('../assets/images/122.jpg')} />
                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                    </Text>
                    <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary8,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 23
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary5
    }
});