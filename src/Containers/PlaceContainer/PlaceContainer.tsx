import React from 'react'
import { View } from '../../Components/View/View'
import { Card } from '../../Components/Card/Card'
import { PlaceExamples } from './PlaceExample'

type ViewProps = {

}

export const PlaceContainer: React.FC<ViewProps> = (props) => {
  return (
    <View>
      {
        PlaceExamples.map(example => <Card {...example}/>)
      }
    </View>
  )
}