// code to toggle the button //

// function toggleButtons() {
//     var button1 = document.getElementById("button1");
//     var button2 = document.getElementById("button2");
//     var body = document.getElementsByClassName("body2")
    
//     button1.classList.toggle("active", function(){
//       body.style.display = "none"
//     });
//     button2.classList.toggle("active");
//   }


// code to toggle the table //

window.addEventListener('load', function() {
    var tableContent = document.getElementsByClassName('home');
    var tableHeaders = document.getElementsByClassName('button');
    tableContent[0].classList.add('show');
    tableHeaders[0].classList.add('active1');
    console.log(tableContent);
    for (var i = 0; i < tableHeaders.length; i++) {
      tableHeaders[i].addEventListener('click', function() {
        var colIndex = Array.prototype.indexOf.call(tableHeaders, this);
        for (var j = 0; j < tableContent.length; j++) {
          if (j !== colIndex) {
            tableContent[j].classList.remove('show');
          }
        }
        for (var j = 0; j < tableHeaders.length; j++) {
          if (j !== colIndex) {
            tableHeaders[j].classList.remove('active1');
          }
        }
        tableContent[colIndex].classList.toggle('show');
        tableHeaders[colIndex].classList.add('active1');
      });
    }
  });
  
  
// pop up 

function showModal() {
  var modal = document.getElementById("profile");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("profile");
  modal.style.display = "none";
}

function showModal1() {
  var modal = document.getElementById("bank");
  modal.style.display = "block";
}

function closeModal1() {
  var modal = document.getElementById("bank");
  modal.style.display = "none";
}

function showModal2() {
  var modal = document.getElementById("kyc");
  modal.style.display = "block";
}

function closeModal2() {
  var modal = document.getElementById("kyc");
  modal.style.display = "none";
}
function showModal3() {
  var modal = document.getElementById("guarantor");
  modal.style.display = "block";
}

function closeModal3() {
  var modal = document.getElementById("guarantor");
  modal.style.display = "none";
}
// loan modal
function showAP() {
  var modal = document.getElementById("approve");
  modal.style.display = "block";
}
function closeAP() {
  var modal = document.getElementById("approve");
  modal.style.display = "none";
}
function showModalA() {
  var modal = document.getElementById("loan2");
  modal.style.display = "block";
}
function closeModalA() {
  var modal = document.getElementById("loan2");
  modal.style.display = "none";
}
// 
function closeModalC() {
  var modal = document.getElementById("loan1");
  modal.style.display = "none";
}
function showModalC() {
  var modal = document.getElementById("loan1");
  modal.style.display = "block";
}

function closeModalC() {
  var modal = document.getElementById("loan1");
  modal.style.display = "none";
}
// create loan modal
function showModalL() {
  var modal = document.getElementById("loan");
  modal.style.display = "block";
}

function closeModalL() {
  var modal = document.getElementById("loan");
  modal.style.display = "none";
}
// personal loan modal
function showModalP() {
  var modal = document.getElementById("personal-loan");
  modal.style.display = "block";
}

function closeModalP() {
  var modal = document.getElementById("personal-loan");
  modal.style.display = "none";
}
// house loan
function showModalH() {
  var modal = document.getElementById("house-loan");
  modal.style.display = "block";
}

function closeModalH() {
  var modal = document.getElementById("house-loan");
  modal.style.display = "none";
}
// business loan
function showModalB() {
  var modal = document.getElementById("business-loan");
  modal.style.display = "block";
}

function closeModalB() {
  var modal = document.getElementById("business-loan");
  modal.style.display = "none";
}
// education loan
function showModalE() {
  var modal = document.getElementById("education-loan");
  modal.style.display = "block";
}

function closeModalE() {
  var modal = document.getElementById("education-loan");
  modal.style.display = "none";
}
// password modal
function showModalW() {
  var modal = document.getElementById("password");
  modal.style.display = "block";
}

function closeModalW() {
  var modal = document.getElementById("password");
  modal.style.display = "none";
}


// loan history


// window.addEventListener('load', function() {
//   var tableContent = document.getElementsByClassName('table-history');
//   var tableHeaders = document.getElementsByClassName('loan');
//   tableContent[1].classList.add('show');
//   tableHeaders[1].classList.add('active1');
  
//   for (var i = 1; i < tableHeaders.length; i++) {
//     tableHeaders[i].addEventListener('click', function() {
//       var colIndex = Array.prototype.indexOf.call(tableHeaders, this);
//       for (var j = 1; j < tableContent.length; j++) {
//         if (j !== colIndex) {
//           tableContent[j].classList.remove('show');
//         }
//       }
//       for (var j = 1; j < tableHeaders.length; j++) {
//         if (j !== colIndex) {
//           tableHeaders[j].classList.remove('active');
//         }
//       }
//       tableContent[colIndex].classList.toggle('show');
//       tableHeaders[colIndex].classList.add('active');
//     });
//   }
// });

var openPopupBtn = document.getElementById("openPopup");
var closePopupBtn = document.getElementById("closePopup");
var popupContainer = document.getElementById("popupContainer");
var overlay = document.getElementById("overlay");

openPopupBtn.addEventListener("click", function() {
  popupContainer.style.display = "block";
  overlay.style.display = "block"
});

closePopupBtn.addEventListener("click", function() {
  popupContainer.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function() {
  popupContainer.style.display = "none";
  overlay.style.display = "none";

});

  

window.addEventListener('DOMContentLoaded', function() {
  var dateElement = document.getElementById('date');
  var currentDate = new Date();
  dateElement.textContent = currentDate.toDateString();
});


// Function to generate a random number between min and max (inclusive)
// Sample data for 12 months
var loanData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  disbursedAmount: [500000, 700000, 90000, 120000, 900000, 1000000, 250000, 1500000, 3500000, 2600000, 120000, 1000000],
  collectedAmount: [400000, 600000, 80000, 100000, 800000, 800000, 1800000, 800000, 900000, 1040000, 1100000, 900000,],
  dueAmount: [100000, 150000, 108000, 89000, 200000, 130000, 200000, 300000, 200500, 1000000, 1000600, 100000]
  };
  
  // Create a chart using Chart.js
  var ctx = document.getElementById('loan-chart').getContext('2d');
  var chart = new Chart(ctx, {
  type: 'bar',
  data: {
  labels: loanData.labels,
  datasets: [
  {
  label: 'Disbursed Amount',
  data: loanData.disbursedAmount,
  backgroundColor: '#2ecc71'
  },
  {
  label: 'Collected Amount',
  data: loanData.collectedAmount,
  backgroundColor: 'rgba(75, 192, 192, 0.6)'
  },
  {
  label: 'Due Amount',
  data: loanData.dueAmount,
  backgroundColor: '#d35400'
  }
  ]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
  x: {
  stacked: true
  },
  y: {
  stacked: true
  }
  }
  }
  });
  
  weeklyData = {
    labels :['Monday','Tuesday','Wednessday','Thursday','Friday'],
    disbursedAmount:[507280,450173,876000,1145320,748000],
    collectedAmount:[500000,354000,760000,650000,548000],
    dueAmount:[614560,454360,1700000,2365000,1596000],

  }

  // Create a chart using Chart.js
  var ctx = document.getElementById('weeky-loan-chart').getContext('2d');
  var chart = new Chart(ctx, {type: 'bar',data: { labels: weeklyData.labels,
    datasets: [
  {label: 'Disbursed Amount',
  data: weeklyData.disbursedAmount,
  backgroundColor: '#2ecc71'},
  {label: 'Collected Amount',
  data: weeklyData.collectedAmount,
  backgroundColor: 'rgba(75, 192, 192, 0.6)'},

  {label: 'Due Amount',
  data: weeklyData.dueAmount,
  backgroundColor: '#d35400'}]},
  options: {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
  x: {
  stacked: true
  },
  y: {
  stacked: true
  }
  }
  }
  });


//Charts for loans every day

  const dailyLoanData = {
    labels: ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"],
    loanRequests: [5, 7, 3, 10, 8, 6, 9],
    loansApproved: [4, 6, 2, 8, 7, 5, 7],
    loansRejected: [1, 1, 1, 2, 1, 1, 2],
    loanDataLinks: [
        "Loans.html",
        "Loans.html",
        "Loans.html",
        "Loans.html",
        "Loans.html",
        "Loans.html",
        "Loans.html"
    ]
};

 // Get the canvas element and its 2D context
 const canvas = document.getElementById("daily-loan-chart");
 const context = canvas.getContext("2d");

 // Create the chart using Chart.js
 new Chart(context, {
     type: "line",
     data: {
         labels: dailyLoanData.labels,
         datasets: [
             {
                 label: "Loan Requests",
                 borderColor: "#0099ff",
                 fill: false,
                 data: dailyLoanData.loanRequests
             },
             {
              label: "Loans Approved",
              borderColor: "#00ff00",
              fill: false,
              data: dailyLoanData.loansApproved
          },
          {
              label: "Loans Rejected",
              borderColor: "#ff0000",
              fill: false,
              data: dailyLoanData.loansRejected
          }
      ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            scaleLabel: {
                display: true,
                labelString: "Number of Loans"
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "Time of Day"
            }
        }]
    },
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
          title: function(tooltipItem, data) {
              const dataIndex = tooltipItem[0].index;
              const loanDataLink = dailyLoanData.loanDataLinks[dataIndex];
          },
          label: function(tooltipItem, data) {
              const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || "";
              const value = tooltipItem.yLabel;
              return datasetLabel + ": " + value;
          }
      }
  }
}
});






