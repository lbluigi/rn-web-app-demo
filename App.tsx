/* eslint-disable react/style-prop-object */
import React from 'react'
import '@expo/match-media'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  NunitoSans_400Regular as Nunito400,
  NunitoSans_700Bold as Nunito700,
  NunitoSans_900Black as Nunito900,
} from '@expo-google-fonts/nunito-sans'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import useTailwind from 'hooks/useTailwind'
import CustomText from 'components/CustomText'

const Wrapper: React.FC = ({ children }) => {
  const { tw } = useTailwind()

  return (
    <SafeAreaView>
      <View style={tw('py-12 items-center')}>{children}</View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const App: React.FC = () => {
  const { tw } = useTailwind()

  const [fontsLoaded] = useFonts({
    Nunito400,
    Nunito700,
    Nunito900,
  })

  return (
    <Wrapper>
      {!fontsLoaded ? (
        <ActivityIndicator />
      ) : (
        <View style={tw('bg-blue-200 px-3 py-1 rounded-full')}>
          <CustomText style={tw('text-white text-xl p-2')}>
            This is <CustomText weight={900}>Things.</CustomText>
          </CustomText>
        </View>
      )}
    </Wrapper>
  )
}

export default App
