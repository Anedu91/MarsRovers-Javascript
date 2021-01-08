const App = (state) => {
  let { rovers } = state;

  return `
    <header class="flex justify-between items-center | px-7 py-4 | bg-black ">
      <span class="text-white uppercase text-2xl">Logo</span>
      <ul>
        <li>
          <button id="home" class="btn hover:bg-white hover:text-black">Home</button>
        </li>
      </ul>
    </header>
    <main class="relative pt-5">
      <h1 class="text-6xl text-center">${state.title}</h1>
      <section class="mt-5">
        <div class="flex justify-center space-x-3">
        ${creatingRovers(rovers)}
        </div>
      </section>
      <section class="mt-5">
       ${state.picOfTheDay ? creatingPicture(state) : ""}
      </section>
      
    </main>
  `;
};

const creatingRovers = (rovers) => {
  return rovers.map((rover) => {
    return `
      <button data-target=${rover} class="btn bg-black hover:bg-gray-300 hover:text-black rover-toggle">
        ${rover}
      </button>
    `;
  });
};

const creatingPicture = (state) => {
  const figure = `<figure>
    <img src=${state.picOfTheDay.url} alt=${state.picOfTheDay.title} class="block m-auto"/>
    <figcaption class="text-2xl text-center mt-2">${state.picOfTheDay.title}</figcaption>    
    </figure>`;
  const video = `video`;

  return state.picOfTheDay.media_type === "image" ? figure : video;
};

const displayingRover = () => {};

export { App };
