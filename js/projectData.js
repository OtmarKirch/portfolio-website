// const testHTML = `
// <div class="modal-content">
// <p>Test</p>
// </div>`;

const pokedecModalHTML = `
  <div class="modal-content">
  <span id="close">&times;</span>
    <h2>Pokedec</h2>
  <p>This simple JavaScript app was developed as a learning project to understand the principles of programming with JavaScript. By building this small web application, which utilizes HTML, CSS, and JavaScript to load data from an external API and allows for the detailed viewing of data points, the development process can be followed through the commit messages and branches of this project, providing insight into each step taken towards achieving the objective of creating a functional and interactive web application.</p>
  <p> \u2192 Take a look at <a href="https://otmarkirch.github.io/simple-js-app/">the app</a></p>
  <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/simple-js-app/">GitHub repository</a></p>

  <h3>Impressions</h3>
  <p>The pokedec app at the start. It shows all Pokémon by default with their statistics.</p>
  <img class="pokedec--presentation" src="./img/projects/pokedec/PokedecStartView.png" alt="">
  <p>The input allows for searching and selecting Pokémon.</p>
  <img class="pokedec--presentation" src="./img/projects/pokedec/PokedecSearch.png" alt="">
  <p>Details of the selected Pokémon are shown.</p>
  <img class="pokedec--presentation" src="./img/projects/pokedec/PokedecDetails.png" alt="">
  </div>`;

const mySciFiAppModalHTML = `
  <div class="modal-content">
  <span id="close">&times;</span>
    <h2>mySciFi App</h2>
  <p> \u2192 Take a look at <a href="https://myscifiapp.netlify.app/">the app</a></p>
  <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/MySciFi-client">GitHub repository</a></p>
  <p> \u2192 Take a look at <a href="https://quiet-bastion-19832-9b36523e0b42.herokuapp.com/documentation.html">the server</a></p>
  <p> \u2192 See the code and more information on the server on my <a href="https://github.com/OtmarKirch/sci-fi-app">GitHub repository</a></p>
  <p> In the following slide show you can see the development of the whole MERN stack (MongoDB, Express, React and Node.js), including the client side which is realized in another project.</p>
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp1.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp2.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp3.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp4.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp5.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp6.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp7.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp8.png" alt="">
  </div>
`;

const meetAppModalHTML = `
  <div class="modal-content">
  <span id="close">&times;</span>
    <h2>Meet App</h2>
  <p>This project involves building a serverless, progressive web application (PWA) using React and a test-driven development (TDD) approach. The application leverages the Google Calendar API to fetch upcoming events. By combining serverless and PWA concepts, the application benefits from no backend maintenance, scalability, availability, no idle time costs, instant loading, offline support, push notifications, "add to home screen" prompt, responsive design, and cross-platform compatibility. The TDD approach ensures high-quality code by writing tests before actual functionality. The application also includes data visualization through graphs, enhancing its visual appeal and data interpretation. Users can search for a city and get a list of events hosted in that city. The data visualization component includes a scatter plot showing the number of events in each location and a pie chart visualizing the popularity of event genres.</p>
  <p> \u2192 Take a look at <a href="https://otmarkirch.github.io/meetApp/">the app</a></p>
  <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/meetApp">GitHub repository</a></p>
    <h3>Technologies</h3>
    <p>React, Google Calendar API, AWS Lambda, AWS API Gateway, AWS S3, AWS CloudFront, Jest, Puppeteer, Recharts, HTML, CSS</p>
    
    <h3>Impressions</h3>
    <p>The meet app at the start. It shows 32 events of all cities by default with their statistics.</p>
            <img id="img_app" src="./img/projects/meetApp/meetApp.png" alt="meet app impression">
            <p>The input allows for searching and selecting cities.</p>
            <img id="img_citySearch" src="./img/projects/meetApp/meetApp_citySearch.png" alt="meet app impression">
            <p>Alerts are shown when the app is offline or when the user types incorrect input.</p>
            <img id="img_alert" src="./img/projects/meetApp/meetApp_alerts.png" alt="meet app impression">
            
  </div>
`;

const chatAppModalHTML = `
  <div class="modal-content">
  <span id="close">&times;</span>
    <h2>Chat App</h2>
  <p>This project involves building a native real-time chat application using React Native, and Firebase. The chat application uses Firebase to authenticate users and store chat messages. The application includes features such as anonymous user authentication, chat room creation, real-time messaging, and message storage. The application also includes a responsive design, allowing users to access the chat application from various devices.</p>
  <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/chat-demo">GitHub repository</a></p>
  <h3>Technologies</h3>
  <p>React Native, Firebase, Expo</p>

  <h3>Impressions</h3>
  <p>The chat app at the start. It shows the login screen.</p>
            <img id="img_login" src="./img/projects/chatApp/ChatApp_startscreen.png" alt="chat app start screen">
            <p>The chat view</p>
            <img id="img_chat" src="./img/projects/chatApp/ChatApp_chatview.png" alt="chat view">
            <p>Sheet to add photos, images and location</p>
            <img id="img_sheet" src="./img/projects/chatApp/ChatApp_addchoice.png" alt="sheet to add photos, images and location">
  
  </div>
  `

  const mySciFiAngularHTML = `
  <div class="modal-content">
  <span id="close">&times;</span>
    <h2>mySciFi App Angular</h2>
    <p>This app provides a frontend for the MyFlix API. It allows users to sign up, log in, view information about movies, and add movies to their list of favorites. The server-side code and documentation for this app can be found in this repository. A frontend has already been written in React. This project is a rewrite of the frontend in Angular.</p>
    <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/mySciFi-Angular-client">GitHub repository</a></p>
    <p> \u2192 Take a look at <a href="https://otmarkirch.github.io/mySciFi-Angular-client/">the app</a></p>
    <h3>Technologies</h3>
    <p>Angular, TypeScript, Angular Material</p>

    <h3>Impressions</h3>
            <p>Viewing the movies</p>
            <img id="img_movie" src="./img/projects/mySciFiAppAngular/Angular1.png" alt="movie view">
            <p>Updating details</p>
            <img id="img_profile" src="./img/projects/mySciFiAppAngular/Angular2.png" alt="details view">
  </div>
  
  `

  const SciFiAppModalHTML = `
  <div class="modal-content">
  <span id="close">&times;</span>
    <h2>mySciFi App</h2>
  <p> \u2192 Take a look at <a href="https://myscifiapp.netlify.app/">the app</a></p>
  <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/MySciFi-client">GitHub repository</a></p>
  <p> \u2192 Take a look at <a href="https://quiet-bastion-19832-9b36523e0b42.herokuapp.com/documentation.html">the server</a></p>
  <p> \u2192 See the code and more information on my <a href="https://github.com/OtmarKirch/sci-fi-app">GitHub repository</a></p>
  <p> In the following slide show you can see the development of the whole MERN stack (MongoDB, Express, React and Node.js), including the server side which is realized in another project.</p>
  
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp1.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp2.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp3.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp4.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp5.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp6.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp7.png" alt="">
            <img class="mySciFiApp--presentation" src="./img/projects/mySciFiApp/mySciFiApp8.png" alt="">
  </div>
`;