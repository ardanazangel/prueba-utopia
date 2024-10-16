import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'
import { FlexRow } from 'utopia-api'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(#00000066 0%, #00000066 100%), url(https://carniceriaederra.com/wp-content/uploads/2020/10/Ederra_Aralar_Vacas_AltaResolucio%CC%81n_0032-1536x931.jpg)',
          backgroundSize: 'auto, auto',
          padding: '0px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            width: '100%',
            height: 'max-content',
            textAlign: 'center',
            fontSize: '48px',
          }}
        >
          Carne de potro raza pottoka
        </h1>
        <button
          style={{
            fontSize: '1rem',
            width: 'max-content',
            borderRadius: 0,
            backgroundColor: 'rgb(237, 185, 125, 1)',
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 12,
            paddingBottom: 12,
          }}
        >
          Compra ahora
        </button>
      </div>
    </FlexCol>
  )
}
