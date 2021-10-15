import useTailwind from 'hooks/useTailwind'
import React from 'react'
import { Text, View } from 'react-native'

const Flex = () => {
  const { tw, lg } = useTailwind()

  return (
    <View
      style={tw('bg-blue-300 p-5', { lg: 'bg-yellow-800 flex-row' }, { lg })}>
      <View>
        <Text>Left</Text>
      </View>
      <View>
        <Text>Right</Text>
      </View>
    </View>
  )
}

export default Flex
