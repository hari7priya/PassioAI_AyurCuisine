import React, {useEffect, useState} from 'react';
import {
  NativeEventEmitter,
  NativeModules,
  requireNativeComponent,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

const PassioSDK = NativeModules.PassioPlatformSDKBridge;
const PassioCameraView = requireNativeComponent('PassioCameraView');

export const CameraNativeScreen = ({navigation}) => {
  const [sdkStatus, setSdkStatus] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);
  const [candidate, setCandidate] = useState('');
  const [prevCandidate, setPrevCandidate] = useState('');
  useEffect(() => {
    PassioSDK.configure(
      '2o1No6sYGZpnwzOjJn8uMj3pkRwW2QR4oizx8GFW0C5L', //  license key
      '559b0ec1-d892-11ed-8d61-d257af01c9c1', //  projectID
      1, // set debugMode here
      true, // set autoUpdate as true
    ).then(result => {
      setSdkStatus(result);
    });

    const PassioSDKListener = new NativeEventEmitter(PassioSDK);
    PassioSDKListener.addListener('onDetectionCandidates', setCandidate);
    // PassioSDK.startDetection();

    return () => {
      PassioSDK.stopDetection();
      PassioSDK.removeListeners(true);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {sdkStatus === 'isReadyForDetection' ? (
        <>
          <PassioCameraView style={{flex: 1, width: '100%'}} />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              bottom: 100,
            }}>
            <Pressable
              style={styles.button}
              onPress={() => {
                if (!isDetecting) {
                  PassioSDK.startDetection();
                } else {
                  PassioSDK.stopDetection();
                  navigation.navigate('Cuisine', {recipe: candidate});
                  setCandidate('');
                }
                setIsDetecting(!isDetecting);
              }}>
              <Text style={styles.text}>{!isDetecting ? 'Start' : 'Stop'}</Text>
            </Pressable>

            <View style={{backgroundColor: 'white', padding: 20}}>
              <Text>{`Candidate: ${candidate}`}</Text>
            </View>
          </View>
        </>
      ) : (
        <Text>RN Passio Platform SDK</Text>
      )}
    </View>
  );
};

export default CameraNativeScreen;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
