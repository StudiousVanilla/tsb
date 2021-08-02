The Sounding Board

Website developed by Oisín Byrne - https://www.oisinbyrne.me

# Site Details :computer: #

- Frontend is built with React.

- The blog portion of the website accesses a Google Firestire database where blog posts are stored.

- There is a seperate, private, frontend that was built so that the client could have access to a custom built CMS. This interacts with Google Firestore to update blog posts and publish data to the main, public, TSB site.

- The private CMS frontend uses Firestore to authenticate users and keep data secure.

- Has a private backend used to handle data sent via the contact form. Built using Node, Express JS and the [node-mailer]('https://nodemailer.com/about/') package. This backend is hosted on Heroku.

- Deployed to Netlfiy



## CSS organisation :art: ##

- CSS reset is at the beginning of ```index.css```. I used Andy Bell's excellent 'Modern CSS Reset', which can be found here: https://piccalil.li/blog/a-modern-css-reset

- All pages have a dedicated stylesheet for desktop/large screens. Those stylesheets are then imported into ```index.css```

- Mobile styling is written directly into ```index.css```

- ```index.css``` also hass some general css rules that affect the entore page, such as the main container for the page, scroll bar, a reset on ```<a>``` tags and the ```.mob-only``` class
