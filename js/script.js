
const base_url = 'https://swapi.dev/api'

const container = document.querySelector('.container')
const getplanets = document.querySelector('.planets')
const getpeople = document.querySelector('.people')
const getstarships = document.querySelector('.starships')
const getspecies = document.querySelector('.species')
const getfilms = document.querySelector('.films')
const getvehicles = document.querySelector('.vehicles')

function getData(route, cb){
    fetch(`${base_url}/${route}`)
    .then(res => res.json())
    .then(r =>{
        cb(r)
    })
}


window.addEventListener('load' , () =>{

    getData('people', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h2>${item.name}</h4>
                        <p>Height: ${item.height}</p>
                        <p>Gender: ${item.gender}</p>
                        <p>Homeworld: <a href=${item.homeworld}"></a></p>

                        
                        <button class="more" onclick="More(${item.name})">More</button>
                        
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
    

    
})



getpeople.addEventListener('click', e =>{
    e.preventDefault();

    getData('people', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h3>${item.name}</h3>
                        <p>Height: ${item.height}</p>
                        <p>Gender: ${item.gender}</p>
                        <p>Homeworld: <a href=${item.homeworld}"></a></p>

                        
                        <button class="more" onclick="More(${item.name})">More</button>
                        
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getplanets.addEventListener('click', e =>{
    e.preventDefault()

    getData('planets', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h3>${item.name}</h3>
                        <p>Rotation period: ${item.rotation_period}</p>
                        <p>Orbital period: ${item.orbital_period}</p>
                        <p>Population: ${item.population}</p>

                        <button class="more" onclick="More(${item.name})">More</button>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getstarships.addEventListener('click', e =>{
    e.preventDefault()

    getData('starships', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
            <div class="card">
                <div class="card_content">
                    <h3>Name:${item.name}</h3>
                    <p>Model: ${item.model}</p>
                    <p>Manufacturer: ${item.manufacturer}</p>
                    <p>Passengers: ${item.passengers}</p>


                    <button class="more" onclick="More(${item.name})">More</button>
                </div>
            </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getspecies.addEventListener('click', e =>{
    e.preventDefault()

    getData('species', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h3>${item.name}</h3>
                        <p>Classification: ${item.classification}</p>
                        <p>Designation: ${item.designation}</p>
                        <p>Language: ${item.population}</p>
                        


                        <button class="more" onclick="More(${item.name})">More</button>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getvehicles.addEventListener('click', e =>{
    e.preventDefault()

    getData('vehicles', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h3>${item.name}</h3>
                        <p>Model: ${item.model}</p>
                        <p>Manufacturer: ${item.manufacturer}</p>
                        <p>Cost in credits: ${item.cost_in_credits}</p>
                        

                        <button class="more" onclick="More(${item.name})">More</button>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})


getfilms.addEventListener('click', e =>{
    e.preventDefault()

    getData('films', res =>{
        console.log(res);

        const card = res.results.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h3>${item.title}</h3>
                        <p>Director: ${item.director}</p>
                        <p>Producer: ${item.producer}</p>
                        

                        <button class="more" onclick="More(${item.name})">More</button>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})





