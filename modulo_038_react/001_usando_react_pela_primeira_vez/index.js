const root = document.querySelector("#root");

const t1 = React.createElement('h1', {id: 'titulo principal'}, 'Hello World');
const t2 = React.createElement('h2', {id: 'subtítulo'}, 'Subtítulo');
const headline = React.createElement('div', null, t1, t2);

ReactDOM.render(headline, root);