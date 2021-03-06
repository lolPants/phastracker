import type { FC } from 'react'
import { BORDER_RADIUS } from '~constants'
import { useData } from '~hooks/useData'
import { Row } from './Row'

export const Table: FC = () => {
  const { ghosts } = useData()

  return (
    <div className='container'>
      <style jsx>
        {`
          .container
            width 100%
            border-radius ${BORDER_RADIUS}
            border 1px solid rgb(80, 80, 80)
            margin-bottom 0.3rem
            margin-top 1.5rem

          table
            width 100%
            border-collapse collapse
        `}
      </style>

      <table>
        <tbody>
          {ghosts.map(ghost => (
            <Row key={ghost.type} {...ghost} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
