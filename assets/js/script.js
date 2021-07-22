//para que se ejecute cuando la pagina se haya cargado totalmente//
$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault()
        
        var heroeinput = $("#heroInput").val();
        $.ajax({
            //aca ejecuto el get segun el numero ingresado en el Input y lo guardo en data//
            type: "GET",
            url: "https://www.superheroapi.com/api.php/3624996710933270/" + heroeinput,
            contentType: 'json',
            dataType: "json",
            success: function (data) {
                //aca guardo las variables que voy a usar abajo, no era necesario realmente, pero creo que se ve mas ordenado//
                var nombre = data.name
                var foto = data.image.url
                var publicadoPor = data.biography.publisher
                var conexiones = data.connections["group-affiliation"]
                var peso = data.appearance.weight
                var altura = data.appearance.height
                var ocupacion = data.work.occupation
                var primeraAparicion = data.biography["first-appearance"]
                var alias = data.biography.aliases
                //aca me di cuenta que no podia itinerar con forEach porque no es un array, asi que aplique for...in para usarlo como parametro al armar el grafico//
                var capacidades = []
                for (element in data.powerstats){
                    capacidades.push({
                        y: parseInt(data.powerstats[element]),
                        label: element
                    })
                }
                //aca se escribe la informacion tomada del api en el HTML, especificamente en la tarjeta//
                $("#tarjeta").html(`
                <div class="card mb-3 bg-dark text-white" style="max-width: 640px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${foto}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Nombre: ${nombre}</h5>
                                <p class="card-text">Conexiones: ${conexiones}</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item bg-dark text-white">Publicado por: ${publicadoPor}</li>
                                    <li class="list-group-item bg-dark text-white">Ocupacion: ${ocupacion}</li>
                                    <li class="list-group-item bg-dark text-white">Primera Aparicion: ${primeraAparicion}</li>
                                    <li class="list-group-item bg-dark text-white">Altura: ${altura}</li>
                                    <li class="list-group-item bg-dark text-white">Peso: ${peso}</li>
                                    <li class="list-group-item bg-dark text-white">Alias: ${alias}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>        
                `)

                //aca se declara y se renderiza el grafico de canvas, tomando como argumentos los datos de la variable que rellene con el for...in de arriba//
                var chart = new CanvasJS.Chart("grafico", {
                    animationEnabled: true,
                    theme: "dark1",
                    title: {
                        text: `Estadisticas de ${nombre}`
                    },
                    data: [{
                        type: "pie",
                        startAngle: 240,
                        
                        yValueFormatString: "##0.00",
                        indexLabel: "{label} {y}",
                        dataPoints: capacidades
                    }]
                });
                chart.render();
                    
                   
            }
        })
    })

})
