let bodySelector = document.querySelector("body");
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
    console.log(photos);
    photos.forEach(photo => {
      createElements();
      fillElements(photo.download_url);
      appendElements();
    });
  })

  /*
      <section>
        <article>
            <div>
                <p>Alejandro Escamilla</p>
                <button>Visiter</button>
            </div>
                <img src="">
        </article>
        <aside>

        </aside>
    </section>
   */

function createElements() {
   sectionCreation = document.createElement("section");
   articleCreation = document.createElement("article");
   divCreation = document.createElement("div");
   pIntegrate = document.createElement("p")
   asideCreation = document.createElement("aside");
   imgCreation = document.createElement("img");
   buttonSelector = document.createElement("button");
}

function fillElements(photoUrl) {
  console.log("hello");
  imgCreation.src = photoUrl;
}


function appendElements() {
  bodySelector.append(sectionCreation);
  sectionCreation.append(articleCreation);
  articleCreation.append(divCreation);
  sectionCreation.append(asideCreation);
  sectionCreation.append(imgCreation);
  divCreation.append(pIntegrate);
  divCreation.append(buttonSelector);
}

function chooseAuthor(authorUrl){
    console.log ("trouvez-moi");
    pIntegrate.src= authorUrl;
}

