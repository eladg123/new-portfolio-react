import React from 'react'
import chicagoBulls from '../assets/portfolio/chicago.png'
import cinema from '../assets/portfolio/cinema.png'
import createSet from '../assets/portfolio/create-set.png'
import footShop from '../assets/portfolio/footshop.jpg'
import shoppingCart from '../assets/portfolio/shopping-cart.png'
import studentSite from '../assets/portfolio/studentsite.png'
import { Element } from 'react-scroll'

const Portfolio = () => {
  const portfolios: { id: number; src: string; link: string }[] = [
    {
      id: 1,
      src: footShop,
      link: 'https://github.com/eladg123/FootStareCommerce',
    },
    {
      id: 2,
      src: shoppingCart,
      link: 'https://github.com/eladg123/shoppingCart-redux-toolkit',
    },
    {
      id: 3,
      src: createSet,
      link: 'https://github.com/eladg123/create-set-typescript',
    },
    {
      id: 4,
      src: cinema,
      link: 'https://github.com/eladg123/Cinema-Site',
    },
    {
      id: 5,
      src: chicagoBulls,
      link: 'https://github.com/eladg123/Mern-Chicago-Bulls-Client',
    },
    {
      id: 6,
      src: studentSite,
      link: 'https://github.com/eladg123/Students-site',
    },
  ]

  return (
    <Element
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 ml-10 mr-10 sm:px-0 ">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover	h-48 w-96"
              />
              <div className="flex items-center justify-center ">
                <button className="h-auto p-3 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Portfolio
