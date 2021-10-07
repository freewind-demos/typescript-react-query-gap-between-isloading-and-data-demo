import React from 'react'
import ReactDOM from 'react-dom'
import {QueryClientProvider, QueryClient} from 'react-query'

import Hello from './hello'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Hello/>
  </QueryClientProvider>,
  document.body
)
