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

If you want to mess with the code you need to install [Node.js](https://nodejs.org/en/).

## Two branches for this project

### Basic layout

- A static site that just uses html - css -jacascript, along with bootstrap with sass.

### Dynamic EJS page with backend

- This version connects to a mongodb database and uses an EJS template to render different pages. It also features login and register endpoints so users can access a private space from which they can create posts and store them in the DB.

- To access this branch:

```Bash
git branch
git checkout add-express-ejs-backend
```

<hr>

## After selecting a branch

- Install dependencies

```bash
npm install
```

- To build your CSS files from Sass, run:

```bash
npm run sass:build
```

- To watch your Sass files for changes, run:

```bash
npm run sass:watch
```

One can add Bootstrap variables to the `bootstrap.scss` file. Just look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add one's own custom styles, use the `styles.scss` file.

- If you selected the branch with backend, don't forget to:

1. Add the .env variables, following the .env-template.
2. run the server and check it connects the mongo DB.

```Bash
npm run dev
```
