document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {

    let modal = document.createElement("div");
    modal.id = "subscribeModal";
    modal.style.display = "none"; 
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "1000"; 

    let modalContent = document.createElement("div");
    modalContent.style.position = "absolute";
    modalContent.style.top = "50%";
    modalContent.style.left = "50%";
    modalContent.style.transform = "translate(-50%, -50%)";
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "5px";
    modalContent.style.width = "80%";
    modalContent.style.maxWidth = "500px";
    modalContent.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";

    let header = document.createElement("div");
    header.style.marginBottom = "10px";

    let title = document.createElement("h5");
    title.textContent = "Подпишитесь на новости манги!";
    title.style.fontSize = "1.5em";
    header.appendChild(title);

    let closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.style.float = "right";
    closeBtn.style.border = "none";
    closeBtn.style.background = "none";
    closeBtn.style.fontSize = "1.5em";
    closeBtn.style.cursor = "pointer";
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
    header.appendChild(closeBtn);

    let body = document.createElement("div");
    body.textContent = "Получайте первыми уведомления о новинках, скидках и специальных предложениях на мангу.";
    body.style.marginBottom = "15px";

    let form = document.createElement("form");
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Введите ваш email";
    emailInput.style.width = "100%";
    emailInput.style.padding = "8px";
    emailInput.style.marginBottom = "10px";
    form.appendChild(emailInput);

    let subscribeBtn = document.createElement("button");
    subscribeBtn.textContent = "Подписаться";
    subscribeBtn.style.backgroundColor = "#007bff";
    subscribeBtn.style.color = "#fff";
    subscribeBtn.style.border = "none";
    subscribeBtn.style.padding = "10px 15px";
    subscribeBtn.style.borderRadius = "5px";
    subscribeBtn.style.cursor = "pointer";
    subscribeBtn.addEventListener("click", function() {
      let email = emailInput.value;
      if (email) {
        alert("Спасибо за подписку! (Без отправки на сервер)");
        modal.style.display = "none";
      } else {
        alert("Пожалуйста, введите ваш email.");
      }
    });

    modalContent.appendChild(header);
    modalContent.appendChild(body);
    modalContent.appendChild(form);
    modalContent.appendChild(subscribeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

  
    modal.style.display = "block";

  }, 3000);
});
