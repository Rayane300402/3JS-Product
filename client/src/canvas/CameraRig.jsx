import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'

const CameraRig = ({ children }) => {
  const snap = useSnapshot(state)
  const group = useRef();

  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set initial position of model, done to make sure shirt size works on all different screen sizes
    let tragetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakPoint) tragetPosition = [0, 0, 2];
      if (isMobile) tragetPosition = [0,0.2,2.5];
    } else {
      if(isMobile) tragetPosition = [0,0,2.5];
      else tragetPosition = [0, 0, 2];
    }

    // set model camera, animates and takes vectors, shallow vextors and scalars, takes start value of time of animation, change in value aniamtion will make, controls amount of damping, damp3 uses a cubic damping effect instead of linear like easing.damp
    easing.damp3(
      state.camera.position,
      tragetPosition,
      0.25,
      delta
    )

    // set the modal relation smoothly, same as damp3 except has period of oscillation, amplitude  as well returns value that the aniamtion should be agt bas on para. usesexponential decay formula to calculate damping effect
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      /** Frame delta, for refreshrate independence */
      delta
    )

  })


  return (
    <group  ref={group}>
      {children}
    </group>
  )
}

export default CameraRig