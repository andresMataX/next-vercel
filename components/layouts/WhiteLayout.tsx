import { FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const WhiteLayout = ({ children }: Props) => {
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
