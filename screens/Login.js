import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Login({ login }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onLoginPressed = () => {
    if (name === "" || email === "") {
      alert("Please fill in all fields.");
      return;
    } 
    else if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    login(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          placeholderTextColor="#aaaaaa"
          onChangeText={(val) => setName(val)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          inputMode="email"
          style={styles.input}
          placeholder="johndoe@gmail.com"
          placeholderTextColor="#aaaaaa"
          onChangeText={(val) => setEmail(val)}
          value={email}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="LOGIN" color="white" onPress={() => onLoginPressed()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 48,
    marginBottom: 80,
  },
  inputContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    marginLeft: 30,
  },
  input: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    padding: 12,
    borderColor: "coral",
    borderWidth: 1,
    width: 250,
  },
  buttonContainer: {
    height: 48,
    borderRadius: 5,
    backgroundColor: "coral",
    color: "white",
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
