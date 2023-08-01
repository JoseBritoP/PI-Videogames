export const validateName = (form,errors,setErrors) => {
   if(form.name === ""){
    setErrors({...errors,name:"El nombre no puede estar vacío"})
  } else if(form.name.trim() === ""){
    setErrors({...errors,name: "El nombre no puede estar conformado por espacios"})
  } else if(form.name.length < 5){
    setErrors({...errors,name:"El nombre debe tener al menos 5 caracteres"})
  }  else if(!/^[A-Za-z0-9:-\s]+$/.test(form.name)){
    setErrors({...errors,name: "El nombre no puede contener un símbolo"})
  } else{
    setErrors({...errors,name:""})
  }
};

export const validateImage = (form, errors, setErrors) => {
  // console.log("image")
  // console.log(form.background_image)
  const image = form.background_image.split("?")[0];

  if (image === "") {
    setErrors({ ...errors, image: "El input de la imagen no puede estar vacío" });
  } else if (image.trim() === "") {
    setErrors({ ...errors, image: "El input de la imagen no puede estar compuesto por espacios" });
  } else if (!/\.(jpg|jpeg|png|gif|bmp)$/.test(image)) {
    setErrors({ ...errors, image: "La imagen debe tener formato jpg, png o similares" });
  } else {
    setErrors({ ...errors, image: "" });
  }
};

export const validatePlatforms = (form,errors,setErrors) => {
  const maxPlatforms = 19;
  if(form.platforms.length === 0) {
    setErrors({...errors,platforms: "El juego debe estar en al menos, una plataforma"})
  } else if(form.platforms.length === maxPlatforms){
    setErrors({...errors,platforms: "El juego no puede estar en todas las plataformas"})
  }else {
    setErrors({...errors,platforms:""});
  }
};

export const validateGenres = (form,errors,setErrors) => {
  const maxGenres = 20;
  if(form.genres.length === 0) {
    setErrors({...errors,genres: "El juego debe tener al menos un género"})
  } else if(form.genres.length === maxGenres){
    setErrors({...errors,genres: "El videojuego no puede tener todos los géneros"})
  } else{ 
    setErrors({...errors,genres:""})
  };
};

export const validateRating = (form,errors,setErrors) => {
  if(form.rating === 0 || form.rating > 5) {
    setErrors({...errors,rating: "El juego debe tener una clasificación entre 1 y 5"})
  } else{
    setErrors({...errors,rating:""});
  }
};

export const validateReleased = (form, errors, setErrors) => {
  if (form.released === "" || form.released === null) {
    setErrors({ ...errors, released: "El juego debe tener una fecha de lanzamiento" });
  } else {
    setErrors({ ...errors, released: "" });
  }
};

export const validateDescription = (form, errors, setErrors) => {
  if (form.description === "") {
    setErrors({ ...errors, description: "La descripción no puede estar vacía" });
  } else if (form.description.trim() === "") {
    setErrors({...errors,description: "La descripción no puede estar compuesta por espacios",});
  } else if (/^\d+$/.test(form.description)) {
    setErrors({...errors,description: "La descripción no puede contener solo números",
    });
  } else if (/^[^\w\s\d]+$/.test(form.description)) {
    setErrors({...errors,description: "La descripción no puede estar compuesta solo por símbolos"});
  } else {
    setErrors({ ...errors, description: "" });
  }
};

/*
 // ?FormImage
  const [imageUrl,setImageUrl] = useState("")

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if(file){
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl('')
    }
  };

*/ 