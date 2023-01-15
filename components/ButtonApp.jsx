import { Button } from 'react-native'
import React from 'react'

const ButtonApp = ({ fc }) => {
  return (
    <Button
        title='login'
        color="#3AD29F"
        onPress={fc}
        style={{
            flex: 1
        }}
    />
  )
}

export default ButtonApp