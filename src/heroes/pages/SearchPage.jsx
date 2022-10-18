import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  //En Este punto instale la libreria QUERY-STRING 
  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0 );
  const showError = (q.length > 0 ) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if ( searchText.trim().length <= 1) return;
  
    navigate(`?q=${ searchText }`);

  }



  return (
    <>
      <h1>SearchPage</h1> 
      <hr />
      <div className="row">
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Buscar un Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-12 col-lg-8">
          <h4>Resultados</h4>
          <hr />

          {/* {
            ( q === '')
              ? <div className="alert alert-primary">Search a Hero</div>
              : ( heroes.length === 0 )
                && <div className="alert alert-danger">No hay resultados para <b>{ q }</b>.</div>
          } */}
          
          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a Hero
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hay resultados para <b>{ q }</b>.
          </div>


          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
