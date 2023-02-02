import { View, Text, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import questionsJson from './Questions.json'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getNextQuestion(){
  return questionsJson.questions[getRandomInt(9)];
}

export default function Quiz() {

  const [questionStr, setQuestionStr] = useState(getNextQuestion());

  return (
    <View className="relative flex justify-center items-center bg-zinc-100 w-screen h-screen space-y-10">

      <View className="bg-red-200 rounded-lg w-80 h-40 justify-center items-center">
        <Text className='text-xl'>{questionStr}</Text>
      </View>

      <View 
      className="bg-green-200 rounded-lg w-60">
        <Button
        title="Try new things"
        color={'black'}
        onPress={() => {
          setQuestionStr(getNextQuestion());
        }}
        />
      </View>

      <View 
      className="bg-blue-200 rounded-lg w-60">
        <Button
        title="Try new things"
        color={'black'}
        onPress={() => {
          setQuestionStr(getNextQuestion());
        }}
        />
      </View>

    </View>
  )
}