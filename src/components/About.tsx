import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-2xl mt-20">
          Hey, I'm Elad Gabay, a passionate Full Stack developer. Since I was a
          child, I've always loved computers, gaming and I started programming
          as a teenager at the school . Finally, I could use my logical side to
          code and my creative side to design. Out of the office you will find
          me playing basketball and surfing.
        </p>
        <br />
      </div>
    </Element>
  )
}

export default About
