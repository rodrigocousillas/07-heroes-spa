import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () =>  getHeroesByPublisher( publisher ), [ publisher] );

  return (
    <div className="row">
       
            {
                heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }    
                    />
                ))
            }
        </div>
   
  )
}
