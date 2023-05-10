import React from 'react'

export default function WhiteLayout({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <h3>WhiteLayout</h3>
      <div>{children}</div>
    </div>
  )
}
