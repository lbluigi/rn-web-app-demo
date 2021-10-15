import React, { memo, useMemo } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

interface Props {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
  weight?: number
}

interface fontFamilyInterface {
  fontFamily: string
}

const CustomText: React.FC<Props> = (
  { children, style, weight } = { children: '', style: {}, weight: 400 }
) => {
  const fontFamily: fontFamilyInterface = useMemo(() => {
    switch (weight) {
      case 400:
      default:
        return { fontFamily: 'Nunito400' }

      case 700:
        return { fontFamily: 'Nunito700' }

      case 900:
        return { fontFamily: 'Nunito900' }
    }
  }, [weight])

  return <Text style={[fontFamily, style]}>{children}</Text>
}

export default memo(CustomText)
