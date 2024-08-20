// HTML structure for the modal in projectData.js

// CSS for the modal

// Append the modal HTML and CSS to the document
// document.head.insertAdjacentHTML("beforeend", modalCSS);
// document.body.insertAdjacentHTML("beforeend", modalHTML);

// Modal functionality
const modal = document.getElementById("projectModal");
//modal.innerHTML = mySciFiAppModalHTML;

// When the user clicks on <span> (x), close the modal

// Function to open the modal
function openModal(project) {
  // if (project === "test") {
  //   //modal.innerHTML = testHTML;
  //   repo = "meetApp";
  //   async function fetchReadme(repo) {
  //     const url = `https://api.github.com/repos/OtmarKirch/${repo}/readme`;
  //     const response = await fetch(url, {
  //       headers: {
  //         Accept: "application/vnd.github.v3.raw",
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch README");
  //     }
  //     const text = await response.text();
  //     console.log(text);

  //     modal.innerHTML = `
  //     <div class="modal-content">
  //     <h2>testheader</h2>
  //     </div>
  //     `;
  //     return text;
  //   }
  //   fetchReadme(repo);
  // }

  if (project === "mySciFiAngular") {
    // client side with angular
    modal.innerHTML = mySciFiAngularHTML;
  }
  if (project === "chatApp") {
    modal.innerHTML = chatAppModalHTML;
  }
  if (project === "meetApp") {
    modal.innerHTML = meetAppModalHTML;
  }
  if (project === "mySciFiApp") {
    // server side
    modal.innerHTML = mySciFiAppModalHTML;
  }
  if (project === "SciFiApp") {
    // client side with react
    modal.innerHTML = SciFiAppModalHTML;
  }
  if (project === "pokedec") {
    modal.innerHTML = pokedecModalHTML;
  }
  modal.style.display = "block";
  const close = document.getElementById("close");
  close.onclick = function () {
    modal.style.display = "none";
  };
}

// Listen for a click on the window
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// // Modal functionality
// const meetAppModal = document.getElementById("meetAppModal");
// meetAppModal.innerHTML = meetAppModalHTML;
// const closeMeetApp = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// closeMeetApp.onclick = function () {
//   meetAppModal.style.display = "none";
// };

// // Function to open the modal
// function openMeetAppModal() {
//   meetAppModal.style.display = "block";
// }

// // Listen for a click on the window
// window.onclick = function (event) {
//   if (event.target == meetAppModal) {
//     meetAppModal.style.display = "none";
//   }
// };
