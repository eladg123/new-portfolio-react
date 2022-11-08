import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import GitHub from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import NodeJS from '../assets/node.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import MySQL from '../assets/mysql.png'
import Typescript from '../assets/typescript.png'
import MongoDB from '../assets/mongodb.png'
import Bootstrap from '../assets/bootstrap.png'
import { Element } from 'react-scroll'

const Experience = () => {
  const techniques: {
    id: number
    src: string
    title: string
    style: string
  }[] = [
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: Javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: ReactLogo,
      title: 'React JS',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: ReactLogo,
      title: 'React Native',
      style: 'shadow-blue-600',
    },
    {
      id: 7,
      src: GitHub,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 8,
      src: NodeJS,
      title: 'NodeJS',
      style: 'shadow-green-500',
    },
    {
      id: 9,
      src: MySQL,
      title: 'MySQL',
      style: 'shadow-blue-500',
    },
    {
      id: 10,
      src: Typescript,
      title: 'Typescript',
      style: 'shadow-sky-500',
    },
    {
      id: 11,
      src: MongoDB,
      title: 'MongoDB',
      style: 'shadow-green-500',
    },
    {
      id: 12,
      src: Bootstrap,
      title: 'Bootstrap',
      style: 'shadow-blue-500',
    },
  ]
  return (
    <Element
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techniques.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto rounded-xl" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Experience
