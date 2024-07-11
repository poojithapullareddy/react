import React from 'react'

 function rectmemo(name) {
  return (
    <div>{name}</div>
  )
}
export default React.memo(rectmemo)