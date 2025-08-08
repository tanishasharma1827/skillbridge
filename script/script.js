
// Page navigation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function isValidName(name) {
    return /^[A-Za-z\s]+$/.test(name);
  }
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
      page.classList.remove('active');
    });
  
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
      targetPage.style.display = pageId === 'home' ? 'block' : 'flex';
      targetPage.classList.add('active');
    }
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // LOGIN form validation
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
  
    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Simulate login
    alert('Logged in successfully as: ' + email);
    showPage('home');
  });
  
  // SIGNUP form validation
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Simulate sign-up
    alert('Account created successfully! Welcome, ' + name);
    showPage('home');
  });
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && !href.includes('onclick')) {
        e.preventDefault();
        const targetId = href.substring(1);
        let target;
  
        switch (targetId) {
          case 'about':
            target = document.querySelector('.about-us');
            break;
          case 'reviews':
            target = document.querySelector('.reviews');
            break;
          case 'home':
            target = document.querySelector('.hero');
            break;
          default:
            target = document.querySelector(href);
        }
  
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // Initial load
  showPage('home');
  
  // Button animation effect
  document.querySelectorAll('.cta-button, .choice-button, .auth-button').forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
  
  // Floating animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInUp 0.8s ease forwards';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
  
