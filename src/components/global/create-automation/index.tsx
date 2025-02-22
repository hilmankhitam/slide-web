import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons/automation-duotone-white'

type Props = {}

const CreateAutomation = (props: Props) => {

    //WIP: Create the automation in the database using mutate
  return (
    <Button className="
        lg:px-10 py-6 bg-gradient-to-br from-[#3352cc] to-[#1c2d70] font-medium hover:opacity-80 text-white rounded-full
    ">
        <Loader state={false}>
            <AutomationDuoToneWhite />
            <p className="lg:inline-button">Create an Automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation