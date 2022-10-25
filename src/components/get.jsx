const axios = require("axios")

const getAllChars = async () =>{
    const apiUrl = await axios.get(
        `https://rickandmortyapi.com/api/character`
    )
    const apiInfo = await apiUrl.results?.map((e) =>{
        return{
            id:e.id,
            name:e.name,
            species:e.species,
            gender:e.gender,
            origins:e.origins,
            image:e.image
        }
    })
    return apiInfo;
}

module.exports ={
    getAllChars
}

