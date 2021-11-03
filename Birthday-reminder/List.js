import React from 'react'

export default function List({people,gender}) {
    // console.log(props)
    return (
        <div>
            
            {people.map(person =>
            {
                const {name,id,age,image} = person;
            return (
                <div key={id} className='person'>
                    <img style={{marginRight:'7px'}} src={image} alt={name}></img>
                    <div className='text'>
                        <h4>{name}</h4>
                        <p>{age} years old</p>
                    </div>
                </div>
            )
            })
        }
        </div>
    )
}
