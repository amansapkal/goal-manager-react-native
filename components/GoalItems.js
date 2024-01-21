import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItems(props) {
  return (
    <View style={styles.goalItemStyle}>
      <Pressable
        onPress={props.deleteFun.bind(this, props.id)}
        android_ripple={{ color: "#f4f4f4" }} //for android only ..(effect after press)
        style = {({pressed}) => pressed && styles.pressItem} //for ios only ..(effect after press)
      >
        <Text style={styles.goalElement}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItemStyle: {
    margin: 10,
   
    backgroundColor: "#fcfeff",
    borderRadius: 5,
  },

  goalElement: {
    color: "#262426",
    padding: 12,
  },

  pressItem:{
    opacity : 0.5
  }
});
