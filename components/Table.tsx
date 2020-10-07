import React, { FC } from 'react'
import { useData } from '~hooks/useData'
import { Row } from './Row'

export const Table: FC = () => {
  const { ghosts } = useData()

  return (
    <table>
      <tbody>
        {ghosts.map(ghost => (
          <Row key={ghost.type} {...ghost} />
        ))}
      </tbody>
    </table>
  )
}
