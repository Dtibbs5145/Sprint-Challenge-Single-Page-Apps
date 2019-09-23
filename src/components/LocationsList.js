import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location`)
            .then(res => {
                setLocation(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [location]);

    return (
        <div>
                <div>
                {location.map(loc => {
                    return (
                    <LocationCard key={loc.id} location={location} />
                    )
                })}
            </div>
        </div>
    )
}