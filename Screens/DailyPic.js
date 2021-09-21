import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Linking} from 'react-native';

export default class DailyPicScreen extends React.Component{
  getAPOD = () => {
    axios
        .get("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=VrfYdubeTbTHOpVcaG2OXocAFifGIWfrtoezxIE3")
        .then(response => {
            this.setState({ apod: response.data })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
}
render(){
  return (
   <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
      <Text>Daily Pic Screen</Text>
    </View>,

    <View style={styles.container}>
<SafeAreaView style={styles.droidSafeArea/>
<ImageBackground
  source={require ('../assets/stars.gif')}style={styles.backgroundImage}>
    <Text style={styles.routeText}>Astronomy pictures of the day</Text>
    <Text style={styles.titleText}>{this.state.apod.title}</Text>
    <TouchableOpacity style={styles.listContainer}
    onPress={()=> Linking.openURL(this.state.apod.url).catch(err => console.error("couldn't load the page",err))}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/play-video.png')} style={{width:50,height:50}}>
        </Image>
      </View>
    </TouchableOpacity>
    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
      </ImageBackground>
   
</View>
  );
}
}
