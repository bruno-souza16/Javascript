const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

const url = 'https://ghibliapi.herokuapp.com/films'

getData = function (){
    var request = new XMLHttpRequest()
    request.open('GET', url, true);
    request.onload = function (){
        
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {

            data.forEach(movie => {
                
                var card = document.createElement('div')
                card.setAttribute('class', 'card')
                container.appendChild(card)

                var title = document.createElement('h1')
                title.textContent = movie.title
                title.setAttribute('class', 'text-title')
                card.appendChild(title)

                var line = document.createElement('div')
                line.setAttribute('class', 'text-inline')
                card.appendChild(line)
                
                var date = document.createElement('p')
                date.textContent = "Data de Lançamento: " + movie.release_date
                line.appendChild(date)

                var score = document.createElement('p')
                score.textContent = "Pontuação: " + movie.rt_score
                score.setAttribute('class', 'text-score')
                line.appendChild(score)

                var director = document.createElement('p')
                director.textContent = "Diretor: " + movie.director
                director.setAttribute('class', 'text')
                card.appendChild(director)

                var descrip = document.createElement('p')
                movie.description = movie.description.substring(0, 300) 
                descrip.textContent = "Sinopse: " + movie.description + '...' 
                descrip.setAttribute('class', 'text')
                card.appendChild(descrip)
            });

        } else {

            const errorMessage = document.createElement('p')
            errorMessage.textContent = 'Erro'
            app.appendChild(errorMessage)
        }
    }

    request.send();
}
