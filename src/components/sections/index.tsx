import React from 'react'

type Props = {
    type: string,
    topic: string,
}

const Sections = ({type, topic}: Props) => {
  return (
    <div>
        <h2>{topic}</h2>
        {type }
    </div>
  )
}

export default Sections