let url = "http://localhost:8080/api/room/getall";

let tanjson = document.querySelector('.call_person');

async function callpe() {

    try {

        let response = await fetch(url);

        let data = await response.json();

        data.forEach(room => {



            let card = document.createElement("div");
            card.className = "col-12 col-md-6 col-xl-4 mr-5";
            let image = document.createElement("img");

            if (room.images && room.images.length > 0) {

                image.src = room.images[0].image;

            }

            let price = document.createElement("p");

            price.innerText = room.price;

            let address = document.createElement("p");

            address.innerText = room.address;
            card.appendChild(image);

            card.appendChild(price);

            card.appendChild(address);

            tanjson.appendChild(card);

        });

    } catch (error) {

        console.log(error);

    }

}

callpe();