import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalhandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputConatiner}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={(e) => goalInputHandler(e)}
        />
        <View style={styles.buttonStyle}>
        <Button title="Add Goal" onPress={addGoalhandler} />
        <Button title="Cancel" onPress={() => props.setModal(false)} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputConatiner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#311b6b",
    padding:16
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    width: "100%",
    borderRadius:6,
    padding: 16,
  },
  buttonStyle:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
