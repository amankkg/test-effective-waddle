// @flow
import React from 'react'
import Head from 'next/head'
import {css} from 'linaria'

import {Span} from '../components/span'

const cn = css`
  color: purple;
`

export default () => (
  <>
    <Head>
      <title>test app</title>
    </Head>
    <Span className={cn}>Hey!</Span>
  </>
)
