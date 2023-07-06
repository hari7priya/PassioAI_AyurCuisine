import {
  Button,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../images/ayur.webp')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Camera', {recipe: 'vada'})}>
          <Text style={styles.buttonText}>Scan your dish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
/*Camera*/
const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    alignContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    fontFamily: 'Avenir',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
