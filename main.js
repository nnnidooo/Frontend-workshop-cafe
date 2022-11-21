
fetch('http://localhost:3000/cafes')
    .then(response => response.json())
    .then(function (cafes) {
      renderCafes(cafes);
    });

function renderCafes(cafes) {
    console.log(cafes);
    const ul = document.querySelector('ul#cafes');
    console.log(ul);
    for (let i = 0; i < cafes.length; i++) {
        const cafe = cafes[i];
        console.log(cafe);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="name">${cafe.cafe_name}</p>
            <p class="price"> Price range:  ${cafe.price_range}</p>
            <p class="location">${cafe.location}</p>
            <p class="wifi">Is there wifi at the cafe?  ${cafe.wifi}</p>
            <p class="ratings">Ratings out of 5 stars ⭐ ️${cafe.ratings}</p>
        `;
        ul.appendChild(li);

    }

}

