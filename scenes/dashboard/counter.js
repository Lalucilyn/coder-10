import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'

const BoxView = styled.View`
  flex-direction: row;
`

const CustomButton = styled.TouchableOpacity`
  background: lightgray;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`
const CustomText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`

export const Counter = ({increment, decrement, value}) => {
  return (
    <>
      <CustomText>{value}</CustomText>
      <BoxView>
        <CustomButton onPress={increment}>
          <CustomText>+</CustomText>
        </CustomButton>
        <CustomButton onPress={decrement}>
          <CustomText>-</CustomText>
        </CustomButton>
      </BoxView>
    </>
  )
}
