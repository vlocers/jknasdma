
const serviceID = "service_ogqjknm";
const templateID = "template_5z5xsu9";
const userID = "9KOCCYENo16h01ccs";


function sendMail(event) {
  event.preventDefault();

  const form = document.getElementById("contact-form");

  emailjs.sendForm(serviceID, templateID, form, userID)
    .then(function(response) {
      console.log("Eposta gönderildi:", response.status, response.text);
      alert("Eposta başarıyla gönderildi!");
    }, function(error) {
      console.log("Eposta gönderilirken hata oluştu:", error);
      alert("Eposta gönderilirken hata oluştu. Lütfen tekrar deneyin.");
    });
}


document.getElementById("contact-form").addEventListener("submit", sendMail);

