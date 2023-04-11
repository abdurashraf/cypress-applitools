# Applitools Cypress


#### Stack
<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/applitools-logo.png?raw=true" height="90"/><img src="https://avatars0.githubusercontent.com/u/8908513?s=200&v=4?raw=true" height="85" />    <img src="https://i.pinimg.com/originals/48/4d/9a/484d9a03c676a55671a9d257a48c4378.png?raw=true?raw=true" width="110" height="70"/><img src="https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667?raw=true" height="90" />

#### Setup
1. Clone the Repo<br />
`$ git clone https://github.com/abdurashraf/cypress-applitools.git`<br/>
2. Open the Project<br />
3. Install the dependencies from package.json<br />
 `$ npm install`<br />
4. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitool's Dashboard > Click on Setting button > My API Key
    * Linux/Mac: `export APPLITOOLS_API_KEY=<your_key>`
    * Windows: `set APPLITOOLS_API_KEY=<your_key>`
5. `npx eyes-setup`
6. Use following commands to run test <br />
 `$ npm run task:v1  `<br />

#### Implementation
* Followed the Visual testing [best practices](https://applitools.com/automated-visual-testing-best-practices-guide/) of **Applitools** such as:
  * Verified the entire page where needed (fully option)
  * Used the Strict match level
  * Grouped the tests into batches
  * Used _applitools.config.js_ for configuration
  
* Followed the [best practices](https://docs.cypress.io/guides/references/best-practices.html) for **Cypress**

