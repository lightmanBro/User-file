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
// Process the data from the JSON file or data received from the database
//Please not all the data is correctly mapped so please map the rest of the dynamic data to the html string
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td id="pndBtn"> <i onclick="showModalA()" class="fa-solid fa-eye"></i></td>
  </tr>`
  document.querySelector('#pending tbody').innerHTML += pendingData;
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
// Process the data from the JSON file or data received from the database
//Please not all the data is correctly mapped so please map the rest of the dynamic data to the html string
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td id="actBtn"> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>
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
// Process the data from the JSON file or data received from the database
//Please not all the data is correctly mapped so please map the rest of the dynamic data to the html string
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td id="compBtn"> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>
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
// Process the data from the JSON file or data received from the database
//Please not all the data is correctly mapped so please map the rest of the dynamic data to the html string
   const pendingData=
    `<tr>
    <td><a href="Customer-profile.html">${data.name}</a></td>
    <td>${data.merchant}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.dueDate}</td>
    <td>${data.total}</td>
    <td><span>${data.status}</span></td>
    <td id="dueBtn"> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>
  </tr>`
  document.querySelector('#dueLoan tbody').insertAdjacentHTML('beforeend',pendingData)
};









setTimeout(() => {
    document.querySelectorAll('#dueBtn').forEach(element => {
        element.addEventListener('click',(e)=>{
            let modal = e.target.parentElement.parentElement,
            customerName = modal.querySelectorAll('td')[0]
            merchantName =  modal.querySelectorAll('td')[1],
            loanAmount =  modal.querySelectorAll('td')[2],
            loanInterest =  modal.querySelectorAll('td')[3],
            loanDue =  modal.querySelectorAll('td')[4],
            totalloanPayback =  modal.querySelectorAll('td')[5],
            loanStatus =  modal.querySelectorAll('td')[6]
            // 
            modalData = document.querySelectorAll('.Active-loan-receipt-content p span');

             modalData[0].innerText= customerName.innerText;
             modalData[1].innerText = merchantName.innerText;
             modalData[2].innerText = loanAmount.innerText;
             modalData[3].innerText = loanInterest.innerText;
             modalData[4].innerText = totalloanPayback.innerText;
             modalData[7].innerText = loanDue.innerText;
             modalData[9].innerText = loanStatus.innerText;
            // console.log(modalData[0],modalData);
            // console.log(e.target.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement)
        })
    });




    document.querySelectorAll('#compBtn').forEach(element => {
        element.addEventListener('click',(e)=>{
            let modal = e.target.parentElement.parentElement,
            customerName = modal.querySelectorAll('td')[0]
            merchantName =  modal.querySelectorAll('td')[1],
            loanAmount =  modal.querySelectorAll('td')[2],
            loanInterest =  modal.querySelectorAll('td')[3],
            loanDue =  modal.querySelectorAll('td')[4],
            totalloanPayback =  modal.querySelectorAll('td')[5],
            loanStatus =  modal.querySelectorAll('td')[6]
            // 
            modalData = document.querySelectorAll('.Active-loan-receipt-content p span');

             modalData[0].innerText= customerName.innerText;
             modalData[1].innerText = merchantName.innerText;
             modalData[2].innerText = loanAmount.innerText;
             modalData[3].innerText = loanInterest.innerText;
             modalData[4].innerText = totalloanPayback.innerText;
             modalData[7].innerText = loanDue.innerText;
             modalData[9].innerText = loanStatus.innerText;
            // console.log(modalData[0],modalData);
            // console.log(e.target.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement)
        })
    });

    
    document.querySelectorAll('#actBtn').forEach(element => {
        
        element.addEventListener('click',(e)=>{
            let modal = e.target.parentElement.parentElement,
            customerName = modal.querySelectorAll('td')[0]
            merchantName =  modal.querySelectorAll('td')[1],
            loanAmount =  modal.querySelectorAll('td')[2],
            loanInterest =  modal.querySelectorAll('td')[3],
            loanDue =  modal.querySelectorAll('td')[4],
            totalloanPayback =  modal.querySelectorAll('td')[5],
            loanStatus =  modal.querySelectorAll('td')[6]
            // 
            modalData = document.querySelectorAll('.Active-loan-receipt-content p span');

             modalData[0].innerText= customerName.innerText;
             modalData[1].innerText = merchantName.innerText;
             modalData[2].innerText = loanAmount.innerText;
             modalData[3].innerText = loanInterest.innerText;
             modalData[4].innerText = totalloanPayback.innerText;
             modalData[7].innerText = loanDue.innerText;
             modalData[9].innerText = loanStatus.innerText;
            // console.log(modalData[0],modalData);
            // console.log(e.target.parentElement.parentElement)
        })
    });


    //Paste the input values individually into the boxes
    document.querySelectorAll('#pndBtn').forEach(element => {
        element.addEventListener('click',(e)=>{
            let modal = e.target.parentElement.parentElement,
            customerName = modal.querySelectorAll('td')[0]
            merchantName =  modal.querySelectorAll('td')[1],
            loanAmount =  modal.querySelectorAll('td')[2],
            loanInterest =  modal.querySelectorAll('td')[3],
            loanDue =  modal.querySelectorAll('td')[4],
            totalloanPayback =  modal.querySelectorAll('td')[5],
            loanStatus =  modal.querySelectorAll('td')[6]
            // 
            modalData = document.querySelectorAll('.receipt-content p span');

             modalData[0].innerText= customerName.innerText;
             modalData[1].innerText = merchantName.innerText;
             modalData[2].innerText = loanAmount.innerText;
             modalData[3].innerText = loanInterest.innerText;
             modalData[4].innerText = totalloanPayback.innerText;
             modalData[7].innerText = loanDue.innerText;
             modalData[9].innerText = loanStatus.innerText;
            // console.log(modalData[0],modalData);
        })
    });
}, 1000);


//When the approve button is clicked the data should be sent to the database
document.querySelector('#dataApprove').addEventListener('click',(e)=>{
  let modalData= e.target.parentElement.parentElement.querySelectorAll('p span');
  let formData = new FormData();
  formData.append('date', modalData[0].innerText)
  formData.append('name', modalData[1].innerText)
  formData.append('merchant', modalData[2].innerText)
  formData.append('amount', modalData[3].innerText)
  formData.append('interest', modalData[4].innerText)
  formData.append('payback', modalData[5].innerText)
  formData.append('startDate', modalData[6].innerText)
  formData.append('span', modalData[7].innerText);
  formData.append('dueDate', modalData[8].innerText);
  formData.append('monthly', modalData[9].innerText);
  const urlEncodedData = new URLSearchParams(formData).toString();
  console.log(urlEncodedData);

//   sendToDb(url, formData)

})

document.querySelector('#approve input[type="submit"]').addEventListener('click',(e)=>{
    e.preventDefault();
    let rejectMessage = document.querySelector('#rejectMessage')
    let formData = new FormData();
    formData.append('rejectMessage',rejectMessage.value.trim())
    const urlEncodedData = new URLSearchParams(formData).toString();
    //   sendToDb(url, formData)
    rejectMessage.value = "";
    console.log(urlEncodedData);
})








async function sendToDb(url, formData) {
    try {
      let response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      receiverName.innerHTML = ``;
    }
  }
  