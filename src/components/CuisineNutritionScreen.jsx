import WebView from 'react-native-webview';
import {StyleSheet, Text} from 'react-native';
const sambhar = require('../resources/sambhar/nutrition.html');
const vada = require('../resources/vada/nutrition.html');
const lassi = require('../resources/lassi/nutrition.html');
function CuisineNutritionScreen(navigation) {
  var recipe =  navigation.route.params.recipe;

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
        style={{flex: 1}}
      />
    </>
  );
}

export default CuisineNutritionScreen;
const styles = StyleSheet.create({
  title: {
    color: 'darkgreen',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 10,
    alignSelf: 'center',
  },
});
