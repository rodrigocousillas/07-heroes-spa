import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {
    
    name = name.toLocaleLowerCase().trim();

    if ( name.length === 0 ) return []; 
    //Si el nombre viene vacio, retorno un [objeto vacio]

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );
    

}