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
    "h1": `DOM<br /> Is<br /> Awesome`,
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
    "address" : `123 Way 456 Street <br /> Somewhere, USA`,
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
navitems[0].textContent = (siteContent['nav']['nav-item-1'])
navitems[1].textContent = (siteContent['nav']['nav-item-2'])
navitems[2].textContent = (siteContent['nav']['nav-item-3'])
navitems[3].textContent = (siteContent['nav']['nav-item-4'])
navitems[4].textContent = (siteContent['nav']['nav-item-5'])
navitems[5].textContent = (siteContent['nav']['nav-item-6'])

let headerimage = document.getElementById('cta-img')
headerimage.setAttribute('src', siteContent['cta']['img-src'])

let mainheader = document.querySelector('h1')
mainheader.innerHTML = ('src', siteContent['cta']['h1'])

let buttontext = document.querySelector('button')
buttontext.textContent = (siteContent['cta']['button'])

let topheaders = document.querySelectorAll('.text-content h4')
topheaders[0].textContent = (siteContent["main-content"]["features-h4"])
topheaders[1].textContent = (siteContent["main-content"]["about-h4"])

let topcontent = document.querySelectorAll('.top-content .text-content p')
topcontent[0].textContent = (siteContent["main-content"]["features-content"])
topcontent[1].textContent = (siteContent["main-content"]["about-content"])

let centerimage = document.getElementById("middle-img")
centerimage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomheaders = document.querySelectorAll('.bottom-content h4')
bottomheaders[0].textContent = (siteContent["main-content"]["services-h4"])
bottomheaders[1].textContent = (siteContent["main-content"]["product-h4"])
bottomheaders[2].textContent = (siteContent["main-content"]["vision-h4"])

let bottomcontent = document.querySelectorAll('.bottom-content .text-content p')
bottomcontent[0].textContent = (siteContent["main-content"]["services-content"])
bottomcontent[1].textContent = (siteContent["main-content"]["product-content"])
bottomcontent[2].textContent = (siteContent["main-content"]["vision-content"])

let contactheader = document.querySelector('.contact h4')
contactheader.textContent = (siteContent['contact']['contact-h4'])

let contactinfo = document.querySelectorAll('.contact p')
contactinfo[0].innerHTML = (siteContent['contact']['address'])
contactinfo[1].textContent = (siteContent['contact']['phone'])
contactinfo[2].textContent = (siteContent['contact']['email'])

let footer = document.querySelector('footer p')
footer.textContent = (siteContent['footer']['copyright'])