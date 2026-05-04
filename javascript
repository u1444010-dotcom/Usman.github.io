<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Gadget Store</title>
    <style>
        :root {
            --bg-color: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1350&q=80');
            --text-color: #232f3e;
            --card-bg: rgba(255, 255, 255, 0.95);
            --card-text: #111;
        }

        .dark-mode {
            --bg-color: linear-gradient(rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1350&q=80');
            --text-color: #ffffff;
            --card-bg: rgba(30, 30, 30, 0.95);
            --card-text: #f4f4f4;
        }

        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            text-align: center; margin: 0; padding: 20px;
            background: var(--bg-color);
            background-size: cover; background-position: center; background-attachment: fixed;
            color: var(--text-color);
            transition: 0.5s;
        }

        /* Floating Dark Mode Button */
        #theme-toggle {
            position: fixed; top: 20px; right: 20px;
            padding: 10px 15px; border-radius: 50px;
            border: none; cursor: pointer; background: #232f3e; color: white;
            font-weight: bold; z-index: 1000; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .search-container { margin: 20px auto 40px auto; max-width: 500px; }
        #searchInput { 
            width: 100%; padding: 15px 20px; font-size: 1rem; 
            border: 2px solid #ff9900; border-radius: 30px; outline: none;
        }

        .category-header { 
            background: #ff9900; color: black; padding: 12px 30px; 
            display: inline-block; border-radius: 30px; margin: 40px 0 20px 0;
            font-weight: bold; font-size: 1.4rem;
        }

        .product-container { display: flex; justify-content: center; flex-wrap: wrap; max-width: 1200px; margin: 0 auto; }

        .product { 
            background: var(--card-bg); width: 280px; margin: 15px; padding: 20px; 
            border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); 
            transition: 0.3s; color: var(--card-text);
        }

        .product:hover { transform: translateY(-10px); }
        img { width: 100%; border-radius: 12px; height: 200px; object-fit: contain; background: #fff; }

        .btn { 
            display: block; background: #ff9900; color: black; padding: 12px; 
            text-decoration: none; font-weight: bold; border-radius: 25px; margin-top: 15px;
        }

        /* Custom Alert Style */
        #custom-alert {
            display: none; position: fixed; top: 50%; left: 50%; 
            transform: translate(-50%, -50%); background: #232f3e; color: white;
            padding: 20px 40px; border-radius: 15px; z-index: 2000;
            box-shadow: 0 0 20px rgba(0,0,0,0.5); font-weight: bold;
        }

        .hidden { display: none !important; }
    </style>
</head>
<body>

    <button id="theme-toggle" onclick="toggleTheme()">🌙 Switch Mode</button>

    <div id="custom-alert">🚀 Opening Amazon... Happy Shopping!</div>

    <h1>Welcome to My Smart Store</h1>
    <p>Premium Gadgets at Your Fingertips</p>

    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search gadgets..." onkeyup="searchProducts()">
    </div>

    <div class="category-header">🚀 Featured Gadgets</div>
    <div class="product-container">
        <div class="product">
            <img src="https://m.media-amazon.com/images/I/71R67A888vL._AC_SL1500_.jpg" alt="Tool">
            <h3>Magnetic Pickup Tool</h3>
            <p>Great for DIY and hard-to-reach places.</p>
            <a href="https://www.amazon.com/dp/B0D531KWFV?tag=mobilecompa09-20" onclick="showAlert()" target="_blank" class="btn">View on Amazon</a>
        </div>
        
        <div class="product">
            <img src="https://i.ibb.co/DqLcR3k/image.jpg" alt="Case">
            <h3>Luxury Mobile Case</h3>
            <p>Premium protection for your smartphone.</p>
            <a href="https://www.amazon.com/dp/B0D531KWFV?tag=mobilecompa09-20" onclick="showAlert()" target="_blank" class="btn">View on Amazon</a>
        </div>
    </div>

    <script>
        // Dark Mode Logic
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            let btn = document.getElementById('theme-toggle');
            if (document.body.classList.contains('dark-mode')) {
                btn.innerText = "☀️ Light Mode";
            } else {
                btn.innerText = "🌙 Dark Mode";
            }
        }

        // Search Logic
        function searchProducts() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let products = document.getElementsByClassName('product');
            for (let i = 0; i < products.length; i++) {
                let title = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
                if (title.includes(input)) {
                    products[i].classList.remove('hidden');
                } else {
                    products[i].classList.add('hidden');
                }
            }
        }

        // Stylish Alert Logic
        function showAlert() {
            let alertBox = document.getElementById('custom-alert');
            alertBox.style.display = 'block';
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2500);
        }
    </script>

</body>
</html>
