// mke sure to add name to the file 'Script.js;.

document.getElementById("logout").addEventListener("click", function () {
  const accno = (document.querySelector(".accno").innerHTML = "");
  const accname = (document.querySelector(".accname").textContent = "");
  const dob = (document.querySelector(".p1").innerHTML = "");
  const expiry = (document.querySelector(".p3").innerHTML = "");
  const icici = (document.querySelector(".icici").innerHTML = "");
  const vIsa = (document.querySelector(".visa").innerHTML = "");
  const err = (document.querySelector(".p").textContent = "");
  const balance = (document.querySelector(".be").textContent =
    "Your Balance: 0000.00₹");
});
const account1 = {
  name: "kaustubh",
  accno: 8970,
  password: 123,
  password1: 0918,
  password2: 0917,
  password3: 8988,
  das: [],
};
const accnoo = "000-999-000";
document.getElementById("btn").addEventListener("click", function () {
  const data = Number(prompt("Enter account number"));
  const accno = (document.querySelector(".accno").innerHTML = "");
  const accname = (document.querySelector(".accname").textContent = "");
  const dob = (document.querySelector(".p1").innerHTML = "");
  const expiry = (document.querySelector(".p3").innerHTML = "");
  const icici = (document.querySelector(".icici").innerHTML = "");
  const vIsa = (document.querySelector(".visa").innerHTML = "");
  const err = (document.querySelector(".p").textContent = "");

  if (data === account1.accno || data == "kaustubh") {
    const balances = 120.0;
    const accno = (document.querySelector(".accno").innerHTML =
      "0920-293-2332");
    const accname = (document.querySelector(".accname").textContent =
      "Kaustubh kalyan kapse 🎇");
    const dob = (document.querySelector(".p1").innerHTML = "14.06.2009");
    const expiry = (document.querySelector(".p3").innerHTML = "2029");
    const icici = (document.querySelector(".icici").innerHTML = "ICICI");
    const vIsa = (document.querySelector(".visa").innerHTML = "Visa");
    const err = (document.querySelector(".p").textContent = "");
    const balance = (document.querySelector(".be").textContent =
      "Your Balance: 120.00₹");
    document.querySelector(".Depsit").addEventListener("click", function () {
      const paisa = Number(prompt("Enter ammount"));
      const sum = paisa + balances;
      document.querySelector(".be").textContent = `Your Balance: ${sum}.00₹`;
    });
  } else if (data === account1.password1) {
    const balances = 132128.0;
    const accno = (document.querySelector(".accno").innerHTML =
      "0980-9888-6765");
    const accname = (document.querySelector(".accname").textContent =
      "Kalyan Prahbuapa Kapse");
    const dob = (document.querySelector(".p1").innerHTML = "18.12.2019");
    const expiry = (document.querySelector(".p3").innerHTML = "2039");
    const icici = (document.querySelector(".icici").innerHTML = "HDFC");
    const vIsa = (document.querySelector(".visa").innerHTML = "Visa");
    const err = (document.querySelector(".p").textContent = "");
    const balance = (document.querySelector(".be").textContent =
      "Your Balance: 1,32,128.00₹");
    document.querySelector(".Depsit").addEventListener("click", function () {
      const paisa = Number(prompt("Enter ammount"));
      const sum = paisa + balances;
      document.querySelector(".be").textContent = `Your Balance: ${sum}.00₹`;
    });
  } else if (data === account1.password) {
    const balances = 51.0;
    const accno = (document.querySelector(".accno").innerHTML =
      "1899-5571-7220");
    const accname = (document.querySelector(".accname").textContent =
      "Bhoomi 💩");
    const dob = (document.querySelector(".p1").innerHTML = "10.03.2015");
    const expiry = (document.querySelector(".p3").innerHTML = "2049");
    const icici = (document.querySelector(".icici").innerHTML = "Axis");
    const vIsa = (document.querySelector(".visa").innerHTML = "Visa");
    const err = (document.querySelector(".p").textContent = "");
    const balance = (document.querySelector(".be").textContent =
      "Your Balance: 51.00₹");
    document.querySelector(".Depsit").addEventListener("click", function () {
      const paisa = Number(prompt("Enter ammount"));
      const sum = paisa + balances;
      document.querySelector(".be").textContent = `Your Balance: ${sum}.00₹`;
    });
  } else if (data === account1.password2) {
    const balances = 1828.3;
    const accno = (document.querySelector(".accno").innerHTML =
      "2349-8790-9890");
    const accname = (document.querySelector(".accname").textContent =
      "Deepa kalyan kapse");
    const dob = (document.querySelector(".p1").innerHTML = "01.08.1989");
    const expiry = (document.querySelector(".p3").innerHTML = "2021");
    const icici = (document.querySelector(".icici").innerHTML = "Axis");
    const vIsa = (document.querySelector(".visa").innerHTML = "Visa");
    const err = (document.querySelector(".p").textContent = "");
    const balance = (document.querySelector(".be").textContent =
      "Your Balance: 1,828.30₹");
    document.querySelector(".Depsit").addEventListener("click", function () {
      const paisa = Number(prompt("Enter ammount"));
      const sum = paisa + balances;
      document.querySelector(".be").textContent = `Your Balance: ${sum}.00₹`;
    });
  } else if (data === account1.password3) {
    const balances = 128.0;
    const accno = (document.querySelector(".accno").innerHTML =
      "5876-566-7899");
    const accname = (document.querySelector(".accname").textContent =
      "Adon .G");
    const dob = (document.querySelector(".p1").innerHTML = "12.06.2009");
    const expiry = (document.querySelector(".p3").innerHTML = "2031");
    const icici = (document.querySelector(".icici").innerHTML = "ICICI");
    const vIsa = (document.querySelector(".visa").innerHTML = "Visa");
    const err = (document.querySelector(".p").textContent = "");
    const balance = (document.querySelector(
      ".be"
    ).textContent = `Your Balance:128.00₹`);
    document.querySelector(".Depsit").addEventListener("click", function (e) {
      e.preventDefault();
  
      const paisa = Number(prompt("Enter ammount"));
      let sum = paisa + balances;
 
      // account1.das.push(sum);
      document.querySelector(".be").textContent = `Your Balance: ${sum}.00₹`;
      
const movments = [
  122,452,1312,9982,-239,-21
];

movments.forEach(mov => {
  const gu = Number(prompt("Enter your number"));
 const store = []
 function add(gu) {
   const datas = mov + gu;
   store.push(datas)
 }
  console.log();
});
console.log(movments);
    });
  } else {
    document.querySelector(".p").textContent = "connection declined!";
    console.log("connection declined!✂");
  }
});
