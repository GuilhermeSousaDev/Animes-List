async function callAnime(){
    const text = document.querySelector('#inp1').value
    const request = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`) 
    const response = await request.json()
    listAnimes(response.data)  
    }
    const listAnimes = response => {
        const animes = document.querySelector('.anime-list')
        animes.innerHTML = response.map(anime => `
           <ul class="anime-container">
           <li style="list-style-type:none">
               <img src=${anime.attributes.posterImage.small} alt=${anime.attributes.canonicalTitle}/>
               <h3>${anime.attributes.canonicalTitle}<br></h3>
           </li>
           </ul>
       `).join('')          
       if(response.length == 0){
        animes.innerHTML = '<p style="font-family:sans-serif">Sem Resultados</p>'
    }    
    }