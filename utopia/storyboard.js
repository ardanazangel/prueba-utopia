import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '../src/app'
import { Playground } from '../src/playground'

export var storyboard = (
  <Storyboard>
    <Scene
      id='app-scene'
      commentId='app-scene'
      style={{
        width: 390,
        height: 844,
        position: 'absolute',
        left: 1144,
        top: 64,
      }}
      data-label='My App'
    >
      <App style={{}} />
    </Scene>
  </Storyboard>
)
