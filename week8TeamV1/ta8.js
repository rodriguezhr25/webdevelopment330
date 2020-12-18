const SWurl = "https://swapi.dev/api/people";

class PeopleList {
    constructor(url, list, next, prev) {
        this.update(url);
        this.next = next;
        this.element = list;
        this.prev = prev;
    }

    main() {
        this.prev.addEventListener('click', () => {
            if(this.prevURL !== null)
                this.update(this.prevURL);

        });
        this.next.addEventListener('click', () => {
            if(this.nextURL !== null)
                this.update(this.nextURL);
        });
    }

    update(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.updateList(data);
                this.setURLs(data);
            })
            .catch(error => console.log('There was an error: ', error));
    }

    setURLs(data){
        this.prevURL = data.previous;
        this.nextURL = data.next;
    }

    updateList(data) {
        let text = '';
        for (let i = 0; i < data.results.length; i++) {
            text += `<li>${data.results[i].name}</li>`;
        }
        this.element.innerHTML = text;
    }
}

window.onload = () => {
    const list = document.getElementById('list');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let peopleList = new PeopleList(SWurl, list, next, prev);
    peopleList.main();
};

