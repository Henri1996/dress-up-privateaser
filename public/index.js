/* global PRIVATEASER*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const div2 = document.createElement('div2');
    var template = `<div class="row justify-content-center">`;
    template += actors.map(actor => {
      if(actor.type == "credit")
      return `
        <div class="actor">
          <div class="card border-success mb-3 container-fluid" style="max-width: 20rem;">
  
      <div class="card-body text-success">
      <h1 class="text-center">${actor.who}</h1>
      <div class="container">
        <div class="container-fluid center-text">
       
          
          <h5>${actor.type}</h5>
          <h5>${actor.amount} €</h5>
          
    </div>
    </div>

  </div>
</div>
        </div>
      `;
      else
        return `<div class="actor">
          <div class="card border-danger mb-3" style="max-width: 20rem;">
  
      <div class="card-body text-danger">
      <h1 class="text-center">${actor.who}</h1>
      <div class="container">
        <div class="container-fluid center-text">
       
        
          <h5>${actor.type}</h5>
          <h5>${actor.amount} €</h5>
          
    </div>
    </div>

  </div>
</div>
        </div>`;

    }).join('');

    template+= `</div>`;
    var temp2 =  `<h3 class ="text-center"> You can find all the informations about your reservation below:</h3>` ;

    div2.innerHTML = temp2;

    div.innerHTML = template;
    fragment.appendChild(div2);
    fragment.appendChild(div);

    document.querySelector('#actors').innerHTML = '';
  
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const bar = PRIVATEASER.getBar();
    const time = document.querySelector('.js-time').value;
    const persons = document.querySelector('.js-persons').value;
    const option = document.querySelector('.js-option').checked;
    const actors = PRIVATEASER.payActors(bar, time, persons, option);

    render(actors);

    return;
  });
})();
