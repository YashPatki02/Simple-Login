import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const [currLogin, setCurrLogin] = useState(true);
  const [currName, setCurrName] = useState("");

  const [logData, setLogData] = useState([]);

  const login = (name) => {
    setCurrLogin(false);
    setCurrName(name);

    const timestamp = new Date().toLocaleString();
    
    // Find if name is in logData
    const data = logData.find(logData => logData.name === name);

    if (data) {
      // If name is in logData, update time and count
      const {name, time, count} = data;
      const newLog = {name, time: [...time, timestamp], count: count + 1};
      const newLogData = logData.filter(logData => logData.name !== name);
      setLogData([...newLogData, newLog]);
    } else {
      // If name is not in logData, add new entry
      const newLog = {name, time: [timestamp], count: 1};
      setLogData([...logData, newLog]);
    }
  };

  const logout = () => {
    setCurrLogin(true);
  };

  return (
    <View style={styles.container}>
      {currLogin && <Login login={login} />}
      {!currLogin && (
        <Home logout={logout} logData={logData} currName={currName} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
