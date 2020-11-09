async function fetchData(url) {
    // Default options are marked with *

    const response = await fetch(url, {
    });
    return response.json(); // parses JSON response into native JavaScript objects

}

async function firstLoad() {
    let url = 'https://swapi.dev/api/people';
    const result = await fetchData(url);
    console.log(result);
    const persons = result['results'];
    for (let i = 0; i < persons.length; i++) {

        let card = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = persons[i].name;

        card.appendChild(p);
        document.querySelector('div.cards').appendChild(card);
    }
    let prev = document.createElement('button');
    prev.textContent = "PREV";
    prev.setAttribute('id', 'prev');
   // prev.onclick = reloadData(result.prev);
   // prev.setAttribute("onclick",reloadData(result.prev));
    
    prev.setAttribute('data-id', result.previous);
    let next = document.createElement('button');
    next.textContent = "NEXT";
    next.setAttribute('id', 'next');
    next.setAttribute('data-id', result.next);
    let divButton = document.createElement('div');

    divButton.appendChild(prev);
    divButton.appendChild(next);
    document.querySelector('div.pagination').appendChild(divButton);

    var btnPrev = document.getElementById('prev');
    btnPrev.onclick = reloadData; // Assigned
    var btnNext = document.getElementById('next');
    btnNext.onclick = reloadData; // Assigned
    console.table(persons); // temporary checking for valid response and data parsing

}
async function reloadData(e) {
    const btn = e.currentTarget;
    url = btn.getAttribute('data-id');
    if (url != null) {
        let data = await fetchData(url);
        document.getElementById('cards').innerHTML = "";
        const newData = data['results'];
        for (let i = 0; i < newData.length; i++) {

            let card = document.createElement('div');
            let p = document.createElement('p');
            p.textContent = newData[i].name;

            card.appendChild(p);
            document.querySelector('div.cards').appendChild(card);
        }
        //Update buttons

        let prev = document.getElementById('prev');
        prev.setAttribute('data-id', data.previous);
        let next = document.getElementById('next');
        next.setAttribute('data-id', data.next);
    }
}