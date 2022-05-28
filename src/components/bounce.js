import React, { useState } from 'react'
import MovingComponent from 'react-moving-text'

const AnimationsForChaining = ["shakeVertical", "popIn", "bounce", "blur", "flash", "zoomIn"]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType(AnimationsForChaining[animationIndex+1])
  }

  return (
    <MovingComponent style={{
          paddingTop: "10rem"
    }}
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      fillMode="forwards"
      iteration={1000}>
     &#171; scroll Down &#187;
    </MovingComponent>
  )
}
export default AnimationChain;