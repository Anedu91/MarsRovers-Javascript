const App = (state) => {
  const rovers = Array.from(state.get("rovers"));
  const target = state.get("target");

  return `
    <header class="flex justify-between items-center | px-7 py-4 | bg-black ">
      <span class="text-white uppercase text-2xl">Logo</span>
      <ul>
        <li>
          <button id="home" class="btn hover:bg-white hover:text-black toggle" data-target="home">Home</button>
        </li>
      </ul>
    </header>
    <main class="relative pt-5">
      <h1 class="text-6xl text-center">${state.get("title")}</h1>
      <section class="mt-5">
        <div class="flex justify-center space-x-3">
        ${creatingRovers(rovers)}
        </div>
      </section>
      <section class="mt-5 px-10" id="main">
       ${switchingUi(target, state)}
      </section>
      
    </main>
  `;
};

const creatingRovers = (rovers) => {
  return rovers.map((rover) => {
    return `
      <button data-target=${rover} class="btn bg-black hover:bg-gray-300 hover:text-black toggle">
        ${rover}
      </button>
    `;
  });
};

const creatingPicture = (home) => {
  const { url, title, media_type } = home.home;
  const figure = `<figure>
    <img src=${url} alt=${title} class="block m-auto"/>
    <figcaption class="text-2xl text-center mt-2">${title}</figcaption>    
    </figure>`;
  const video = `<div class="flex flex-col items-center">
    <div>
    <iframe width="560" height="315" src=${url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>  
  <h6 class="text-2xl text-center mt-2">${title}</h6>
    </div>`;
  return media_type === "image" ? figure : video;
};

const displayingRover = (rover) => {
  const imageCard = rover.photos
    .filter((rover, index) => index < 6)
    .map((rover) => {
      return `
          <figure>
            <img src=${rover.img_src} class="block mx-auto" alt="Photo taken by ${rover.camera.full_name}" />
            <figcaption class="text-center font-bold">${rover.earth_date}</figcaption>
          </figure>
    `;
    });

  return `
      <div class="mb-5">
        <h2 class="text-center font-bold text-xl">${rover.photos[0].rover.name} Information</h2>
        <ul class="text-center">
          <li>Launch Date: <span class="font-bold">${rover.photos[0].rover.launch_date}</span> </li>
          <li>Landing Date: <span class="font-bold">${rover.photos[0].rover.landing_date}</span> </li>
          <li>Status: <span class="font-bold text-green-600"> ${rover.photos[0].rover.status}</span></li>
        </ul>        
      </div>
      <div class="grid grid-cols-3 gap-5">
        ${imageCard}
      </div>`;
};

const switchingUi = (target, state) => {
  switch (target) {
    case "home":
      return creatingPicture(state.get("home"));
    case "curiosity":
      return displayingRover(state.get("curiosity"));
    case "opportunity":
      return displayingRover(state.get("opportunity"));
    case "spirit":
      return displayingRover(state.get("spirit"));
    default:
      return creatingPicture(state.get("home"));
  }
};

export { App };
