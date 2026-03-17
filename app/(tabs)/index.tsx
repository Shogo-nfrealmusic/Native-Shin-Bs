import TaskItem from "@/components/TaskItem";
import type React from "react";
import { useState } from "react";

import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const handleSaveTask = () => {
    if (!taskText.trim()) {
      Alert.alert("Please enter a task");
      return;
    }
    if (isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === isEditing ? { ...task, text: taskText } : task,
        ),
      );
      setIsEditing(null);
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      setTasks([...tasks, newTask]);
    }
    setTaskText("");
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (item: { id: string; text: string }) => {
    setTaskText(item.text);
    setIsEditing(item.id);
  };

  const renderTask = ({ item }: { item: { id: string; text: string } }) => {
    return (
      <TaskItem
        item={item}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Todo App</Text>
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
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    color: "black",
  },
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
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 6,
  },
  taskText: {
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
