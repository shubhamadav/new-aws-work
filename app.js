<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Account Features</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <h1>Welcome to Our App</h1>
    <p id="statusMessage">Loading account status...</p>
    <button id="upgradeBtn" disabled>Upgrade to Premium</button>

    <script>
        const statusMessage = document.getElementById("statusMessage");
        const upgradeBtn = document.getElementById("upgradeBtn");

        // Simulated API call to check account status
        function checkAccountStatus() {
            setTimeout(() => {
                const isPremium = true; // Replace with actual API response
                updateUI(isPremium);
            }, 1000); // Simulate API call delay
        }

        function upgradeAccount() {
            
            setTimeout(() => {
              
                updateUI(true);
            }, 1000); 
        }

        function updateUI(isPremium) {
            if (isPremium) {
                statusMessage.textContent = "You are a premium user. Enjoy premium features!";
                upgradeBtn.disabled = true;
            } else {
                statusMessage.textContent = "You are using the free version. Upgrade to premium to unlock additional features.";
                upgradeBtn.disabled = false;
                upgradeBtn.addEventListener("click", upgradeAccount);
            }
        }

        // Initial setup
        checkAccountStatus();
    </script>
</body>
</html>
