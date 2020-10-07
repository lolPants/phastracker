import React, { FC } from 'react'
import { ghosts } from '~data/ghosts'
import { Row } from './Row'

export const Table: FC = () => (
  <table>
    <tbody>
      {ghosts.map(ghost => (
        <Row key={ghost.type} ghost={ghost} />
      ))}
    </tbody>
  </table>
)