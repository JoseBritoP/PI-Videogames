import React, { useEffect, useState } from 'react'
import style from './Form.module.css'
import StarRatingForm from '../../components/StarRatingForm/StarRatingForm'
import ModalForm from '../../components/ModalForm/ModalForm';
import { handleChangeForm } from './handleChangeForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms, postVideogame } from '../../redux/actions';

const Form = () => {
  const dispatch = useDispatch()

  const platforms = useSelector(state => state.getAllPlatforms)

  const genres = useSelector(state => state.getAllGenres)
  const genresMap = genres.map((genre)=> genre.name)

  // Hooks

  const [modal, setModal] = useState(false);
  const [load,setLoad] = useState(false); // -> Para que no me haga dispatch para tener los géneros y platforms cada vez que se ingrese a form
  
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
  
  useEffect(() => {
    if (!load && genres.length === 0 && platforms.length === 0) {
      // Realizar la petición solo si no se ha cargado previamente y los datos no están en el store
      dispatch(getAllGenres());
      dispatch(getAllPlatforms());
      setLoad(true);
    }
  }, [dispatch, load, genres, platforms]);

  // Handler:?
  const handleChangeFormX = (event) => {
    handleChangeForm(event, form, setForm, errors, setErrors)
  }
  
    // setForm({...form,[property]:value}); //  Lo que ya tiene form y lo que quiero modificar de form, es lo que tengo en property y le quiero dar el valor value
    // validate({...form,[property]:value},errors,setErrors); //Cada vez que ocurra un cambio en el estado, llamemos a validate pasandole form, y setErrors para establecer dichos errores si las props de form no cumplen con las condiciones

    // Submit:
  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(true);
    dispatch(postVideogame(form))
    alert('Datos enviados...')
  };

  // Object.keys(errors) -> Con esto tenemos un array con las claves de los errores, por eso podemos usar la propiedad .length de los arrays
  // Object.values(form).some(value => value === "") -> Con esto, tenemos un array de los valores del form, si uno está vacío, dará true, gracias al método some de los arrays
  // const disable = Object.keys(errors).length > 0 || Object.values(form).some(value => value === '')
  const disable = Object.values(errors).some(error => error !== '') || form.name === "";

  return (
    <form className={style['form-container']} onSubmit={handleSubmit}>
      <h1>CREATE YOUR <span className={style['form-container-span']}>VIDEOGAMECARD!</span></h1>
      {modal && <ModalForm setModal={setModal}/>}
      {/* <ModalForm/> */}
      <fieldset className={style['form-fieldset']}>
        <div className={style['form-name-image-container']}>
          <div className={style['form-name']}>
            <label htmlFor="name">Name: </label>
              <input type="text" name="name" placeholder='Name your game...' value={form.name} onChange={handleChangeFormX} className={form.name && !errors.name ? style.success : errors.name ? style.error : ""}/>
              {errors.name && <span>{errors.name}</span>}
          </div>
          <div className={style['form-image']}>
            <label htmlFor="background_image">imagen</label>
            <div className={style['form-inputs']}>
              <input type="text" name='background_image' placeholder='Text the url image from your game' value={form.image} onChange={(event) => handleChangeFormX(event, form, setForm, errors, setErrors)} className={form.image && !errors.image ? style.success : errors.image ? style.error : ""}/>
              {/* <input type="file" name="image-file" id="imageFileInput" accept="image/*" onChange={handleChangeFormX} className={style['form-inputs-file']} /> */}
            </div>
            {errors.image && <span>{errors.image}</span>}
          </div>
        </div>
        <div className={style['form-platforms']}>
          <label htmlFor="platforms">Platforms:</label>
          <div className={style['form-platforms-container']}>
            {platforms.map((platform, index) => (
              <div className={style['form-platforms-div']} key={index}>
                <input type="checkbox" name="platforms" value={platform} onChange={(event) => handleChangeFormX(event, form, setForm, errors, setErrors)}/>
                {/* // Cada checkbox tiene un valor correspondiente a la plataforma checked={form.platforms.includes(platform)} // Verifica si la plataforma está seleccionada en el estado form onChange={handleChangeFormX} */}
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
              <input type="checkbox" name="genres" value={genreName} checked={form.genres.includes(genreName)} onChange={(event) => handleChangeFormX(event, form, setForm, errors, setErrors)}/>
              <label>{genreName}</label>
            </div>
          ))}
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
          <textarea name="description" cols="90" rows="10" placeholder="Text the description for your game" value={form.description} onChange={handleChangeFormX} className={form.description && !errors.description ? style.success : errors.description ? style.error : ""}></textarea>
          {errors.description && <span>{errors.description}</span>}
        </div>
      </fieldset>
      <div className={style['form-button']}>
        <button type='submit' disabled={disable} > Create </button>
      </div>
    </form>
  )
}

export default Form