import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal ,Image} from "react-native";

function GoalInput(props) {
  const [goalText, setgoalText] = useState("");

  function getInputText(enteredText) {
    setgoalText(enteredText);
  }

  function addGoadText() {
    props.addFun(goalText);
    setgoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.innerView}>
        <Image style = {styles.image} source={require('../assets/images/target.png')}/>
        <TextInput
          style={styles.inputText}
          placeholder="Set a goal"
          onChangeText={getInputText}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoadText} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={'#ea1c1c'}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  innerView: {
    flex: 1,

    height: "30%",
    //borderColor: "#f80303",
    //borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : '#bb879f'
  },

  inputText: {
    padding: 0,
    paddingLeft: 9,
    borderWidth: 1,
    borderRadius : 6,
    borderColor: "#cccccc",
    backgroundColor : '#ffffff',
    width: "87%",
    height: "7%",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    margin: 8,
    width: "30%",
     
  },

  image : {
    // borderWidth : 3,
    // borderColor : 'blue',
    marginBottom : 50,
    height : 150,
    width :150,
    padding: 50
  }
});
