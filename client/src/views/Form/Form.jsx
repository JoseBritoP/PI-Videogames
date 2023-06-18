import React, { useEffect, useState } from 'react'
import style from './Form.module.css'
import StarRatingForm from '../../components/StarRatingForm/StarRatingForm'
import ModalForm from '../../components/ModalForm/ModalForm';
import { validateName, validateImage,validatePlatforms,validateGenres,validateRating,validateReleased,validateDescription } from './validate';
import { handleChangeForm } from './handleChangeForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms, postVideogame } from '../../redux/actions';

const Form = () => {
  const dispatch = useDispatch()
  // Hardcode platforms -> Hacerlo con redux y un useState además de hacer un dispatch de la action en el useEffect
  // const platforms = [
  //   "PlayStation 5",
  //   "Xbox Series S/X",
  //   "PlayStation 4",
  //   "PC",
  //   "PlayStation 3",
  //   "Xbox 360",
  //   "Xbox One",
  //   "Nintendo Switch",
  //   "Linux",
  //   "macOS",
  //   "Android",
  //   "PS Vita",
  //   "iOS",
  //   "Xbox",
  //   "Web",
  //   "Wii U",
  //   "Nintendo 3DS",
  //   "PlayStation 2",
  //   "Dreamcast"
  // ]
  const platforms = useSelector(state => state.getAllPlatforms)
  // Hardcode genres -> Hacerlo con redux y un useState además de hacer un dispatch de la action en el useEffect
  // const genres = [
  //   {
  //     "id": "9db5c535-65af-46d8-855d-20e38666e4ea",
  //     "name": "Action"
  //   },
  //   {
  //     "id": "900fe79b-083e-4916-917f-250b1b686fd0",
  //     "name": "Indie"
  //   },
  //   {
  //     "id": "38b7bbe6-18ae-4315-8e0d-8bb902611880",
  //     "name": "Adventure"
  //   },
  //   {
  //     "id": "b9c8e641-a87c-44f2-b006-3d2bc47cdc10",
  //     "name": "RPG"
  //   },
  //   {
  //     "id": "0685960d-8685-476d-9e56-5a7b32001d5d",
  //     "name": "Strategy"
  //   },
  //   {
  //     "id": "08d7f95e-56de-49e1-a329-34a3d91a9bea",
  //     "name": "Shooter"
  //   },
  //   {
  //     "id": "4bb27eb0-9bc5-49c0-8d75-b40b462b8f08",
  //     "name": "Casual"
  //   },
  //   {
  //     "id": "71a3e7b5-0e99-485f-9dc1-1ab46e10312f",
  //     "name": "Simulation"
  //   },
  //   {
  //     "id": "40205d1d-648e-4979-8bb6-439f15700a61",
  //     "name": "Puzzle"
  //   },
  //   {
  //     "id": "00ed15a2-82cc-47ba-872a-d6f8afe2ed25",
  //     "name": "Arcade"
  //   },
  //   {
  //     "id": "a186a898-c70e-4091-889a-1f8452e07597",
  //     "name": "Platformer"
  //   },
  //   {
  //     "id": "6f00645f-ad65-474e-a483-0da676ba8fa8",
  //     "name": "Massively Multiplayer"
  //   },
  //   {
  //     "id": "26d0cfb0-478e-41b1-a487-8fe20b9a140c",
  //     "name": "Sports"
  //   },
  //   {
  //     "id": "19ddc309-721a-40c9-9bf0-12044c8f7d27",
  //     "name": "Fighting"
  //   },
  //   {
  //     "id": "d2889d98-79b2-414f-85bf-5f50638a09c0",
  //     "name": "Racing"
  //   },
  //   {
  //     "id": "a518d91c-3fc5-4a73-97af-05af7b983850",
  //     "name": "Board Games"
  //   },
  //   {
  //     "id": "44d7e59b-68ac-4650-9ad1-befe15077147",
  //     "name": "Educational"
  //   },
  //   {
  //     "id": "7914715a-f733-4add-9435-6abde53b7b06",
  //     "name": "Card"
  //   },
  //   {
  //     "id": "03068dc9-431a-4c29-b2cd-c17aff1dd6cb",
  //     "name": "Family"
  //   },
  //   {
  //     "id": "7af868e7-5cec-4268-909e-b86386182c92",
  //     "name": "Rouge-like"
  //   },
  // ]

  const genres = useSelector(state => state.getAllGenres)
  const genresMap = genres.map((genre)=> genre.name)

  // Hooks

  const [modal,setModal] = useState(false);
  
  // ?1 Form inputs -> Creo el estado local con las propiedades del form

  const [form,setForm] = useState({
    name:"",
    background_image:"",
    platforms: [],
    genres: [],
    rating: 0,
    released: "",
    description: ""
  });

  const [errors,setErrors] = useState({
    name:"",
    image:"",
    platforms: "",
    genres: "",
    rating: "",
    released: "",
    description: ""
  })
  
  useEffect(()=>{
    dispatch(getAllGenres())
    dispatch(getAllPlatforms())
  },[])

  // Handler::
  const handleChangeFormX = (event) => {
    handleChangeForm(event, form, setForm, errors, setErrors)
  }
  
    // setForm({...form,[property]:value}); //  Lo que ya tiene form y lo que quiero modificar de form, es lo que tengo en property y le quiero dar el valor value
    // validate({...form,[property]:value},errors,setErrors); //Cada vez que ocurra un cambio en el estado, llamemos a validate pasandole form, y setErrors para establecer dichos errores si las props de form no cumplen con las condiciones

    // Submit:
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(postVideogame(form))
      alert('Datos enviados...')
      setModal(true)
    };

  // Object.keys(errors) -> Con esto tenemos un array con las claves de los errores, por eso podemos usar la propiedad .length de los arrays
  // Object.values(form).some(value => value === "") -> Con esto, tenemos un array de los valores del form, si uno está vacío, dará true, gracias al método some de los arrays
  // const disable = Object.keys(errors).length > 0 || Object.values(form).some(value => value === '')
  const disable = Object.values(errors).some(error => error !== '') || form.name === "";



  return (
    <form className={style['form-container']} onSubmit={handleSubmit}>
      <h1>CREATE A VIDEOGAMECARD!</h1>
      <fieldset className={style['form-fieldset']}>
     
        <div className={style['form-name']}>
          <label htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder='Name your game...' value={form.name} onChange={handleChangeFormX} className={form.name && !errors.name ? style.success : errors.name ? style.error : ""}/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style['form-image']}>
          <label htmlFor="background_image">imagen</label>
          <div className={style['form-inputs']}>
            <input type="text" name='background_image' placeholder='Text the url image from your game' value={form.image} onChange={handleChangeFormX} className={form.image && !errors.image ? style.success : errors.image ? style.error : ""}/>
            <input type="file" name="image-file" accept="image/*" onChange={handleChangeFormX} className={style['form-inputs-file']} />
          </div>
          {errors.image && <span>{errors.image}</span>}
        </div>

        <div className={style['form-platforms']}>
          <label htmlFor="platforms">Platforms:</label>
          <div className={style['form-platforms-container']}>
            {platforms.map((platform, index) => (
              <div className={style['form-platforms-div']} key={index}>
                <input
                  type="checkbox"
                  name="platforms"
                  value={platform} // Cada checkbox tiene un valor correspondiente a la plataforma
                  checked={form.platforms.includes(platform)} // Verifica si la plataforma está seleccionada en el estado form
                  onChange={handleChangeFormX}
                />
                <label htmlFor="">{platform}</label>
              </div>
            ))}
          </div>
          {errors.platforms && <span>{errors.platforms}</span>}
        </div>

        <div className={style['form-genres']}>
          <label htmlFor="genres">Genres:</label>
          <div className={style['form-genres-container']}>
          {genresMap.map((genreName, index) => (
            <div className={style['form-genres-div']} key={index}>
              <input
                type="checkbox"
                name="genres"
                value={genreName}
                checked={form.genres.includes(genreName)}
                onChange={handleChangeFormX}
              />
              <label>{genreName}</label>
            </div>))
          }
          </div>
          {errors.genres && <span>{errors.genres}</span>}
        </div>

        <div className={style['form-rating-released-container']}>
          <div className={style['form-rating']}>
            <StarRatingForm rating={form.rating} setRating ={(selectStart)=>setForm({...form, rating:selectStart})} handleChangeForm={handleChangeFormX} className={form.rating && !errors.rating ? style.success : errors.rating ? style.error : ""}/>
            {errors.rating && <span>{errors.rating}</span>}
          </div>

          <div className={style['form-released']}>
            <label htmlFor="released">Released</label>
            <input type="date" name="released" placeholder="Text the date released from your game" id="dateInput" value={form.released} onChange={handleChangeFormX} className={form.released && !errors.released ? style.success : errors.released ? style.error : ""}/>
            {errors.released && <span>{errors.released}</span>}
          </div>
        </div>

        <div className={style['form-description']}>
          <label htmlFor="description">Description:</label>
          <textarea name="description" cols="80" rows="10" placeholder="Text the description for your game" value={form.description} onChange={handleChangeForm} className={form.description && !errors.description ? style.success : errors.description ? style.error : ""}></textarea>
          {errors.description && <span>{errors.description}</span>}
        </div>
      </fieldset>
      <div className={style['form-button']}>
        {/* <button type='submit' > Create </button> */}
        <button type='submit' disabled={disable} > Create </button>
      </div>
        {/* {modal && <ModalForm/>} */}
    </form>
  )
}

export default Form