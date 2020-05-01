import React from 'react';

const ImageList = props => {
  const images = props.images.map((element) => {
    return <img src={element.urls.regular} />
  })
  
  return (
    <div>{images}</div>
  )
}

export default ImageList;