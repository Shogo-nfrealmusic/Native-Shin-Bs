import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const TaskInput = ({ taskText, setTaskText, handleSaveTask, isEditing }) => {
  return (
    <View>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>
          {isEditing ? "UPDATE" : "ADD"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "#000327",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 2,
  },
  saveButton: {
    backgroundColor: "#525ee7",
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TaskInput;
