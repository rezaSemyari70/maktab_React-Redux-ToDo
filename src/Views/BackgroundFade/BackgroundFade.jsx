import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './BackgroundFade.css'

const slides = [
  
  { id: 0, url: 'goldengate.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59' },
  { id: 1, url: 'mountains.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59' },
  { id: 2, url: 'alarmclock.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59' },
  { id: 3, url: 'bridge.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59' },
  { id: 4, url: 'transport.jpg?auto=compress&w=900&h=600&fit=crop' },
]

const BackgroundFade = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id , {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 3000), [])
  return transitions.map(({ item, props, key }) => (
    <div key={item.id}>
      <animated.div
      className="bg"
      style={{ ...props, backgroundImage: `url(https://assets.imgix.net/unsplash/${item.url}&auto=format&fit=crop)` }}
    />
    </div>
  ))
}

export default BackgroundFade;