import React from 'react'
import style from './AsideFilter.module.css'
import { useDispatch } from 'react-redux';
import { filteredVideogamesByGenre } from '../../../redux/actions';
import useAsideSetters from '../../../hooks/useAsideSetters';
import AsideOrigin from '../AsideOrigin/AsideOrigin';

const AsideFilter = (props) => {

  const {resetPagination} = props;
  const dispatch = useDispatch();

  const {setGenreInput, setAlpOrder, setRatingOrder } = useAsideSetters();
  // const genres = useSelector (state => state.getAllGenres)
  const genres = [
    {
      "id": "9db5c535-65af-46d8-855d-20e38666e4ea",
      "name": "Action"
    },
    {
      "id": "900fe79b-083e-4916-917f-250b1b686fd0",
      "name": "Indie"
    },
    {
      "id": "38b7bbe6-18ae-4315-8e0d-8bb902611880",
      "name": "Adventure"
    },
    {
      "id": "b9c8e641-a87c-44f2-b006-3d2bc47cdc10",
      "name": "RPG"
    },
    {
      "id": "0685960d-8685-476d-9e56-5a7b32001d5d",
      "name": "Strategy"
    },
    {
      "id": "08d7f95e-56de-49e1-a329-34a3d91a9bea",
      "name": "Shooter"
    },
    {
      "id": "4bb27eb0-9bc5-49c0-8d75-b40b462b8f08",
      "name": "Casual"
    },
    {
      "id": "71a3e7b5-0e99-485f-9dc1-1ab46e10312f",
      "name": "Simulation"
    },
    {
      "id": "40205d1d-648e-4979-8bb6-439f15700a61",
      "name": "Puzzle"
    },
    {
      "id": "00ed15a2-82cc-47ba-872a-d6f8afe2ed25",
      "name": "Arcade"
    },
    {
      "id": "a186a898-c70e-4091-889a-1f8452e07597",
      "name": "Platformer"
    },
    {
      "id": "6f00645f-ad65-474e-a483-0da676ba8fa8",
      "name": "Massively Multiplayer"
    },
    {
      "id": "26d0cfb0-478e-41b1-a487-8fe20b9a140c",
      "name": "Sports"
    },
    {
      "id": "19ddc309-721a-40c9-9bf0-12044c8f7d27",
      "name": "Fighting"
    },
    {
      "id": "d2889d98-79b2-414f-85bf-5f50638a09c0",
      "name": "Racing"
    },
    {
      "id": "a518d91c-3fc5-4a73-97af-05af7b983850",
      "name": "Board Games"
    },
    {
      "id": "44d7e59b-68ac-4650-9ad1-befe15077147",
      "name": "Educational"
    },
    {
      "id": "7914715a-f733-4add-9435-6abde53b7b06",
      "name": "Card"
    },
    {
      "id": "03068dc9-431a-4c29-b2cd-c17aff1dd6cb",
      "name": "Family"
    },
    {
      "id": "7af868e7-5cec-4268-909e-b86386182c92",
      "name": "Rouge-like"
    },
  ];

  const handleGenreFChange = (event) => {
    const genreValue = event.target.value;
    setGenreInput(genreValue);
    if (genreValue !== "All") { 
      resetPagination();
      setAlpOrder("---");
      setRatingOrder(0);
    }
    dispatch(filteredVideogamesByGenre(genreValue));
  };

  return (
    <div className={style['aside-filtered']}>
    <h1>Filter by:</h1>
    <p>Genres</p>
    <select name="genre" id="" onChange={handleGenreFChange}>
      <option value="All">---</option>
      <option value="All">All</option>
    {genres?.map((genre) => (
      <option key={genre.id} value={genre.name}>{genre.name}</option>
    ))}
    </select>
    <AsideOrigin resetPagination= {resetPagination}/>
  </div>
  )
}

export default AsideFilter