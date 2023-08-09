const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');


about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id) {
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        });
        //hide other articles
        articles.forEach((article) =>{
           article.classList.remove('active');
        })
const element = document.getElementById(id)
element.classList.add('active')
    }
})


/////

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights



//************about- btns **********/
const menu = [
  {
    id: 1,
    title: "gaming plans",
    category: "gaming",
    price: 15.99,
    img: "./images/cardft.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 2,
    title: "vr games 2023",
    category: "vr",
    price: 13.99,
    img: "./images/cardsec.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 3,
    title: "gaming plans",
    category: "gaming",
    price: 6.99,
    img: "./images/cardth.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 4,
    title: "friends time",
    category: "team",
    price: 20.99,
    img: "./images/cardfor.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 5,
    title: "gaming plans",
    category: "gaming",
    price: 22.99,
    img: "./images/cardfa.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 6,
    title: "vr games 2023",
    category: "vr",
    price: 18.99,
    img: "./images/cardsix.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 7,
    title: "friends time",
    category: "team",
    price: 8.99,
    img: "./images/cardsa.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  {
    id: 8,
    title: "vr games 2023",
    category: "vr",
    price: 12.99,
    img: "./images/carde.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit odio facere id nihil delectus non maiores! Quas non explicabo, iste minima in, architecto eligendi corrupti adipisci nisi accusantium facilis?`,
  },
  
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.menu-btn-container');

// Load items

window.addEventListener('DOMContentLoaded', () => {
  diplayMenuItems(menu);
displayMenuButtons();
})


function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <div class='menu-header'>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
    </div>
    <p class="item-text">${item.desc}</p>
    </div>
    <div class="info">
            <a href="https://en.wikipedia.org/wiki/Game">Raed More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
return values
  }, ['all'])

  const categoryBtns = categories.map((category) =>{
    return `<button class="filter-btn" data-id=${category} type="button">${category}</button>`
  }).join('')
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');
// filter items
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    })
    if (category === 'all') {
      diplayMenuItems(menu);
    } else {
      diplayMenuItems(menuCategory)
    }
  })
})
}
/*const items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "gaming",
    img: "./images/cardft.png",
    p: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "var",
    img: "./images/cardsec.png",
    p: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "gaming",
    img: "./images/cardth.png",
    p: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "team",
    img: "./images/cardfor.png",
    p: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "gaming",
    img: "./images/cardfa.png",
    p: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "var",
    img: "./images/cardsix.png",
    p: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "team",
    img: "./images/cardsa.png",
    p: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "var",
    img: "./images/carde.png",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  }, ]

  const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');

// Load items

window.addEventListener('DOMContentLoaded', () => {
  diplayItems(items);
displayItemsButtons();
})
function diplayItems(artiItems) {
  let displayItems = artiItems.map(function (item) {
    // console.log(item);

    return `<div class="box">
    <img src=${item.img}>
    <div class="cards-content">
        <h3>${item.title}/h3>
        <p>${item.p}</p>
    </div>
    <div class="info">
        <a href="#">Raed More</a>
        <i class="fas fa-long-arrow-alt-right"></i>
    </div>
</div>`;
  });
  displayItems = displayItems.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayItems;
}

function displayItemsButtons() {
  const categories = items.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
return values
  }, ['all'])
  const categoryBtns = categories.map((category) =>{
    return `<button class="filter-btn" data-id=${category} type="button">${category}</button>`
  }).join('')
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');
// filter items
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const itemsCategory = items.filter((artiItems) => {
      if (artiItems.category === category) {
        return artiItems;
      }
    })
    if (category === 'all') {
      diplayItems(items);
    } else {
      diplayItems(itemsCategory)
    }
  })
})
} */