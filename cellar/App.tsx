/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from './src/Quiz/Quiz';

export default function App() {
  return (
    <View className="flex-auto items-center justify-center bg-zinc-400">
      <Quiz/>
    </View>
  );
}