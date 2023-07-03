import { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert} from 'react-native';

export default function App() {
  const Space = () => <View style={styles.space}/>
  const [count, setCount] = useState(0)

  const alert = () => {
    Alert.alert("Waan Kaxumahay, lama siiwadi karo tirada!");
    return count
  }
 
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Counter <Text style={{color: "#00BEFE"}}>App</Text></Text>
     <View style={styles.circle}>
      <Text style={styles.count}>{count}</Text>
     </View>
     <View style={styles.btns}>
      <Button title="kudar tiro" color="#00befe" onPress={() => setCount(count + 1)}/>
      <Space/>
      <Button title="Kajar tiro" color="#1B91D5" onPress={() => setCount(count === 0 ? alert() : count - 1)}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: "#1B91D5"
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: "#FFf",
    shadowColor: "#555",
    elevation: 8,
    margin: 20,
    borderRadius: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    fontSize: 30,
    fontWeight: "600",
    color: "#00BEFE"
  },
  space: {
    padding: 6,
  },
  btns: {
    dispaly: "flex",
    width: 200,
  }
});
