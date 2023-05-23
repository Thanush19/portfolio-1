import React from 'react'
import Resumes from '../../assets/'
const Resume = () => {
  return (
    <div>
      <embed src={Resumes} width="100%" height="500px" type="application/pdf" />
    </div>
  )
}

export default Resume