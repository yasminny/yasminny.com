function initPageByHash() {
  window.addEventListener('hashchange', changeMainView);
  if (window.location.hash === '') {
    window.location.hash = '#home';
    return;
  }
changeMainView();
}

function changeMainView() {
  const homeTemplate = `<div class="wrapper">
<div class="panel fixed-bottom">
<div class="text">
<h1>Hello World</h1>
<p>(Please scroll down)</p>
</div>
</div>
<div class="panel layer-one">
<h2>I'm Hungry</h2>
</div>
<div class="panel layer-two">
<h2>I'm Hungry for a job</h2>
</div>
<div class="panel layer-three">
<h2>I want a place where I can use my skills and improve on them</h2>
</div>
<div class="panel layer-four">
<h3>Want to help me or read more about who I am?</h3>
</div>
</div>`;

  const tempTemp = `<span><h1>Please stand by as I create my website and enjoy my lovely CV for now</h1></span>
    <img class="cv-image" src="./Yasmin%20Nygate%20CV.png">`;

  const hash = window.location.hash;
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  if (hash === '#home') {
    // create basic view
    main.innerHTML = homeTemplate;
    // header.innerHTML = `<ul>
    //   <li class="active-menu-item"><a href="#home"><img src="./AAEAAQAAAAAAAAwFAAAAJDYyMDgyNzYyLTM2NDAtNDFhOS1hMzg4LTFhY2RjODdjNjRkYQ.jpg"></a></li>
    //   <li><a href="#home">Hello World</a></li>
    //   <li><button type="button">Click me!</button></li>
    // </ul>`;
  }
  if (hash === '#temp'){
    main.innerHTML = tempTemp;
  }
}


initPageByHash();