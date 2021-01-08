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
    <main class="pt-5">
      <h1 class="text-6xl text-center">${state.title}</h1>
      <section class="mt-5">
        <div class="flex justify-center space-x-3">
        ${creatingRovers(rovers)}
        </div>
      </section>
      <section>
      
      </section>
    </main>
  `;
};

const creatingRovers = (rovers) => {
  return rovers.map((rover) => {
    return `
      <button id=${rover} class="btn bg-black hover:bg-gray-300 hover:text-black">
        ${rover}
      </button>
    `;
  });
};

const apiContent = () => {};

export { App };
