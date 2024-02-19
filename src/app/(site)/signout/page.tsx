import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Signout = (props: Props) => {

  return (
    redirect("/")
    
  )
}

export default Signout