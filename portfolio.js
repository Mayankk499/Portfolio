document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Form submission handler
      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation
        if (name && email && message) {
          alert("Thank you for your message! I'll get back to you soon.");
          this.reset();
        } else {
          alert("Please fill in all fields.");
        }
      });

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Observe all sections for animations
      document.querySelectorAll(".section").forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease";
        observer.observe(section);
      });

      // Add active nav link highlighting
      window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-links a");

        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 150) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });