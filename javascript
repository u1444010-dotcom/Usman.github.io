<script>
    // 1. Theme Toggle Logic
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        let btn = document.getElementById('theme-toggle');
        btn.innerText = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
        // Theme save karne ke liye (Optional)
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    // 2. Advanced Search Logic with "No Results" message
    function searchProducts() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        let products = document.getElementsByClassName('product');
        let found = false;

        for (let i = 0; i < products.length; i++) {
            let title = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
            let desc = products[i].getElementsByTagName('p')[0].innerText.toLowerCase();
            
            if (title.includes(input) || desc.includes(input)) {
                products[i].classList.remove('hidden');
                found = true;
            } else {
                products[i].classList.add('hidden');
            }
        }

        // Agar kuch na mile to alert ya text dikhayein
        if(!found && input !== "") {
            console.log("No products found for: " + input);
        }
    }

    // 3. Stylish Alert & Copy Link
    function showAlert(customMsg) {
        let alertBox = document.getElementById('custom-alert');
        if(customMsg) alertBox.innerText = customMsg;
        else alertBox.innerText = "🚀 Opening Amazon... Happy Shopping!";
        
        alertBox.style.display = 'block';
        setTimeout(() => { alertBox.style.display = 'none'; }, 2000);
    }

    // 4. Back to Top & Scroll Listener
    window.onscroll = function() {
        let topBtn = document.getElementById('backToTop');
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };

    // 5. Page Load Settings
    window.onload = () => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('theme-toggle').innerText = "☀️ Light Mode";
        }
    };
</script>
