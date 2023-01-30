const API =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=I9lXp6h9syLnSmguir3VNvWZlHPXfhUShKSPUdv8";

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const getElements = async (urlApi) => {
  try {
    const photos = await fetchData(API);
    console.log(photos);
   displayData(photos)
  } catch (error) {
    console.log(error);
  }
};

getElements(API);

const displayData= data => {

}