import React from 'react'

const PreviewPicture = (props) => {
  const { pictureURL } = props;
  return (
    <div>
      <img src={pictureURL} alt="" />
    </div>
  )
}

export default PreviewPicture
