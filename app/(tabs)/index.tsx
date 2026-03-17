import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput placeholder="タスクを入力" style={styles.input} />
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
});
