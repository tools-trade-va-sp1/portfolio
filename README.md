# Final Assignment for CS 1501 Spring 2021

### [LIVE DEMO](https://react-resume-template.herokuapp.com)

## Description
This is a ReactJS-based personal website template created by Tim Baker - [original code here](https://github.com/tbakerx/react-resume-template). No JavaScript coding is required. All you have to do is update values in `/src/resumeData.json`. Scroll down to **Make It Your Own** for more details!

## Make It Your Own
#### 1. Set up your environment
1. Download [Node.js](https://nodejs.org/en/download/) to run this on your local computer.
2. Click `Fork` in the top right of the screen and fork your own copy of this repository.
2. With your own repository open (verify that it says your username in the top left), click the green `Code` button in the top right and open in GitHub Desktop.
3. In GitHub Desktop, open this repository in Visual Studio Code.
4. Once in Visual Studio Code, open the Terminal and enter `npm --version`.
  * If a number similiar to `7.0.8` appears, you're ready for the next steps.
  * If you receive an error similar to `command not found`, make sure that you have installed [Node.js](https://nodejs.org/en/download/)
5.  In the terminal, run `npm install` to run all the dependencies needed to run this project. This may take a few minutes.
6. To view this project on your local computer in development mode, run `npm start` and it should open in `localhost:3000`.

#### 2. Editing the Information
1. Open `src/resumeData.json` and fill it in your information

**Name** - Enter your name, first or first and last, depending on your comfort level

**Description** - This is the subtext on your header

**Image** - Leave the file name the same, but to change it, simply replace the `public/images/profilepic.jpg` with your own image of the same name (rename it to say `profilepic.jpg`)

**Bio** - This is your about me section!

**Contact Message** - Write an inviting message letting visitors know the best way to get contact.

**Email** - This is optional as I know some people don't like sharing their email publicly, but this is great for getting in touch. If you don't want it, just make it blank `""`

**Address** - Only have the city, state, and zip. You don't need to get more descriptive than this. You can also leave it off if you don't want it.

**Website** - Update this to be `username.github.io`. This is where we'll be hosting your site!

**Resume Download** - Upload your resume in a `.pdf` format on Google Drive and make it viewable to anyone who has the link and place it here.

**Social** - Twitter is pretty big in the CS community, but you don't need to include it if you don't want. Simply delete that section of curly brackets to remove it from the site! Otherwise, fill in the `url` for LinkedIn and GitHub!

**Portfolio** - This section is for projects that you have created. You don't have to fill out all four, but you should have at least one as you've had to create projects for this course. Delete any extra projects that you are utilizing. Every project should have a *title*, *category* which is essentially a one-sentence description of your project, *image* which you should upload in `public/images/portfolio` and then replace the current filename with your project image's filename, and most importantly, an *url* where people can look at your code or the live demo.

**Title** - If you'd like to create the title from Portfolio, open `public/index.html` and change `<title>Portfolio</title>` to whatever text you'd like!

**Other Cosmetic Edits** - If you want to change the `header-background.jpg`, simply replace the file with the file you'd like, similar to the `profilepic.jpg`. Ensure that this is a high-quality image as well. You can also change the `public/favicon.ico` with your own icon! 

**Ensure that you keep the same image name!**

### 3. Host Your Site
<!-- 1. In `.package.json`, find the `homepage` field and replace `tools-trade-va-sp1` with your username.
3. Run `npm run deploy` to send it to the link in `homepage`! -->
1. Go to your repository settings and scroll down to **GitHub Pages**, connect it to your `master` branch, wait a couple minutes and then click the link provided!
