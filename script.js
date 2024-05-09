function showHome() {
    document.getElementById('content').innerHTML = `
        <div class="container">
            <h2>Welcome to our Social Media Web</h2>
            <p>YOUR SOCIAL SPHERE</p>
        </div>
    `;
}

function showProfile() {
    document.getElementById('content').innerHTML = `
        <div class="container">
            <h2>User Profile</h2>
            <p>This is your profile page.</p>
        </div>
    `;
}

function showMessages() {
    document.getElementById('content').innerHTML = `
        <div class="container">
            <h2>Messages</h2>
            <p>This is your messages page.</p>
        </div>
    `;
}

function showSettings() {
    document.getElementById('content').innerHTML = `
        <div class="container">
            <h2>Settings</h2>
            <form id="settingsForm">
                <label for="username">Username:</label><br>
                <input type="text" id="username" name="username"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br>
                <button type="button" onclick="saveSettings()">Save</button>
            </form>
        </div>
    `;
}

function saveSettings() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Save settings to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    
    alert(`Settings saved!\nUsername: ${username}\nEmail: ${email}`);
}

window.onload = function() {
    loadSettings();
};

function loadSettings() {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    
    if (savedUsername && savedEmail) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('email').value = savedEmail;
    }
}
