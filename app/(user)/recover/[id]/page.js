import { useSearchParams } from 'next/navigation'
import React from 'react'

const RecoverPassword = () => {
  const params = useSearchParams()
  console.log(params)
  return <div>RecoverPassword</div>
}

export default RecoverPassword
