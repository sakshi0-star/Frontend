// mockData.js (for testing)
const mockLogin = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'testuser' && password === 'testpassword') {
          resolve({ token: 'mocktoken' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000); // Simulating API delay
    });
  };
  
  // Login form handling
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
  
    try {
      const response = await mockLogin(username, password);
      // For real implementation, handle the token or redirect here
      console.log('Login successful:', response.token);
      // Example: Redirect to another page
      window.location.href = '/dashboard.html';
    } catch (error) {
      console.error('Login error:', error.message);
      errorMsg.textContent = 'Invalid username or password';
    }
  });
  