import { View, Text } from 'react-native'
import React from 'react'
import questionsJson from './Questions.json'

export default function Quiz({
  question
}: {
  question: string
}) {

  var test = questionsJson.questions[9];

  return (
    <View className="relative flex bg-zinc-100">
      <Text>{test}</Text>
    </View>
  )
}