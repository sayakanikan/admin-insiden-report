import React from 'react'
import { useParams } from 'react-router-dom'
import Layouts from '../Layouts'

const UpdateAdmin = () => {
  const params = useParams();
  return (
    <Layouts>
      coba params update {params.id}
    </Layouts>
  )
}

export default UpdateAdmin