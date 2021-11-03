import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import Property from '_views/property'
import App from '_views/app'
import NotFoundPage from '_views/not-found'

const Router = () => (
  <ReachRouter>
    <App path="/">
      <Property path="/" />
    </App>
    <NotFoundPage default />
  </ReachRouter>
)

export default Router
