(function() {
    emailjs.init("11MJQnf9mAUYPmTCu");
  
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs are specific to the fields in your HTML form
      emailjs.sendForm('service_9rq5lxr', 'template_6juisst', this)
        .then(function() {
          alert('Your message has been sent!');
        }, function(error) {
          console.log('Error:', error);
        });
    });
  })();
  