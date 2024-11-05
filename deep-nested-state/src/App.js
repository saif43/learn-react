import {initialTravelPlan} from './places'
import { useState } from 'react';

function PlaceTree({place}) {
  const childPlaces = place.childPlaces
  return (
    <>
      <li>{place.title}</li>
      <ol>
      {
          childPlaces.map(place => {
            return <PlaceTree key={place.id} place={place} />
          })
        }
      </ol>
    </>
  )
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan)
  const planets = plan.childPlaces

  return (
    <div className="App">
      <h2>Places to visit</h2>
      <ol>
        {
          planets.map(place => {
            return <PlaceTree key={place.id} place={place} />
          })
        }
      </ol>
    </div>
  );
}
