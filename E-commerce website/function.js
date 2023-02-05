
  // Variables
  const menuList = document.querySelector("#menu ul");
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const orderList = [];

  // Event Listeners
  form.addEventListener("submit", addOrder);
  menuList.addEventListener("click", addToOrder);

  // Functions
  function addToOrder(e) {
    if (e.target.tagName === "BUTTON") {
      const li = e.target.parentElement;
      orderList.push(li.textContent);
      console.log(orderList);
    }
  }

  function addOrder(e) {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const order = orderList.join(", ");
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nOrder: ${order}`);

    // Clear Inputs
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    orderList.length = 0;
  }
