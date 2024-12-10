import {
  Text,
  View,
  Pressable,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Index() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "some todo",
      completed: false,
    },
    {
      id: 2,
      title: "some other todo",
      completed: true,
    },
  ]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      let newId = todo.length + 1

      setTodo([{ id: newId, title: text, completed: false }, ...todo]);
      setText("");
    }
  };
  const toggle = (id) => {
    setTodo(
      todo.map((e) => 
        e.id === id ? { ...e, completed: !e.completed } : e
      )
    );
  };
  const removeTodo = (id) => {
    setTodo(todo.filter((e) => e.id !== id));
  };

  const renderItem = ({item}) => (
    <View style={styles.todoItem}>
      <Text
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggle(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={24}
          color="red"
          selectable={undefined}
        />
      </Pressable>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new todo"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addTodo} style={styles.button}>
          <Text style={styles.btnText}>Add Todo</Text>
        </Pressable>
      </View>

      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 1024,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: "auto",
    pointerEvents: "auto",
  },
  input: {
    borderWidth: 1,
    flex: 1,
    borderColor: "gray",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 18,
    minWidth: 0,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold'
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "100%",
    maxWidth: 1024,
    marginHorizontal: "auto",
    pointerEvents: "auto",
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    color: "white",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
