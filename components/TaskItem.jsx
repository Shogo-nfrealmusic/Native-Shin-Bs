import { Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TaskItem = ({ item, handleEdit, handleDelete }) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Icon name="edit" color="#4caf50" onPress={() => handleEdit(item)}>
            Edit
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Icon name="delete" color="#f44336">
            Delete
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  taskText: {
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default TaskItem;
