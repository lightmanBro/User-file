/*This is a sample of the chart in the dashboard, 

*/


const dashboard = {
    pendingLoan:document.querySelector('#Amount p span'),
    activeLoan:document.querySelector('#calendar p span'),
    dueLoan:document.querySelector('#due p span'),
    completedLoan: document.querySelector('#interest p span'),
    pendingLoanTotal:document.querySelector('#total p span'),
    totalActive:document.querySelector('#time p span'),
    totalDue:document.querySelector('#status p span'),
    totalCustomers: document.querySelector('#months p span')
}



//The data summary will be pasted here.
const url = 'dashboardData.php'
fetch("url")
.then(response => response.json())
.then(data => {
   data.forEach(data => {
    dashboard.pendingLoan.innerHTML = data.pendingLoanCount;
    dashboard.activeLoan.innerHTML = data.activeLoanCount;
    dashboard.dueLoan.innerHTML = data.pendingLoanCount;
    dashboard.completedLoan.innerHTML = data.completedLoanCount;
    dashboard.pendingLoanTotal.innerHTML = data.pendingLoanTotal;
    dashboard.totalActive.innerHTML = data.totalActive;
    dashboard.totalDue.innerHTML = data.totalDue;
    dashboard.totalCustomers.innerHTML = data.totalCustomers;
   });
    
})
.catch(error => {
    console.error("Error reading JSON file:", error);
});



var loanData = {//These data are mapped to the data in the dashboard for demonstration purpose but real data is expected from the database.
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
  
  
  
  
  
  
  