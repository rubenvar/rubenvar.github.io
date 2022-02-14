// ? not enabled for now:
// import axios from 'axios';

// const npmTitle = document.getElementById('npm-title');
// const npmContainer = document.getElementById('npm-packages');

// // render npm registry data to document
// function addToPage(arr) {
//   let result = '';
//   arr.forEach(
//     (obj) =>
//       (result += `<p><a href="${obj.package.links.npm}">${obj.package.name}</a></p>`)
//   );
//   return (npmContainer.innerHTML = result);
// }

// // get npm packages data from the registry
// if (npmTitle && npmContainer) {
//   axios
//     .get('https://registry.npmjs.org/-/v1/search?text=maintainer:rubenvara')
//     .then((res) => {
//       if (res.data.total) {
//         npmTitle.innerHTML = res.data.total;
//         return addToPage(res.data.objects);
//       }
//     })
//     .catch((err) => console.error(err));
// }

// show/hide tech info in cards
const techTogglers = document.getElementsByClassName('tech-toggler');

[...techTogglers].forEach((toggler) =>
  toggler.addEventListener('click', (e) =>
    e.target.parentNode.classList.toggle('show-tech')
  )
);
