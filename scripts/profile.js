const profile = {
    //User
    userName: document.querySelector(".welcome p span"),
    userId: document.querySelector(".id"),
  
    //profile summary
    client: {
      company: document.querySelectorAll(".client-details h4"),
      workData: document.querySelectorAll(".client-details h4 span"),
      name: document.querySelectorAll(".client-details h3 span"),
      button: document.querySelector("#summary-btn"),
    },
  
    //Profile details
    user: {
      Phone: document.querySelector("#summary li .phone"),
      Email: document.querySelector("#summary li .email"),
      Birthday: document.querySelector("#summary li .birthday"),
      Address: document.querySelector("#summary li .address"),
      Gender: document.querySelector("#summary li .gender"),
      Employment: document.querySelector("#summary li .employment"),
    },
    profileModal: {
      modal: document.querySelector("#profile"),
      userFirstName: document.querySelector("#profile #ufName"),
      userLastName: document.querySelector("#profile #ulName"),
      userMiddName: document.querySelector("#profile #umName"),
      userEmail: document.querySelector("#profile #uEmail"),
      userPhone: document.querySelector("#profile #uPhone"),
      userAddress: document.querySelector("#profile #uAdd"),
      userDOB: document.querySelector("#profile #uDob"),
      userCompany: document.querySelector("#profile #uCompany"),
      userEmploymentType: document.querySelector("#profile #uEmployType"),
      userNetSalary: document.querySelector("#profile #uNetSalary"),
      userJobPosition: document.querySelector("#profile #uJobPos"),
      userGender: document.querySelector("#profile #uGender"),
      submitBtn: document.querySelector('#profile input[type="submit"]'),
    },
    passwordModal:{
      oldPassword:document.querySelector('#password #old_password'),
      newPassword:document.querySelector('#password #new_passowrd'),
      newPasswordConfirm:document.querySelector('#password #confirm_new_password'),
      button:document.querySelector('#password input[type="submit"]')
    },
  
  
    
    //Guarantor Modal .value
    guarantorModal: {
      form: document.querySelector("#guarantorForm"),
      formTitle: document.querySelector("#guarantorForm .header-title h2"),
      fName: document.querySelector("#guarantorForm #gfirstName"),
      lName: document.querySelector("#guarantorForm #glName"),
      email: document.querySelector("#guarantorForm #gEmail"),
      phone: document.querySelector("#guarantorForm #gPhone"),
      address: document.querySelector("#guarantorForm #gAddress"),
      gender: document.querySelector("#guarantorForm #gGender"),
      dob: document.querySelector("#guarantorForm #gDob"),
      netSalary: document.querySelector("#guarantorForm #gSalary"),
      employment: document.querySelector("#guarantorForm #gEmployment"),
      submitBtn: document.querySelector('#guarantor input[type="submit"]'),
    },
  };
  
  profile.client.button.addEventListener("click", () => {
    profile.profileModal.userFirstName.value = profile.client.name[0].innerHTML;
    profile.profileModal.userMiddName.value = profile.client.name[1].innerHTML;
    profile.profileModal.userLastName.value = profile.client.name[2].innerHTML;
    profile.profileModal.userPhone.value = profile.user.Phone.innerHTML;
    profile.profileModal.userEmail.value = profile.user.Email.innerHTML;
    profile.profileModal.userAddress.value = profile.user.Address.innerHTML;
    profile.profileModal.userCompany.value = profile.client.workData[0].innerHTML;
    profile.profileModal.userEmploymentType.value =
      profile.user.Employment.innerHTML;
  
    profile.profileModal.userNetSalary.value =
      profile.client.workData[2].innerHTML;
    profile.profileModal.userJobPosition.value =
      profile.client.workData[1].innerHTML;
    profile.profileModal.userDOB.value = profile.user.Birthday.innerHTML;
  });
  console.log(profile.profileModal.submitBtn)
  
  userName = sessionStorage.getItem("userName");
  userId = sessionStorage.getItem("userId");
  
  /*
  1.Retrieve data from the database and map it to the innrHtml
  
  2.Retrieve the data from the input modal boxes, sanitize the data and send it to the database.
  */
  
  //1
  async function receivedFromDb(url) {
    try {
      let response = await fetch(url);
      let datas = await response.json();
      console.log(datas);
      //Profile Details
      datas.userDetails.forEach(data=>{
        profile.client.name[0].innerHTML = data.userFirstName;
        profile.client.name[1].innerHTML = data.userMiddName;
        profile.client.name[2].innerHTML = data.userLastName
  
        profile.user.Phone.innerHTML = data.userPhone;
        profile.user.Email.innerHTML = data.userEmail;
        profile.user.gender.innerHTML = data.userGender;
        profile.user.Address.innerHTML = data.userAddress;
        profile.user.Employment.innerHTML = data.Employment;
        profile.user.Birthday.innerHTML = data.userBirthdate;
  
      })
      //The user Loan details preview container
      datas.userLoanDetails.forEach(data=>{
        profile.client.workData[0].innerHTML = data.userCompany;
        profile.client.company[1].innerHTML= data.userJobPosition;
        profile.client.company[4].innerHTML = data.userNextPayment;
        profile.client.company[3].innerHTML = data.clientId;
        profile.client.company[2].innerHTML = data.userNetSalary;
        profile.client.company[6].innerHTML = data.laonStatus;
        profile.client.company[5].innerHTML = data.userPaymentDate;
      })
      //Bank Details
    
      
    } catch (error) {
      //Handle the errors here.
      receiverName.innerHTML = ``;
    }
  }
  
  //2
  const testInputNum = function (input,inputBtn) {
    let inputValue = input.value.trim();
    if (/^\d+$/.test(inputValue)) {
      inputBtn.disabled = false;
      inputBtn.style.backgroundColor = "rgba(0, 0, 0, 0.87)";
    } else {
      inputBtn.disabled = true;
      inputBtn.style.backgroundColor = "red";
    }
  };
  
  const testInputSpecialChar = function (input,inputBtn) {
    let inputValue = input.value.trim();
    if (!/[&<>'"`=]/.test(inputValue)) {
      inputBtn.disabled = false;
      inputBtn.style.backgroundColor = "rgba(0, 0, 0, 0.87)";
      // inputBtn.passwordError.style.display = "none";
    } else {
      inputBtn.disabled = true;
      inputBtn.style.backgroundColor = "red";
      // inputBtn.passwordError.style.display = "block";
    }
  };
  profileModalInputs= [
    profile.profileModal.userFirstName,
    profile.profileModal.userMiddName,
    profile.profileModal.userLastName,
    profile.profileModal.userEmail,
    profile.profileModal.userAddress,
    profile.profileModal.userCompany,
    profile.profileModal.userEmploymentType,
    profile.profileModal.userJobPosition
  ];
  
  
  //Add guarantor middle name;
  guarantorModalInputs = [
    profile.guarantorModal.fName,
    profile.guarantorModal.lName,
    profile.guarantorModal.email,
    profile.guarantorModal.address,
    profile.guarantorModal.employment
  ]
  
  
  //Testing input values inside the phone and amount.
  profile.profileModal.userPhone.addEventListener('input',(e)=>{
    testInputNum(e.target,profile.profileModal.submitBtn);
  })
  profile.profileModal.userNetSalary.addEventListener('input',(e)=>{
    testInputNum(e.target,profile.profileModal.submitBtn);
  })
  profileModalInputs.forEach(input=>{
    input.addEventListener('input',(e)=>{
      testInputSpecialChar(e.target,profile.profileModal.submitBtn)
    })
  })
  profile.profileModal.submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append('fistName',profile.profileModal.userFirstName.value.trim());
    formData.append('middleName',profile.profileModal.userMiddName.value.trim());
    formData.append('lastName',profile.profileModal.userLastName.value.trim());
    formData.append('gender',profile.profileModal.userGender.value.trim());
    formData.append('email',profile.profileModal.userEmail.value.trim());
    formData.append('phone',profile.profileModal.userPhone.value.trim());
    formData.append('address',profile.profileModal.userAddress.value.trim());
    formData.append('dob',profile.profileModal.userDOB.value.trim());
    formData.append('company',profile.profileModal.userCompany.value.trim());
    formData.append('companyType',profile.profileModal.userEmploymentType.value.trim());
    formData.append('role',profile.profileModal.userJobPosition.value.trim());
    const urlEncodedData = new URLSearchParams(formData).toString();
    console.log(urlEncodedData);
    //Send the form data to the database.
    const url = 'phpfilepath'
    // sendToDb(url,urlEncodedData)
  })




//   Design map the Emergncy contact with the data here
  profile.guarantorModal.submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append('firstName', profile.guarantorModal.fName.value.trim());
    formData.append('lastName', profile.guarantorModal.lName.value.trim());
    formData.append('email', profile.guarantorModal.email.value.trim());
    formData.append('phone', profile.guarantorModal.phone.value.trim());
    formData.append('address', profile.guarantorModal.address.value.trim());
    formData.append('employment', profile.guarantorModal.employment.value.trim());
    formData.append('dob', profile.guarantorModal.dob.value.trim());
    formData.append('gender', profile.guarantorModal.gender.value.trim());
    formData.append('netSalary', profile.guarantorModal.netSalary.value.trim());
    const urlEncodedData = new URLSearchParams(formData).toString();
    console.log(urlEncodedData);
    //Send the form data to the database.
    const url = 'phpfilepath'
    // sendToDb(url,urlEncodedData)
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
  