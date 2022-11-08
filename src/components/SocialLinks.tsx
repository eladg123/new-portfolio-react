import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/elad-gabay-388b63209/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/eladg123',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:elad28100@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Elad-Gabay-CV.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              'flex justify-between items-center w-40 h-14 px-4  ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]' +
              ' ' +
              link.style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={link.href}
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              <>{link.child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
