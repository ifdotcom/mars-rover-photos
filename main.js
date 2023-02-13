//# IDEAS:
//el número de sol puede ser variable:  hacer un random para cualquier sol
//solo se requiere un solo id: hacer un random para mostrar una sola foto  (1-400)

const API =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=I9lXp6h9syLnSmguir3VNvWZlHPXfhUShKSPUdv8";

let btn = document.getElementById("btn"),
  imgCard = document.querySelector(".card__image"),
  titleCard = document.querySelector(".titile--card-text"),
  martianSolValue = document.querySelector(".martianSolValue"),
  roverNameValue = document.querySelector(".roverNameValue"),
  cameraNameValue = document.querySelector(".cameraNameValue");
// hacer peticion cuando se da click al boton

btn.addEventListener("click", () => {
  const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  };

  const getElements = async (urlApi) => {
    try {
      const data = await fetchData(urlApi);
      const photos = data.photos[getRandomInt(400)];
      const roverData = photos.rover;
      const cameraData = photos.camera;
      //  modificar el DOM
      imgCard.setAttribute("src", `${photos.img_src}`);
      titleCard.innerHTML = `${cameraData.full_name}`;
      martianSolValue.innerHTML = `${photos.sol}`;
      roverNameValue.innerHTML = `${roverData.name}`;
      cameraNameValue.innerHTML = `${cameraData.name}`;
    } catch (error) {
      console.log(error);
    }
  };

  getElements(API);

  // numero random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
});
