import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItems from "./components/GoalItems";
import GoalInputs from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goalItems, setGoalItems] = useState([]);

  function showModalSceen() {
    setIsModalVisible(true);
  }

  function removeModalScreen(){
    setIsModalVisible(false);
  }

  function addInputText(givenText) {
    setGoalItems((addGoalItem) => [
      ...addGoalItem,
      { text: givenText, id: Math.random().toString() },
    ]);

    removeModalScreen();
  }

  function deleteItem(id) {
    setGoalItems((addGoalItem) => {
      return addGoalItem.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      <Button title="Add My Goals " color="#ec2679" onPress={showModalSceen} />
      <GoalInputs visible={isModalVisible} addFun={addInputText} onCancel = {removeModalScreen} />

      <View style={styles.listItem}>
        <FlatList
          data={goalItems}
          renderItem={(itemData) => (
            <GoalItems
              text={itemData.item.text}
              id={itemData.item.id}
              deleteFun={deleteItem}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // borderColor: "blue",
   backgroundColor :"#5f0359",
    borderWidth: 2,
    padding : 30,
    paddingTop : 70
  },

  listItem: {
    //borderColor:'red',
    //borderWidth : 2,
    flex: 4,
    padding: 10,
  },
});
