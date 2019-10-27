import React from 'react'
import { View } from '../../Components/View/View'
import { Card } from '../../Components/Card/Card'
import { FoodExamples } from './FoodsExample'

type ViewProps = {

}

export const FoodsContainer: React.FC<ViewProps> = (props) => {
  return (
    <View>
      {
        FoodExamples.map(example => <Card {...example}/>)
      }
    </View>
  )
}