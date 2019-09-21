import React from 'react'
import styled from 'styled-components'
import {Text} from 'react-native'
import {connect} from 'react-redux'

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`

function ArtistsScene({countArtits}) {
  return (
    <Container>
      <Text>Cantidad de artistas Artistas {countArtits}</Text>
    </Container>
  )
}
const mapStateToProps = ({counter}) => {
  return {
    countArtits: counter,
  }
}
export default connect(mapStateToProps)(ArtistsScene)
