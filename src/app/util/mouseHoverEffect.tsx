'use client'

import React, { useState, CSSProperties, MouseEvent, ReactNode } from 'react'

interface MouseHoverEventProps {
  children: ReactNode;
}

const MouseHoverEvent = ({ children }: MouseHoverEventProps) => {
  const [ style, setStyle ] = useState<CSSProperties>({})
  const [ overlayStyle, setOverlayStyle ] = useState<CSSProperties>({
    backgroundImage:
      'linear-gradient(105deg, transparent 40%, rgba(255, 219, 112, 0.8) 45%, rgba(132, 50, 255 ,0.6) 50%, transparent 54%)',
    backgroundSize: '130% 130%',
    backgroundPosition: '100%',
    mixBlendMode: 'color-dodge',
    transition: 'all 0.1s',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    pointerEvents: 'none',
  })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Limit the rotation angles to avoid extreme tilting
    const rotateY = Math.min(10, Math.max(-10, (-1 / 5) * x + 10))
    const rotateX = Math.min(10, Math.max(-10, (4 / 30) * y - 10))

    setOverlayStyle((prevStyle) => ({
      ...prevStyle,
      backgroundPosition: `${x / 5 + y / 5}%`,
      filter: `opacity(${Math.min(1, x / 200)}) brightness(1.2)`,
    }))

    setStyle({
      transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`,
    })
  }

  const handleMouseOut = () => {
    setOverlayStyle((prevStyle) => ({
      ...prevStyle,
      filter: 'opacity(0)',
    }))
    setStyle({ transform: 'perspective(350px) rotateY(0deg) rotateX(0deg) scale(1)' })
  }

  return (
    <div
      onContextMenu={ (e) => e.preventDefault() }
      onMouseMove={ handleMouseMove }
      onMouseOut={ handleMouseOut }
      style={ { ...style, transition: 'all 0.1s', position: 'relative', zIndex: 0 } }
    >
      <div style={ overlayStyle } />
      { children }
    </div>
  )
}

export default React.memo(MouseHoverEvent)
