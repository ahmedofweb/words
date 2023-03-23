import {getData , loader} from './request'

const form = document.getElementById('form')
const input = document.getElementById('input')
const info = document.querySelector('.info')
const errorUI = document.querySelector(".error")

input.focus()


if(input.focus()){
    form.classList.add("border-form")
}else{
    form.classList.remove("border-form")
}

let value

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    info.innerHTML = ''
    value = input.value.trim()
    console.log(value)
    if(value.length){
        getData(value).then((data) => {
            updateUI(data)
        }).catch((err) =>{
            updateErrUI(err.message)
            loader.classList.add("hidden")
        })
    }else{
        err()
    }
    form.reset()
})

function err(){
    errorUI.textContent = "Whoops, can't be empty…"
    form.classList.add("red-border")
    setTimeout(() => {
        errorUI.textContent = ""
        form.classList.remove("red-border")
    }, 3000);
}

function updateUI(data){
    const {word, phonetics , meanings, sourceUrls} = data
    info.innerHTML = ''
    info.innerHTML = `
    <div class="info-header">
                <div>
                    <h1 class="title">${word}</h1>
                    <img id="audio" src="./images/icon-play.svg" alt="" width="75" height="75">
                    <img class="hidden" id="audio-active" src="./images/icon-play-active.svg" alt="" width="75" height="75">
                </div>
                <p>${phonetics[0].text ? phonetics[0].text : phonetics[1].text ? phonetics[1].text : phonetics[2].text ? phonetics[2].text : phonetics[3].text ? phonetics[3].text : "not found"}</p>
            </div>
            <div class="noun">
                <div>
                    <h2 class="noun-title">noun</h2>
                    <div class="hr"></div>
                </div>
                <p class="noun-meaning">Meaning</p>
                <ul class="noun-list">
                    <li class="noun-item">${meanings[0].definitions[0].definition}</li>
                    <li class="noun-item">${meanings[1] ? meanings[1].definitions[0].definition : "No more found"}</li>
                    <li class="noun-item">${meanings[2] ? meanings[2].definitions[0].definition : "No more found"}</li>
                </ul>
                <div class="synonym">
                    <h3>Synonyms</h3>
                    <p>${meanings[0].synonyms[0] ? meanings[0].synonyms[0] : "no synonim"}</p>
                    <p>${meanings[0].synonyms[1] ? meanings[0].synonyms[1] : ""}</p>
                </div>
            </div>
            <div class="noun">
                <div>
                    <h2 class="noun-title">verb</h2>
                    <div class="hr"></div>
                </div>
                <p class="noun-meaning">Meaning</p>
                <ul class="noun-list">
                    <li class="noun-item">${meanings[1] ? meanings[1].definitions[0].definition : "Not found"}</li>
                </ul>
                <div class="hr"></div>
            </div>
         </div>
         <div class="source">
                <p class="noun-meaning">source</p>
                <a href="${sourceUrls[0]}">${sourceUrls[0]}</a>
                <img src="./images/icon-new-window.svg" alt="" width="12" height="12">
            </div>
    `
    
    const audioActive = document.querySelector("#audio-active")
    const audio = document.querySelector("#audio")
    audio.addEventListener("click", ()=>{
        playAudio()
        audio.classList.add("hidden")
        audioActive.classList.remove("hidden")
        setTimeout(() => {
            audio.classList.remove("hidden")
            audioActive.classList.add("hidden")
        }, 1000);
    })
    function playAudio(){
       const audio =  new Audio(phonetics[0].audio ? phonetics[0].audio : phonetics[1].audio ? phonetics[1].audio : phonetics[2].audio ? phonetics[2].audio : phonetics[3].audio ? phonetics[3].audio : '')
       return audio.play()
    }
    
}
function updateErrUI(err){
    info.innerHTML = ''
    info.innerHTML = `
    <div class="error-info">
        <p style="font-size: 70px;">😕</p>
        <h3>${err}</h3>
        <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
</div>
    `
}





