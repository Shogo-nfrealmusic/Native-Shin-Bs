import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    color: "white",
  },
});
