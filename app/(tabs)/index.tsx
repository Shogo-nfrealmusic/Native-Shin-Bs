import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput placeholder="タスクを入力" style={styles.input} />
      <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
        <Text style={styles.saveButtonText}>ADD</Text>
      </TouchableOpacity>
      <FlatList
        data={[
          { id: 1, title: "タスク1" },
          { id: 2, title: "タスク2" },
          { id: 3, title: "タスク3" },
        ]}
        renderItem={({ item }) => <Text>{item.title}</Text>}
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
});
