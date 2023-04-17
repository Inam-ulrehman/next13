'use client'

import { Button } from '@chakra-ui/react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const CreateSample = () => {
  const router = useRouter()
  const path = usePathname()
  const search = useSearchParams().get('name')
  const handleButton = () => {
    router.refresh()
    console.log('button')
  }
  return (
    <div>
      CreateSample
      <Button onClick={handleButton}>Router</Button>
    </div>
  )
}

export default CreateSample
