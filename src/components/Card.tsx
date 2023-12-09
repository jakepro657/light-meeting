import React from 'react'

type Props = {
  title: string,
  description: string,
  img: string
}

const Card = ({ img, title, description }: Props) => (
  
  <div className="relative overflow-hidden rounded-lg w-full max-w-xs transition-all duration-300 transform hover:scale-95 shadow-xl">
    <div className="absolute w-full h-full bg-gradient-to-t from-[#00000026] to-[#00000030] z-10"></div>
    <img className='h-72 w-full object-cover' loading='lazy' src={img} alt=""/>
    <div className="absolute bottom-0 z-30 p-6 text-left">
      <h1 className="text-black text-lg font-bold mb-2">{title}</h1>
      <p className="text-black leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Card;
