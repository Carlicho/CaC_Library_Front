import './ResultsList.css';

const SearchResultsList = ({ results = [] }) => {
  return (
    <div className='resultList'>
      {results.map((result, id) => {
        return <div key={id}>{result.nombre}</div>; 
      })}
    </div>
  );
};

export default SearchResultsList;
