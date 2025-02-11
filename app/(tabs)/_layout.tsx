import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/constants/Colors';


export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"

      />
      <Tabs.Screen
        name="explore"
       
      />
    </Tabs>
  );
}
