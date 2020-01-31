# Meso

A marketing site for the [Meso](https://meso.health) health insurance platform.

### Editing content from Github

Content for this site can be found in [`content.yml`](https://github.com/Meso-Health/meso-site/blob/master/src/content.yml), a [YAML](https://en.wikipedia.org/wiki/YAML) file. Changing that file will update the site.

To update the content follow these four steps:

1.  [Make your copy changes on Github](#making-your-changes-on-github)
2.  [Create your pull request](#creating-your-pull-request)
3.  [Preview your changes](#previewing-your-changes)
4.  [Merge your pull request](#merging-your-pull-request)

#### Making your changes on Github

Open up up this link: [`content.yml`](https://github.com/Meso-Health/meso-site/blob/master/src/content.yml). From that page, click on the pencil "edit" icon on the top-right of the file. It looks like this:

<br />
<div align="center">
  <img width="600" src="https://github.com/Meso-Health/meso-site/blob/master/.github/edit-file.png?raw=true" alt="" />
</div>
<br />

This opens up a text editor to change the file. Adjust the copy you want from this file. YAML is a human-friendly language, so follow the existing format and you'll be fine. Two quick rules to note:

- Only change text after the colon
- Make sure you use two spaces to indent the text

#### Creating your pull request

Once you've made your edits you'll create a pull request, a way to propose changes to files.

At the bottom of the edit page, tap the "Create a new branch and start a pull request" box and hit the green button. Then, press "create pull request" to make your changes into a pull request. You'll be taken to the pull request page.

<br />
<div align="center">
  <img width="600" src="https://github.com/Meso-Health/meso-site/blob/master/.github/making-changes.gif?raw=true" alt="" />
</div>
<br />

#### Merging your pull request

If you're happy with your changes, press the big "Merge pull request" button. Within the minute, https://meso.health will be updated with your changes.

## Contributing

#### Getting started

To run the site locally, you'll want to clone the repo and install the dependencies:

```bash
git clone https://github.com/Meso-Health/meso-site
cd meso-site
npm install
```

You can start the local webserver by running:

```bash
npm start
```

#### Summary

The site is built on top of [`create-react-app`](https://github.com/facebook/create-react-app), an easy development environment for building apps with React. We use [`react-snap`](https://github.com/stereobooster/react-snap) to render our React app as static HTML and CSS to help with page load times. Content is loaded from the [`content.yml`](https://github.com/Meso-Health/meso-site/blob/master/src/content.yml) to make copy edits easier.

#### Deployment

This site is built as a set of static files and hosted on [Netlify](https://netlify.com/). Currently, there's only a production environment, [`meso-health`](https://app.netlify.com/sites/meso-health/overview), since changes can easily be previewed locally.
