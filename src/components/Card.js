import React from 'react'



export const Card = ({ element }) => {
  
	return (
		<section className='element'>
             
			<div className='element-header'>
				<div className='estado'>
					<span className= {element.likes}></span>
					<h4>❤️ {element.likes}</h4>
				</div>
			</div>

			<div className='element-body'>
				<figure>
					<img src={element.webformatURL} alt={element.user} />
				</figure>

				<h2>Views 📈 {element.views}</h2>
      

				<p>
        {element.tags} 
				</p>
			</div>
		</section>
	)
}
