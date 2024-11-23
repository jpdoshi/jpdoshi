import React from 'react'
import '@google/model-viewer';

const ModelViewer = ({ style, src, options }) => {
  return (
    <model-viewer
      src={src}
      style={style}
      alt={src}
      autoplay
      disable-tap
      {...options}
    />
  )
}

export default ModelViewer
