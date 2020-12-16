import axios from 'axios';
import { doc } from 'prettier';

const npmTitle = document.getElementById('npm-title');
const npmContainer = document.getElementById('npm-packages');

// render npm registry data to document
function addToPage(arr) {
  let result = '';
  arr.forEach(
    (obj) =>
      (result += `<p><a href="${obj.package.links.npm}">${obj.package.name}</a></p>`)
  );
  return (npmContainer.innerHTML = result);
}

// get npm packages data from the registry
if (npmTitle && npmContainer) {
  axios
    .get('https://registry.npmjs.org/-/v1/search?text=maintainer:rubenvara')
    .then((res) => {
      if (res.data.total) {
        npmTitle.innerHTML = res.data.total;
        return addToPage(res.data.objects);
      }
    })
    .catch((err) => console.error(err));
}

// show/hide tech info in cards
const tech = document.getElementsByClassName('tech');
function showHiddenTech(e) {
  if (e.target.className === 'boss') {
    e.target.parentNode.classList.remove('hide');
    e.target.hidden = true;
  }
}

[...tech].forEach((div) => div.addEventListener('click', showHiddenTech));

// toggle list/grid view
const viewToggler = document.getElementById('view');
const projects = document.getElementById('projects');
let next = 'grid';
function toggleView(e) {
  const n = next;
  const o = n === 'list' ? 'grid' : 'list';
  projects.classList.add(n);
  projects.classList.remove(o);
  next = o;
}

viewToggler.addEventListener('click', toggleView);
