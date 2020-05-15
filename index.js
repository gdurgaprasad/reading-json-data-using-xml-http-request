const button = document.querySelector("#button");
const button1 = document.getElementById("button1");

const customerDiv = document.getElementById("customer");
const customersDiv = document.querySelector("#customers");

loadEventListeners();

function loadEventListeners() {
  button.addEventListener("click", loadCustomer);
  button1.addEventListener("click", loadCustomers);
}

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onprogress = function () {
    console.log(this.readyState);
  };

  //   xhr.onreadystatechange= function() {
  //     if (this.readyState === 4 && this.status === 200)
  //       console.log(this.readyState);
  //   };

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>Customer
      <li>ID: ${customer.id}</li>
      <li>NAME: ${customer.name}</li>
      <li>AGE: ${customer.age}</li>
      <li>PHONE: ${customer.phoneNumber}</li>
      <li>ADDRESS: ${customer.address}</li>
      </ul>
      `;
      customerDiv.innerHTML = output;
    }
  };

  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onprogress = function () {
    //  console.log(this.readyState);
  };

  //   xhr.onreadystatechange= function() {
  //     if (this.readyState === 4 && this.status === 200)
  //       console.log(this.readyState);
  //   };

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.forEach((customer) => {
        output += `
         <ul>
         <li>ID: ${customer.id}</li>
         <li>NAME: ${customer.name}</li>
         <li>AGE: ${customer.age}</li>
         <li>PHONE: ${customer.phoneNumber}</li>
         <li>ADDRESS: ${customer.address}</li>
         </ul>
         `;
      });

      customersDiv.innerHTML = output;
    }
  };

  xhr.send();
}
