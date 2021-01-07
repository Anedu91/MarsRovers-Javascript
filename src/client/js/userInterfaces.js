const App = (state) => {
  let { rovers } = state;

  return `
    <header class="flex justify-end">
      <ul>
        <li>
          <button id="home">Home</button>
        </li>
      </ul>
    </header>
    <main>
      <h1>${state.title}</h1>
    </main>
  `;
};

export { App };
