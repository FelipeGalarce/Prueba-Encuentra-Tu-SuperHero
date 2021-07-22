$(document).ready(function () {

    $("button").on("click", function () {
        $("#heroInput")
        var heroeinput = $("#heroInput").val();
        $.ajax({
            /* type: "GET", */
            url: "https://superheroapi.com/api/3624996710933270/" + heroeinput,
            /* dataType: "json", */
            success: function (data) {
                console.log(data.nombre)
/*                 let nombre = data.name
                let conexiones = data.connections.group - affiliation
                let ocupacion = data.work.occupation
                let publicadoPor = data.biography.publisher
                let primeraAparicion = data.biography.first - appearance
                let altura = data.appearance.height
                let peso = data.appearance.weight
                let alias = data.biography.aliases
                let foto = data.image
                let power = data.powerstats.power
                let combat = data.powerstats.combat
                let intelligence = data.powerstats.intelligence
                let speed = data.powerstats.speed
                let durability = data.powerstats.durability
                let strength = data.powerstats.strength
                $("#tarjeta").html(`
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${foto}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">Nombre: ${nombre}</h5>
                            <p class="card-text">Conexiones: ${conexiones}</p>
                            <p class="card-text">Publicado por: ${publicadoPor}</p>
                            <p class="card-text">Ocupacion: ${ocupacion}</p>
                            <p class="card-text">Primera Aparicion: ${primeraAparicion}</p>
                            <p class="card-text">Altura: ${altura}</p>
                            <p class="card-text">Peso: ${peso}</p>
                            <p class="card-text">Alias: ${alias}</p>

                            </div>
                        </div>
                    </div>
                </div>              
                `) */

            }



        })


    })
})
