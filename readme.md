# Bootstrap website for downloading a free pdf book.

This is a preliminary project aimed at the association for them to go ahead with the development of their website.
Since their acceptance, I've reworked the tech stack used, and I created a new repository for it.
<a href="https://github.com/alex0rpi/web-veterans-hoquei.git">New repository HERE</a>

The following is the description of the initial project, which due to a complexity increase I decided to level up.

## Features

- Modern layout with custom colors/styles/backgrounds
- Responsive design (yeah, obvious)
- Sticky navbar with style changes on scroll
- Bootstrap modals
- Form & input styles
- Testimonials
- Contact page with Google Map

## Usage

This website is built with [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/). It uses [Font Awesome](https://fontawesome.com/) for icons.

In order to customize this website, you need to install [Node.js](https://nodejs.org/en/). Then, clone this repository and run:

```bash
npm install
```

This will install Bootstrap, Sass and Font Awesome. To build your CSS files from Sass, run:

```bash
npm run sass:build
```

To watch your Sass files for changes, run:

```bash
npm run sass:watch
```

One can add Bootstrap variables to the `bootstrap.scss` file. Just look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add one's own custom styles, use the `styles.scss` file.
