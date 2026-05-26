  console.log("JavaScript is connected!"); 
  
document.getElementById("contact-Form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you for contacting us! we will get back to you as soon as possible.");

    document.getElementById("contact-message").style.display = "block";
    this.reset();
  });

  document.getElementById("booking-Form").addEventListener("submit", function(event){

    event.preventDefault();

    alert("Booked successfully! Enjoy your movie.");


    document.getElementById("booking-message").style.display = "block";
    this.reset();

  })







