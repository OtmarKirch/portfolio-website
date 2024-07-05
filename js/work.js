// Simple Modal Implementation

// HTML structure for the modal
const modalHTML = `
<div id="myModal" class="modal">
  <div class="modal-content">
  <span class="close">&times;</span>
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
</div>
`;

// CSS for the modal
const modalCSS = `
<style>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  background-color: transparent;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-content img {
  width: 100%; /* Make images full width */
  height: 200px; /* Fixed height to show only a portion of the image */
  object-fit: cover; /* Cover the container without stretching */
  object-position: top; /* Align the top part of the image with the container's top */
}

#img_app {
    height: 530px;
    }

#img_citySearch {
    height: 200px;
    }

#img_alert {
    height: 220px;
    }
</style>
`;

// Append the modal HTML and CSS to the document
document.head.insertAdjacentHTML("beforeend", modalCSS);
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Modal functionality
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Listen for a click on the window
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
