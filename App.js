import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  
  constructor(props){
    super(props);
    this.state = {
      profile: []
    }
  }
  
  var ApiFetch = { getData(){
    var url = 'http://localhost:8000/v1/';
    return fetch(url).then((res) => res.json);
  }};
  
  componentDidMount(){
    ApiFetch.getData.then((res));
  }
  


  return (
    <View style={styles.container}>
      <Text>hellow world!</Text>
      <div>
      ApiFetch
      
              who are you</div>
      <StatusBar style="auto" />
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
});
