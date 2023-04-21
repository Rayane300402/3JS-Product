import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        // add own preset colors
        presetColors={[
          '#000000',
          '#ffffff',
          '#ff0000',
          '#80C670',
          '#726DE8',
          '#2CCCE4',
          '#ff8a65',
          '#ff96ad',
          '#5f123d',
          '#512314',
          '#7098da',
          '#202e53'
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker