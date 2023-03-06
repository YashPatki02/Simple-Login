import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function Home({ logout, logData, currName }) {
  const onLogoutPressed = () => {
    logout();
  };

  const data = logData.find(logData => logData.name === currName);
  const {name, time, count} = data;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Text style={styles.greeting}>
        Hello {name}, You have logged in {count} {count === 1 ? `time` : `times`}.
      </Text>

      <ScrollView style={styles.scrollView}>
        {time.map((item) => {
          return (
            <Text style={styles.item} key={item + Math.random().toString()}>
              Logged in at: {item}
            </Text>
          );
        })}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          color="white"
          title="LOG OUT"
          onPress={() => onLogoutPressed()}
        />
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
    marginBottom: 30,
    marginTop: 100,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
  },
  buttonContainer: {
    height: 48,
    borderRadius: 5,
    backgroundColor: "coral",
    color: "white",
    marginTop: 60,
    marginBottom: 100,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 20,
    fontSize: 18,
    borderColor: "coral",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
  },
});
