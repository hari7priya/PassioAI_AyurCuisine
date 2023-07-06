import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CuisineBenefitsScreen from '../src/components/CuisineBenefitsScreen';
import CuisineNutritionScreen from '../src/components/CuisineNutritionScreen';
import CuisinePrepScreen from '../src/components/CuisinePrepScreen';

import Icon from 'react-native-ionicons';

import HomeButton from '../src/shared/HomeButton';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();

export function CuisineNavigator(navigation) {
  return (
    <Tab.Navigator
      initialRouteName="CuisineBenefits"
      goBack="firstRoute"
      options={{
        headerShown: false,

        // tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Benefits"
        component={CuisineBenefitsScreen}
        options={{
          headerShown: false,

          // tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
        }}
        initialParams={navigation.route.params}
      />
      <Tab.Screen
        name="Nutrition"
        component={CuisineNutritionScreen}
        options={{
          headerShown: false,

          // tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
        }}
        initialParams={navigation.route.params}
      />
      <Tab.Screen
        name="Preparation"
        component={CuisinePrepScreen}
        options={{
          headerShown: false,

          //  tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
        }}
        initialParams={navigation.route.params}
      />
    </Tab.Navigator>
  );
}
