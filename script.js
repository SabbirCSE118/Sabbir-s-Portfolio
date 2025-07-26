const form = document.getElementById('contactForm');
  const messagePara = document.querySelector('.form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        messagePara.textContent = "Message sent successfully!";
        messagePara.style.color = "green";
        form.reset();
      } else {
        messagePara.textContent = "❌ Something went wrong. Try again.";
        messagePara.style.color = "red";
      }
    } catch (error) {
      messagePara.textContent = "⚠️ Error sending message.";
      messagePara.style.color = "red";
    }
  });