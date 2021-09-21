import * as React from 'react';
import { Text,
    View,
    StyleSheet,
    Platform,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    Image} from 'react-native';

export default class HomeScreen extends React.Component{

    render() {
        return (
          <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground
              source={require('../assets/stars.gif')}
              style={styles.backgroundImage}>
              <View style={styles.titleBar}>
                <Text style={styles.titleText}>STELLAR</Text>

            <TouchableOpacity style={styles.routeCard}onPress={()=>
            this.props.navigation.navigate("DailyPic")}>
            <Text style={styles.routeText}>DAILY PIC</Text>

            <Image
              source={require('../assets/photo.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}onPress={()=>
            this.props.navigation.navigate("SpaceCrafts")}>
            <Text style={styles.routeText}>SPACE CRAFTS</Text>
        
            <Image
              source={require('../assets/space_crafts.png')}style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}onPress={()=>
            this.props.navigation.navigate("StarMap")}>
            <Text style={styles.routeText}>STAR MAP</Text>
        
            <Image
              source={require('../assets/star_map.png')}style={styles.iconImage}></Image>
          </TouchableOpacity>

          
              </View>
              </ImageBackground>
      </View>
)
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
  },
  routeCard: {
      flex: 0.12,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 100,
      backgroundColor: "white"
  },
  titleBar: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
  },
  titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
  },
  routeText: {
      fontSize: 25,
      fontWeight: "bold",
      color: '#D11583',
      justifyContent: "center",
      alignItems: "center"
  },
  routeImage: {
      position: "absolute",
      top: -20,
      right: -15,
      height: 80,
      width: 80,
      resizeMode: "contain"
  }
});

        