import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone neede
          <Text style={styles.hightlight}> {roundsNumber} </Text>
          rounds to guess the number
          <Text style={styles.hightlight}> {userNumber} </Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    overflow: "hidden",
    width: deviceWidth <380 ? 240: 300,
    height: deviceWidth <380 ? 240: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize:24,
    textAlign:'center',
    marginBottom:12
    // 텍스트 안의 텍스트는 상속이 된다
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
