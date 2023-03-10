const API  = 'https://api.dictionaryapi.dev/api/v2/entries/en/'


export const loader = document.querySelector(".loader")
export const getData = async (word)=>{
    loader.classList.remove("hidden")
    const request =  await fetch(API + word)
    const data = await request.json()
    loader.classList.add("hidden")
    console.log(data[0])
    return data[0]
}
