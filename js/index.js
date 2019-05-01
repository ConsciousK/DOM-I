const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navitems = document.querySelectorAll('a')
navitems[0].textContent = 'Services'
navitems[1].textContent = 'Product'
navitems[2].textContent = 'Vision'
navitems[3].textContent = 'Features'
navitems[4].textContent = 'About'
navitems[5].textContent = 'Contact'

let headerimage = document.getElementById('cta-img')
headerimage.setAttribute('src', siteContent['cta']['img-src'])

let mainheader = document.querySelector('h1')
mainheader.innerHTML = "DOM"+ `<br />` +"Is"+ `<br />` + "Awesome"

let buttontext = document.querySelector('button')
buttontext.textContent = 'Get Started'

let topheaders = document.querySelectorAll('.text-content h4')
topheaders[0].textContent = 'Features'
topheaders[1].textContent = 'About'

let topcontent = document.querySelectorAll('.top-content .text-content p')
topcontent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topcontent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let centerimage = document.getElementById("middle-img")
centerimage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomheaders = document.querySelectorAll('.bottom-content h4')
bottomheaders[0].textContent = 'Services'
bottomheaders[1].textContent = 'Product'
bottomheaders[2].textContent = 'Vision'

let bottomcontent = document.querySelectorAll('.bottom-content .text-content p')
bottomcontent[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomcontent[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomcontent[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactheader = document.querySelector('.contact h4')
contactheader.textContent = 'Contact'

let contactinfo = document.querySelectorAll('.contact p')
contactinfo[0].innerHTML = "123 Way 456 Street" + `<br />` + "Somewhere, USA"
contactinfo[1].textContent = "1 (888) 888-8888"
contactinfo[2].textContent = "sales@greatidea.io"

let footer = document.querySelector('footer p')
footer.textContent = (siteContent['footer']['copyright'])