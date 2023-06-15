import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'

const Cards = (props) => {

	const {videogames} = props;
	return (
    <div className={style['card-grid']}>
			{videogames?.map((videogame)=>{
				return <Card
					key={videogame.id}
					id={videogame.id}
					name={videogame.name}
					image={videogame.background_image}
					genres={videogame.genres.map((genre)=> genre.name + " ")}
					platforms= {videogame.platforms.map((platform)=>platform.name + " ")}
					released = {videogame.released}
					rating = {videogame.rating}
				/>
			})}
		</div>
  )
}

export default Cards