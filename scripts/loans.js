fetch("./db/dummyData.json")
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        processData(element);  
    });
})
.catch(error => {
    console.error("Error reading JSON file:", error);
});

function processData(data) {
// Process the data from the JSON file
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td> <i onclick="showModalA()" class="fa-solid fa-eye"></i></td>
  </tr>`
  document.querySelector('#pending tbody').insertAdjacentHTML('beforeend',pendingData)
};
// You can perform further operations with the data here



fetch("./db/dummyData.json")
.then(response => response.json())
.then(data => {
    //You can remove the map when you have data coming from the database its just used to change the status
    data.map(items=>{return{...items,status:"Active"}}).forEach(element => {processDataActive(element);});
})
.catch(error => {
    console.error("Error reading JSON file:", error);
});

function processDataActive(data) {
// Process the data from the JSON file
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>
  </tr>`
  document.querySelector('#active tbody').insertAdjacentHTML('beforeend',pendingData)
};




fetch("./db/dummyData.json")
.then(response => response.json())
.then(data => {
    //You can remove the map when you have data coming from the database its just used to change the status
    data.map(items=>{return{...items,status:"Completed"}}).forEach(element => {processDataCompleted(element);});
})
.catch(error => {
    console.error("Error reading JSON file:", error);
});

function processDataCompleted(data) {
// Process the data from the JSON file
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>
  </tr>`
  document.querySelector('#completed tbody').insertAdjacentHTML('beforeend',pendingData)
};




fetch("./db/dummyData.json")
.then(response => response.json())
.then(data => {
    //You can remove the map when you have data coming from the database its just used to change the status
    data.map(items=>{return{...items,status:"Due"}}).forEach(element => {processDataDue(element);});
})
.catch(error => {
    console.error("Error reading JSON file:", error);
});

function processDataDue(data) {
// Process the data from the JSON file
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>
  </tr>`
  document.querySelector('#dueLoan tbody').insertAdjacentHTML('beforeend',pendingData)
};