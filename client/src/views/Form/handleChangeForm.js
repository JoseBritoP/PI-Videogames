import { validateName, validateImage,validatePlatforms,validateGenres,validateRating,validateReleased,validateDescription } from './validate';

export const handleChangeForm = (event, form, setForm, errors, setErrors) =>{
  //? 2 Separo la propiedad en la que estoy y el valor que le agrego
  // console.log(event.target)
  // console.log(event.target.checked)
  const property = event.target.name;
  const value = event.target.value;
  const type = event.target.type;

  //? Actualizar el estado form según la propiedad
  if(property === "name" && type === "text"){
    //! NAME
    setForm({...form,[property]:value});
    validateName({...form,[property]:value},errors,setErrors)
  }

  if (property === "background_image" && type === "text") {
    setForm({ ...form, [property]: value.trim() });
    validateImage({ ...form, [property]: value.trim() }, errors, setErrors);
  }

  // if (property === "image-file" && type === "file") {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setForm({ ...form, image: file.name }); // Aquí seteamos el valor del input de la imagen al nombre del archivo
  //     // Aquí también puedes validar la imagen si es necesario
  //   };

  //   reader.readAsDataURL(file);
  // }

  if (property === "platforms" && type === "checkbox") {
    //! platforms
    const platform = event.target.value; // Sería value también

    if (form.platforms.includes(platform)) {
      // La plataforma ya está seleccionada, así que la eliminamos del array
      const updatedPlatforms = form.platforms.filter((item) => item !== platform);
      setForm({ ...form, platforms: updatedPlatforms });
      validatePlatforms({ ...form, platforms: updatedPlatforms },errors,setErrors);
    } else {
      // La plataforma no está seleccionada, así que la agregamos al array
      const updatedPlatforms = [...form.platforms, platform];
      setForm({ ...form, platforms: updatedPlatforms });
      validatePlatforms({ ...form, platforms: updatedPlatforms },errors,setErrors);
    }
  }

  if(property === "genres" && type === "checkbox"){
    //! genres
    const genre = event.target.value;
    if (form.genres.includes(genre)) {
      // La plataforma ya está seleccionada, así que la eliminamos del array
      const updatedGenres = form.genres.filter((item) => item !== genre);
      setForm({ ...form, genres: updatedGenres });
      validateGenres({ ...form, genres: updatedGenres },errors,setErrors);
    } else {
      // La plataforma no está seleccionada, así que la agregamos al array
      const updatedGenres = [...form.genres, genre];
      setForm({ ...form, genres: updatedGenres });
      validateGenres({ ...form, genres: updatedGenres },errors,setErrors);
    }
  };

  if(property === "released" && type === "date"){
    //! released
    setForm({...form,[property]:value});
    validateReleased({ ...form, [property]: value }, errors, setErrors);

  };

  if(property === "rating" && type === "number"){
    //!Rating
    setForm({...form,[property]:value});
    validateRating({...form,[property]:value},errors,setErrors)

  }

  if(property === "description"){
    //! Description
    setForm({...form,[property]:value});
    validateDescription({...form,[property]:value},errors,setErrors)

  }
}