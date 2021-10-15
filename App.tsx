/* eslint-disable react/style-prop-object */
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View, Text } from 'react-native'
import useTailwind from 'hooks/useTailwind'

const App = () => {
  const { tw, sm, md, lg, xl } = useTailwind()

  return (
    <SafeAreaView>
      <View style={tw('pt-12 items-center')}>
        <View
          style={tw(
            'bg-blue-200 px-3 py-1 rounded-full',
            {
              sm: 'bg-black',
              md: 'bg-yellow-500',
              lg: 'bg-purple-400',
              xl: 'bg-blue-800',
            },
            { sm, md, lg, xl }
          )}>
          <Text style={tw('text-white font-semibold')}>Hello Tailwind</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default App
