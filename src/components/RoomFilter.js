import React from 'react'
import {useContext} from "react"
import Title from './Title'
import {RoomContext} from '../Context'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, 
        type, 
        capacity,
        price,
        maxPrice, 
        minPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;
    // get unique
    let types = getUnique(rooms,"type")
    // add all
    types = ['all',...types];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, "capacity");
    people = people.map((item,index) => {
        return <option value={item} key={index} >{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"
                       id="type"
                       value={type}
                       className="form-control"
                       onChange={handleChange}
                       >
                           {types}
                       </select>
                </div>
                {/* end of select type*/}
                      {/* capacity*/}
                      <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity"
                       id="capacity"
                       value={capacity}
                       className="form-control"
                       onChange={handleChange}
                       >
                           {people}
                       </select>
                </div>
                {/* end of capacity*/}
                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input 
                    type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price} 
                    onChange={handleChange} 
                    className="form-control">
                    </input>
                </div>
                {/*end room price*/}
                {/*size*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                      <input 
                       type="number" 
                        name="minSize" 
                        id="size" 
                        value={minSize} 
                        onChange={handleChange} 
                        className="size-input" />
                      <input 
                        type="number" 
                        name="maxSize" 
                        id="size" 
                        value={maxSize} 
                        onChange={handleChange} 
                        className="size-input" />
                    </div>
                </div>
                {/*end of size*/}
                {/*extras*/}
                 <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" 
                        name="breakfast" 
                        id="breakfast" 
                        checked={breakfast} 
                        onChange={handleChange}></input>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" 
                        name="pets" 
                        id="pets" 
                        checked={pets} 
                        onChange={handleChange}></input>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of extras*/}
            </form>
        </section>
    )
}
