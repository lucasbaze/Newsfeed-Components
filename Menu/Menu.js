/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out',
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.

  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/

//
//Article Creator
//

menuCreator = menuItems => {
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    let text = document.createElement('p');
    menuItems.forEach(item => {
        let menuItem = document.createElement('li');
        menuItem.textContent = item;
        ul.append(menuItem);
    });

    text.addEventListener('click', event => {
        event.path[1].classList.toggle('menu--open');
        document.querySelector('body').classList.toggle('body--open');
    });

    div.classList.add('menu');
    div.append(text, ul);
    console.log(div);
    return div;
};

let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', event => {
    document.querySelector('.menu').classList.toggle('menu--open');
    document.querySelector('body').classList.toggle('body--open');
});

document.querySelector('.header').prepend(menuCreator(menuItems));

//
//Stretch Animations
//

TweenMax.to('h1', 1, { scale: 1.2 });
