import React from 'react';
import {useQuery} from 'react-query'

import fetchRemoteMessage from './fetchRemoteMessage';

export default function Hello() {
  console.log("### > Hello")
  const {isLoading, error, data} = useQuery('fetchRemoteMessage', () => fetchRemoteMessage('RemoteHello1'), {
    retry: false
  })

  if (!isLoading) {
    if (data === undefined) {
      throw new Error('Data is undefined, there is a gap between isLoading and data')
    }
  }

  return <div>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: {(error as Error)?.message}</div>}
    {data !== undefined && <div>Hello, {data}</div>}
  </div>
};
