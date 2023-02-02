import { View, Text, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import TestQuizJson from './TestQuiz.json'
import WineCategoriesJson from './WineCategories.json'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomWineCategory() {
  var wineCategoriesArray = Object.keys(WineCategoriesJson);
  return wineCategoriesArray[getRandomInt(wineCategoriesArray.length - 1)];
}

function getNextQuestion(idx){
  return TestQuizJson.questions[idx];
}

function getRecommendedWines(category) {
  return WineCategoriesJson[category];
}

export default function Quiz() {

  const [questionIdx, setQuestionIdx] = useState(0);
  const [question, setQuestion] = useState(getNextQuestion(questionIdx));
  const [finished, setFinished] = useState(false);
  const [wineCategory, setWineCategory] = useState(getRandomWineCategory())
  const [wineRecommendations, setWineRecommendations] = useState(getRecommendedWines(wineCategory));

  function nextQuestion() {
    setQuestionIdx(questionIdx + 1);
    if (questionIdx < TestQuizJson.questions.length) {
      setQuestion(getNextQuestion(questionIdx));
    } else {
      setFinished(true);
    }
  }

  return (
    <View className="relative flex justify-center items-center bg-zinc-100 w-screen h-screen space-y-10">
      
      {!finished ?
      <View className="bg-red-200 rounded-lg w-80 h-40 justify-center items-center">
        <Text className='text-xl'>{question.question}</Text>
      </View>
      : null }
      
      {!finished ?
      <View 
      className="bg-blue-200 rounded-lg w-60">
        <Button
        title={question.options[0]}
        color={'black'}
        onPress={() => {
          nextQuestion();
        }}
        />
      </View>
      : null }
      
      {!finished ?
      <View
      className="bg-blue-200 rounded-lg w-60">
        <Button
        title={question.options[1]}
        color={'black'}
        onPress={() => {
          nextQuestion();
        }}
        />
      </View>
      : null }
      
      {!finished ?
      <View 
      className="bg-blue-200 rounded-lg w-60">
        <Button
        title={question.options[2]}
        color={'black'}
        onPress={() => {
          nextQuestion();
        }}
        />
      </View>
      : null }
      
      {!finished ?
      <View 
      className="bg-blue-200 rounded-lg w-60">
        <Button
        title={question.options[3]}
        color={'black'}
        onPress={() => {
          nextQuestion();
        }}
        />
      </View>
      : null }
      
      {finished?
      <View className="rounded-lg w-80 justify-center items-center space-y-[30px]">
        <Text className='text-xl text-center text-orange-800'>You're wine profile is:</Text>
        
        <Text className='text-3xl text-center text-blue-500 font-bold'>
          {wineCategory}
        </Text>
        
        <Text className='text-lg text-center text-orange-600'>
          Reccomendations:
        </Text>
        <Text className='text-2xl text-center text-orange-400'>
          {wineRecommendations[0]}
        </Text>
        <Text className='text-2xl text-center text-orange-400'>
          {wineRecommendations[1]}
        </Text>
        <Text className='text-2xl text-center text-orange-400'>
          {wineRecommendations[2]}
        </Text>
      </View>
      : null}

      {finished?
      <View 
      className="bg-yellow-300 rounded-lg w-40 h-[60px] justify-center items-center">
        <Button
        title="Reset"
        color={'black'}
        onPress={() => {
          setQuestionIdx(0);
          setFinished(false);
          setWineCategory(getRandomWineCategory());
          setWineRecommendations(getRecommendedWines(wineCategory));
        }}
        />
      </View>
      : null}

    </View>
  )
}