import axios from 'axios';

const npmTitle = document.getElementById('npm-title');
const npmContainer = document.getElementById('npm-packages');

if (npmTitle && npmContainer) {

function addToPage(arr) {
  let result = '';
  arr.forEach(obj => result += `<p><a href="${obj.package.links.npm}">${obj.package.name}</a></p>`);
  return npmContainer.innerHTML = result;
}

axios
.get('https://registry.npmjs.org/-/v1/search?text=maintainer:rubenvara')
.then(res => {
  if (res.data.total) {
    npmTitle.innerHTML = res.data.total;
    return addToPage(res.data.objects);
  }
})
.catch(err => console.error(err))
}