# Meso

A marketing site for the [Meso](https://meso.health) health insurance platform.

### Editing content from Github

Content for this site can be found in [`content.yml`](https://github.com/Watsi/meso-site/blob/master/src/content.yml), a [YAML](https://en.wikipedia.org/wiki/YAML) file. Changing that file will update the site. If you have Git set up on your computer, you can do this locally. If you don't, you can still make changes from Github.

There's four steps:

1.  Make your copy changes on Github
2.  Create a pull request
3.  Preview your changes
4.  Merge your pull request

#### Making your changes on Github

Open up up this link: [`content.yml`](https://github.com/Watsi/meso-site/blob/master/src/content.yml). From that page, click on the pencil "edit" icon on the top-right of the file. It looks like this:

<br />
<img width="600" src="https://github.com/Watsi/meso-site/blob/master/.github/edit-file.png?raw=true" alt="" />
<br />

This opens up a text editor to change the file. Adjust the copy you want from this file. YAML is a human-friendly language, so follow the existing format and you'll be fine. Two quick rules to note:

- Only change text after the colon
- Make sure you use two spaces to indent the text

If you need any help understanding YAML, ask in [#engineering](slack://channel?id=C03T9TUT1&team=watsi).

#### Creating your pull request

Once you've made your edits you'll create a pull request, a way to propose changes to files.

At the bottom of the edit page, tap the "Create a new branch and start a pull request" box and hit the green button. Then, press "create pull request" to make your changes into a pull request. You'll be taken to the pull request page.

<br />
<div align="center">
  <img width="600" src="https://github.com/Watsi/meso-site/blob/master/.github/making-changes.gif?raw=true" alt="" />
</div>
<br />

#### Previewing your changes

**After about a minute, a comment will appear with a link** to a preview of your changes on a real version of the site. The comment will look something like this:

```
Deploy preview for meso health ready!

Built with commit a6df2a9

https://deploy-preview-3--meso-health.netlify.com
```

Click the link at the bottom to see them in action!

#### Merging your pull request

If you're happy with your changes, press the big "Merge pull request" button. Within the minute, https://meso.health will be updated with your changes.

If you have questions, feel free to ping us in [#engineering](slack://channel?id=C03T9TUT1&team=watsi).

## Contributing

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
