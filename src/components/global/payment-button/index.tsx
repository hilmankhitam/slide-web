import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
  return (
    <Button className='
        bg-gradient-to-br from-[#9685db] to-[#cc3bd4] via-[#9434e6] text-white rounded-full font-bold
    '>Upgrade</Button>
  )
}

export default PaymentButton