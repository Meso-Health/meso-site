# Meso

A marketing site for the [Meso](https://meso.health) health insurance platform.

### Editing content from Github

Content for this site can be found in [`content.yml`](https://github.com/Watsi/meso-site/blob/master/src/content.yml), a [YAML](https://en.wikipedia.org/wiki/YAML) file. Changing that file will update the site. If you have Git set up on your computer, you can do this locally. If you don't, you can still make changes from Github.

#### Making changes

First, open up [`content.yml`](https://github.com/Watsi/meso-site/blob/master/src/content.yml). From the page, click on the pencil "edit" icon on the top-right of the file. It looks like this:

<div align="center">
  <img width="600" src="https://github.com/Watsi/meso-site/blob/master/.github/edit-file.png?raw=true" alt="" />
</div>

Make your changes using the text editor on this page. YAML is a human-friendly language, so follow the existing format and you'll be fine. Two rules to note:

- Only change text after the colon
- Make sure you use two spaces to indent the text

Ask in [#engineering](slack://channel?id=C03T9TUT1&team=watsi) if you need any help making changes.

#### Previewing changes

When you're done with your edits, you'll submit them as a **pull request**, a way to propose changes to files. At the bottom of the edit page, tap the "Create a new branch and start a pull request" box and hit the green button.

![](https://github.com/Watsi/meso-site/blob/master/.github/propose-changes.png?raw=true)

Then, press "create pull request" to make your changes into a pull request. You'll be taken to the pull request page.

<div align="center">
  <img width="600" src="https://github.com/Watsi/meso-site/blob/master/.github/making-changes.gif?raw=true" alt="" />
</div>

After about a minute, a comment will appear with a link to a preview of your changes on a real version of the site. Click that link to see them in action!

<div align="center">
  <img width="600" src="https://github.com/Watsi/meso-site/blob/master/.github/deploy-preview.gif?raw=true" alt="" />
</div>

If you're happy with your changes, press this big "Merge pull request" button, and https://meso.health will be updated within the minute. If you have a question, feel free to ping us in [#engineering](slack://channel?id=C03T9TUT1&team=watsi).

### Contributing

#### Getting started

To run the site locally, you'll want to clone the repo and install the dependencies:

```bash
git clone https://github.com/watsi/meso-site
cd meso-site
npm install
```

You can start the local webserver by running:

```bash
npm start
```

#### Summary

The site is built on top of [`create-react-app`](https://github.com/facebook/create-react-app), an easy development environment for building apps with React. We use [`react-snap`](https://github.com/stereobooster/react-snap) to render our React app as static HTML and CSS to help with page load times. Content is loaded from the [`content.yml`](https://github.com/Watsi/meso-site/blob/master/src/content.yml) to make copy edits easier for Chase or Mustafa.

#### Deployment

This site is built as a set of static files and hosted on [Netlify](https://netlify.com/). Currently, there's only a production environment, [`meso-health`](https://app.netlify.com/sites/meso-health/overview), since changes can easily be previewed locally.
