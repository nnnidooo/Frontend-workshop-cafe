
fetch('http://localhost:3000/cafes')
    .then(response => response.json())
    .then(function (cafes) {
      renderCafes(cafes);
      registerEvents(cafes);
    });

function renderCafes(cafes) {
    console.log(cafes);
    const ul = document.querySelector('ul#cafes');
    ul.innerHTML = "";
    console.log(ul);
    for (let i = 0; i < cafes.length; i++) {
        const cafe = cafes[i];
        console.log(cafe);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="name">${cafe.cafe_name}</p>
            <p class="price"> Price range:  ${cafe.price_range}</p>
            <p class="location">Location: ${cafe.location}</p>
            <p class="wifi">Available Wifi:  ${cafe.wifi}</p>
            <p class="ratings">⭐ Rating: ️${cafe.ratings}/5</p>
        `;
        ul.appendChild(li);
    }
}

function registerEvents(cafes) {
    console.log(cafes);
    //1: attach eventlistener
    const button = document.querySelector('button.filter')
    console.log(button);
    button.addEventListener('click', function () {
        console.log('button clicked');
        //2: get filter value
        const inputElement = document.querySelector('input')
        console.log(inputElement);
        console.log(inputElement.value); //logger værdien ud som man har skrevet i input-felten
        //3: filter list
        const location = inputElement.value;
        console.log(location);
        const filteredCafes = [];
        for (let i = 0; i < cafes.length; i++) {
            const cafe = cafes[i];

            console.log(cafe.location);
            console.log(location);
            console.log(cafe.location === location);

            if (cafe.location === location) {
                filteredCafes.push(cafe); //.push smider det ind i dit nye array
            }

        }
            console.log(filteredCafes);

            //4: render list
            renderCafes(filteredCafes)
        })
}
