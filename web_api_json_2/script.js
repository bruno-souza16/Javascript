const card = document.getElementById("card")

const search = (event) => {
    event.preventDefault()

    const pokenumber = document.getElementById("pokenumber").value
    const baseURL = "https://pokeapi.co/api/v2/pokemon/"

    const verify = card.querySelector(".pokemon-picture")
    if(verify !== null){
        card.removeChild(card.childNodes[2]) 
        card.removeChild(card.childNodes[1])     
    }
    
    $.get(baseURL + pokenumber, (pokemon) => {

        var pk_pic = document.createElement('div')
        pk_pic.className = "pokemon-picture"
        card.appendChild(pk_pic)

        var img = document.createElement('img')
        img.src = pokemon.sprites.front_default
        pk_pic.appendChild(img)

        var pk_info = document.createElement('div')
        pk_info.className = "pokemon-info"
        card.appendChild(pk_info)

        var name = document.createElement('h1')
        name.className = "name"
        name.textContent = "Nome: " + pokemon.name
        pk_info.appendChild(name)

        var id = document.createElement('h2')
        id.className = "number"
        id.textContent = "Pokédex Number: " + pokemon.id
        pk_info.appendChild(id)

        var type = document.createElement('h3')
        type.className = "type"
        type.textContent = "Tipo: " + pokemon.types.map(item => ' ' + item.type.name).toString()
        pk_info.appendChild(type)

        var skills = document.createElement('h3')
        skills.className = "skill"
        skills.textContent = "Skills: " + pokemon.moves.map(item => ' ' + item.move.name).toString()
        pk_info.appendChild(skills)

        var weight = document.createElement('h3')
        weight.className = "weight"
        weight.textContent = "Peso: " + pokemon.weight  / 10 + "kg"
        pk_info.appendChild(weight)

        var height = document.createElement('h3')
        height.className = "height"
        height.textContent = "Altura: " + pokemon.height  / 10 + "m"
        pk_info.appendChild(height)
    });
  }


  document.getElementById("pokeform").addEventListener('submit', search);