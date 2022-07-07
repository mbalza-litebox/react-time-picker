import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import moment from 'moment'

import TimePicker from '../src/'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  background-color: tomato;
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
`

storiesOf('Timepicker', module).add('First', () => (
  <Wrapper>
    <TimePicker
      name="start_time"
      minuteStep={15}
      showSecond={false}
      placeholder={'Start Time'}
      use12Hours={true}
      defaultValue={moment()}
    />
  </Wrapper>
))
