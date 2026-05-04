<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Gadget Store | Usman</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        :root {
            --bg-color: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1350&q=80');
            --text-color: #232f3e;
            --card-bg: rgba(255, 255, 255, 0.95);
            --card-text: #111;
            --secondary-text: #555;
        }

        .dark-mode {
            --bg-color: linear-gradient(rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1350&q=80');
            --text-color: #ffffff;
            --card-bg: rgba(30, 30, 30, 0.95);
            --card-text: #f4f4f4;
            --secondary-text: #ccc;
        }

        body { 
            font-family: 'Segoe UI', sans-serif; 
            text-align: center; margin: 0; padding: 0;
            background: var(--bg-color);
            background-size: cover; background-position: center; background-attachment: fixed;
            color: var(--text-color);
            transition: 0.5s;
            scroll-behavior: smooth;
        }

        /* Buttons & Alerts */
        #theme-toggle { position: fixed; top: 20px; right: 20px; padding: 10px 15px; border-radius: 50px; border: none; cursor: pointer; background: #232f3e; color: white; z-index: 1000; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        #backToTop { position: fixed; bottom: 20px; right: 20px; padding: 12px 18px; border-radius: 50%; border: none; cursor: pointer; background: #ff9900; color: black; z-index: 1000; display: none; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        #custom-alert { display: none; position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #ff9900; color: black; padding: 12px 30px; border-radius: 30px; z-index: 2000; box-shadow: 0 5px 15px rgba(0,0,0,0.3); font-weight: bold; animation: fadeInDown 0.5s; }

        @keyframes fadeInDown { from { top: -50px; opacity: 0; } to { top: 20px; opacity: 1; } }

        .search-container { margin: 40px auto; max-width: 500px; padding: 0 20px; }
        #searchInput { width: 100%; padding: 15px 20px; font-size: 1rem; border: 2px solid #ff9900; border-radius: 30px; outline: none; background: var(--card-bg); color: var(--card-text); }

        .about-section { background: var(--card-bg); margin: 40px auto; padding: 30px; max-width: 800px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .category-header { background: #ff9900; color: black; padding: 12px 30px; display: inline-block; border-radius: 30px; margin: 40px 0 20px 0; font-weight: bold; }

        .product-container { display: flex; justify-content: center; flex-wrap: wrap; max-width: 1200px; margin: 0 auto; }
        .product { background: var(--card-bg); width: 280px; margin: 15px; padding: 20px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transition: 0.3s; }
        .product:hover { transform: translateY(-10px); }
        .product img { width: 100%; height: 180px; object-fit: contain; background: #fff; border-radius: 12px; }

        .stars { color: #f1c40f; margin: 10px 0; }
        .btn { display: block; background: #ff9900; color: black; padding: 12px; text-decoration: none; font-weight: bold; border-radius: 25px; margin-top: 15px; }

        .share-box { margin-top: 15px; border-top: 1px solid #ddd; padding-top: 10px; }
        .share-box i { cursor: pointer; margin: 0 10px; font-size: 1.2rem; color: var(--secondary-text); transition: 0.3s; }
        .share-box i:hover { color: #ff9900; }

        .hidden { display: none !important; }
        footer { padding: 40px; font-size: 0.9rem; }
    </style>
</head>
<body>

    <button id="theme-toggle" onclick="toggleTheme()">🌙 Dark Mode</button>
    <button id="backToTop" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>

    <div id="custom-alert">🚀 Link Copied!</div>

    <div style="padding-top: 60px;">
        <h1>Smart Gadget Store</h1>
        <p>Premium Gadgets Handpicked by Usman</p>
    </div>

    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search gadgets (e.g. Tool, Case)..." onkeyup="searchProducts()">
    </div>

    <section class="about-section">
        <h2>About Me</h2>
        <p>Assalam-o-Alaikum! Main <strong>Usman</strong> hoon. Main gadgets ka shaukeen hoon aur yahan wahi products share karta hoon jo kamaal ke hain.</p>
    </section>

    <div class="category-header">🚀 Featured Gadgets</div>

    <div class="product-container">
        <div class="product">
            <img src="https://m.media-amazon.com/images/I/71R67A888vL._AC_SL1500_.jpg" alt="Tool">
            <h3>Magnetic Pickup Tool</h3>
            <div class="stars">★★★★★</div>
            <p>Great for DIY and hard-to-reach places.</p>
            <a href="https://www.amazon.com/dp/B0D531KWFV?tag=mobilecompa09-20" target="_blank" class="btn" onclick="showAlert('🚀 Opening Amazon...')">View on Amazon</a>
            <div class="share-box">
                <i class="fa fa-whatsapp" onclick="shareToWhatsApp('https://www.amazon.com/dp/B0D531KWFV')"></i>
                <i class="fa fa-copy" onclick="copyLink('https://www.amazon.com/dp/B0D531KWFV')"></i>
            </div>
        </div>

        <div class="product">
            <img src="https://m.media-amazon.com/images/I/71Xm8p3XkEL._AC_SL1500_.jpg" alt="Luxury Case">
            <h3>Luxury Mobile Case</h3>
            <div class="stars">★★★★★</div>
            <p>High-quality protective case for your smartphone.</p>
            <a href="https://www.amazon.com/s?k=luxury+mobile+case" target="_blank" class="btn" onclick="showAlert('🚀 Opening Amazon...')">View on Amazon</a>
            <div class="share-box">
                <i class="fa fa-whatsapp" onclick="shareToWhatsApp('https://www.amazon.com/s?k=luxury+mobile+case')"></i>
                <i class="fa fa-copy" onclick="copyLink('https://www.amazon.com/s?k=luxury+mobile+case')"></i>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2026 Smart Store | Usman</p>
    </footer>

    <script>
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            let btn = document.getElementById('theme-toggle');
            btn.innerText = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        }

        function copyLink(link) {
            navigator.clipboard.writeText(link).then(() => {
                showAlert("📋 Link Copied to Clipboard!");
            });
        }

        function shareToWhatsApp(link) {
            window.open(`https://api.whatsapp.com/send?text=Check out this gadget: ${link}`, '_blank');
        }

        function showAlert(msg) {
            let alertBox = document.getElementById('custom-alert');
            alertBox.innerText = msg;
            alertBox.style.display = 'block';
            setTimeout(() => { alertBox.style.display = 'none'; }, 2000);
        }

        // Updated Search Logic
        function searchProducts() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let products = document.getElementsByClassName('product');
            
            for (let p of products) {
                // Title aur Description dono ko check karega
                let title = p.querySelector('h3').innerText.toLowerCase();
                let desc = p.querySelector('p').innerText.toLowerCase();
                
                if (title.includes(input) || desc.includes(input)) {
                    p.style.display = "block"; // Show
                    p.classList.remove('hidden');
                } else {
                    p.style.display = "none"; // Hide
                    p.classList.add('hidden');
                }
            }
        }

        window.onscroll = () => {
            document.getElementById('backToTop').style.display = 
                (window.scrollY > 400) ? 'block' : 'none';
        };

        if(localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('theme-toggle').innerText = "☀️ Light Mode";
        }
    </script>
</body>
</html>
