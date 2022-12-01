let mainSelector = document.querySelector("main");
let sectionCreation;
let articleCreation;
let divCreation;
let asideCreation;
let imgCreation;
let pIntegrate;
let buttonSelector;

fetch('https://picsum.photos/v2/list?limit=2')
  .then((response) => {
    return response.json()
  })
  .then((photos) => {
    photos.forEach(photo => {

      createElements();
      fillElements(photo.download_url, photo.author);
      appendElements();
      readEvent(photo.url)  
    });
    
  })



function createElements() {
  sectionCreation = document.createElement("section");
  articleCreation = document.createElement("article");
  divCreation = document.createElement("div");
  pIntegrate = document.createElement("p")
  asideCreation = document.createElement("aside");
  imgCreation = document.createElement("img");
  buttonSelector = document.createElement("button");
}

function fillElements(photoUrl, photoAuthor) {
  console.log("hello");
  imgCreation.src = photoUrl;
  pIntegrate.textContent = photoAuthor;
  buttonSelector.textContent = "Visit";
}


function appendElements() {
  mainSelector.append(sectionCreation);
  sectionCreation.append(articleCreation);
  articleCreation.append(divCreation);
  sectionCreation.append(asideCreation);
  sectionCreation.append(imgCreation);
  divCreation.append(pIntegrate);
  divCreation.append(buttonSelector);
}

function readEvent(url) {
  buttonSelector = document.querySelectorAll("button")

  buttonSelector[buttonSelector.length - 1].addEventListener("click", function () {
    location.href = url;
  })
}




/*
    <section>
        <article>
            <div>
                <p>Alejandro Escamilla</p>
                <button>Visiter</button>
            </div>
                <img src="https://picsum.photos/id/0/5000/3333">
        </article>
        <aside>

        </aside>
    </section>
    */