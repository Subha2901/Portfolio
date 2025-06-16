import React from 'react'


export default function Loading() {
  const loadingStyle = {
    height: '35%',
    width: '15%'
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '600px', alignItems: 'center' }}>
      <img style={loadingStyle} src='/Loading.gif' alt='Loading...' />
    </div>
  )
}
