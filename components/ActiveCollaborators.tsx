import { useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image';
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ActiveCollaborators = () => {

  const others = useOthers();

  const collaborators = others.map((other) => other.info);

  return (
    <ul className='collaborators-list'>
      {collaborators.map(({ id, avatar, name, color }) => (
        <li key={id} className=''>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={avatar}
                  alt={name}
                  width={100}
                  height={100}
                  className='rounded-full inline-block size-8 ring-2 ring-dark-100'
                  style={{ border: `3px solid ${color}` }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  )
}

export default ActiveCollaborators