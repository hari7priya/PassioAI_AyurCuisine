import WebView from 'react-native-webview';
import {StyleSheet, Text} from 'react-native';

const sambhar = require('../resources/sambhar/benefits.html');
const vada = require('../resources/vada/benefits.html');
const lassi = require('../resources/lassi/benefits.html');
function CuisineBenefitsScreen(navigation) {
  var recipe = navigation.route.params.recipe;

  return (
    <>
      <Text style={styles.title}>{recipe.toUpperCase()}</Text>
      <WebView
        originWhitelist={['*']}
        source={
          recipe == 'sambhar'
            ? sambhar
            : recipe == 'vada'
            ? vada
            : recipe == 'lassi'
            ? lassi
            : ''
        }
        style={{flex: 1, backgroundColor: '#FFFFE0'}}
      />
    </>
  );
}

export default CuisineBenefitsScreen;

const styles = StyleSheet.create({
  title: {
    color: 'darkgreen',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 10,
    alignSelf: 'center',
  },
});
