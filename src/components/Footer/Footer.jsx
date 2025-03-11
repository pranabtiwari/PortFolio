import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach me out!</h3>
      </div>
      <ul className='text-sm md:text-xl flex gap-4'>
        <li>
          <a href="mailto:tpranav006@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdOutlineEmail size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pranab-tiwari-518723285/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/pranabtiwari" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
