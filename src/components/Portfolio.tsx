import React from 'react'
import chicagoBulls from '../assets/portfolio/chicago.png'
import weather from '../assets/portfolio/weather.png'
import createSet from '../assets/portfolio/create-set.png'
import footShop from '../assets/portfolio/footshop.jpg'
import shoppingCart from '../assets/portfolio/shopping-cart.png'
import socialMedia from '../assets/portfolio/socialmedia.png'
import { Element } from 'react-scroll'

const Portfolio = () => {
  const withWebBTNstyle = 'h-auto p-3 duration-200 hover:scale-105 mr-20'
  const withoutWebBTNstyle = 'h-auto p-3 duration-200 hover:scale-105'
  const portfolios: {
    id: number
    src: string
    link: string
    web?: string
  }[] = [
    {
      id: 1,
      src: socialMedia,
      link: 'https://github.com/eladg123/sm-mern-server',
      web: 'https://memories-social-media-eg.netlify.app/posts',
    },
    {
      id: 2,
      src: weather,
      link: 'https://github.com/eladg123/weather-app',
      web: 'https://weather-app-egil.netlify.app/',
    },
    {
      id: 3,
      src: footShop,
      link: 'https://github.com/eladg123/FootStareCommerce',
    },
    {
      id: 4,
      src: shoppingCart,
      link: 'https://github.com/eladg123/shoppingCart-redux-toolkit',
    },
    {
      id: 5,
      src: createSet,
      link: 'https://github.com/eladg123/create-set-typescript',
    },
    {
      id: 6,
      src: chicagoBulls,
      link: 'https://github.com/eladg123/Mern-Chicago-Bulls-Client',
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
          {portfolios.map(({ id, src, link, web }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover	h-48 w-96"
              />
              <div className="flex flex-row  items-center justify-center">
                <button className={web ? withWebBTNstyle : withoutWebBTNstyle}>
                  <a href={link} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
                {web && (
                  <button className="h-auto p-3 duration-200 hover:scale-105">
                    <a href={web} target="_blank" rel="noreferrer">
                      Web
                    </a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Portfolio
