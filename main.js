//# IDEAS:
//el número de sol puede ser variable:  hacer un random para cualquier sol
//solo se requiere un solo id: hacer un random para mostrar una sola foto  (1-400)

const API =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=I9lXp6h9syLnSmguir3VNvWZlHPXfhUShKSPUdv8";

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const getElements = async (urlApi) => {
  try {
    const data = await fetchData(urlApi);
    const photos = data.photos[0];
    console.log(photos);
    console.log(photos.id);
  //  photos.forEach(element => {
  //   console.log(element.id)
  //  });
  
  } catch (error) {
    console.log(error);
  }
};

getElements(API);

