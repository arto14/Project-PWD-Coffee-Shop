function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

const menuSections = ['coffee', 'non-coffee', 'snacks'];
let currentMenuIndex = 0;

function showMenu(index) {
    // Sembunyikan semua bagian dan hapus kelas aktif dari judul
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.menu-title').forEach(title => {
        title.classList.remove('active');
    });
    
    // Show current section and activate current title
    const currentSection = document.getElementById(menuSections[index]);
    const currentTitle = document.querySelector(`[data-menu="${menuSections[index]}"]`);
    
    currentSection.classList.add('active');
    currentTitle.classList.add('active');
}

function nextMenu() {
    currentMenuIndex = (currentMenuIndex + 1) % menuSections.length;
    showMenu(currentMenuIndex);
}

function prevMenu() {
    currentMenuIndex = (currentMenuIndex - 1 + menuSections.length) % menuSections.length;
    showMenu(currentMenuIndex);
}

// Add click events to menu titles
document.querySelectorAll('.menu-title').forEach((title, index) => {
    title.addEventListener('click', () => {
        currentMenuIndex = index;
        showMenu(currentMenuIndex);
    });
});

// Initialize the first menu section
showMenu(currentMenuIndex);

// Typewriter effect
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

        // Delay random time between 100-200ms for more realistic typing effect
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, Math.random() * 100 + 100);
    } else if (typeof fnCallback == 'function') {
        // Call callback after timeout
        setTimeout(fnCallback, 700);
    }
}

// Start the typewriter effect for infinite loop
function startTextAnimation(i) {
    const text = 'Welcome to CACICU COFFEE';
    
    if (typeof text[i] === 'undefined') {
        setTimeout(function() {
            document.getElementById("typewriter-text").innerHTML = '';
            startTextAnimation(0);
        }, 2000); // Wait 2 seconds before starting over
        return;
    }
    
    typeWriter(text, 0, function() {
        startTextAnimation(i + 1);
    });
}

// Start the animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    startTextAnimation(0);
});

// Fungsi untuk menangani pemesanan via WhatsApp
function pesanSekarang() {
    // Nomor WhatsApp tujuan (ganti dengan nomor yang sesuai)
    const phoneNumber = "6289663700101";
    
    // Template pesan
    const message = `Halo CACICU COFFEE!
Saya ingin memesan:

[Tulis pesanan Anda di sini]

Alamat pengiriman:
[Tulis alamat lengkap Anda]

Metode pembayaran:
[Transfer Bank/E-Wallet/COD]`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
}

// Tambahkan event listener untuk tombol pesan
document.addEventListener('DOMContentLoaded', function() {
    const pesanButton = document.querySelector('.metode-item .btn');
    if (pesanButton) {
        pesanButton.addEventListener('click', pesanSekarang);
    }
});

// Data menu items
const menuInfo = {
    espresso: {
        name: "Espresso",
        description: "Minuman kopi yang dihasilkan dari ekstraksi biji kopi yang digiling dengan air panas di bawah tekanan tinggi.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas" },
            { icon: "fa-coffee", text: "100% Arabica beans" },
            { icon: "fa-clock", text: "Preparation time: 3-5 minutes" },
            { icon: "fa-info", text: "30ml shot" }
        ],
        ingredients: "Biji kopi pilihan, Air panas bertekanan tinggi",
        calories: "1-2 kalori per shot"
    },
    latte: {
        name: "Latte",
        description: "Kombinasi sempurna antara espresso dan susu steamed dengan lapisan foam tipis di atasnya.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas/dingin" },
            { icon: "fa-coffee", text: "1 shot espresso" },
            { icon: "fa-clock", text: "Preparation time: 5-7 minutes" },
            { icon: "fa-info", text: "240ml serving" }
        ],
        ingredients: "Espresso, Steamed milk, Milk foam",
        calories: "120 kalori"
    },
    cappuccino: {
        name: "Cappuccino",
        description: "Minuman kopi klasik Italia dengan kombinasi seimbang antara espresso, steamed milk, dan foam tebal.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas" },
            { icon: "fa-coffee", text: "Double shot espresso" },
            { icon: "fa-clock", text: "Preparation time: 5-7 minutes" },
            { icon: "fa-info", text: "180ml serving" }
        ],
        ingredients: "Espresso, Steamed milk, Thick milk foam",
        calories: "140 kalori"
    },
    mocha: {
        name: "Mocha",
        description: "Perpaduan nikmat antara espresso, cokelat, dan susu steamed dengan whipped cream.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas/dingin" },
            { icon: "fa-coffee", text: "1 shot espresso" },
            { icon: "fa-clock", text: "Preparation time: 6-8 minutes" },
            { icon: "fa-info", text: "240ml serving" }
        ],
        ingredients: "Espresso, Chocolate syrup, Steamed milk, Whipped cream",
        calories: "230 kalori"
    },
    americano: {
        name: "Americano",
        description: "Espresso yang diencerkan dengan air panas, menghasilkan kopi yang lebih ringan namun tetap kaya rasa.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas/dingin" },
            { icon: "fa-coffee", text: "Double shot espresso" },
            { icon: "fa-clock", text: "Preparation time: 3-4 minutes" },
            { icon: "fa-info", text: "240ml serving" }
        ],
        ingredients: "Espresso, Hot water",
        calories: "5 kalori"
    },
    "caramel-macchiato": {
        name: "caramel-macchiato",
        description: "Minuman kopi yang lezat dan creamy, terdiri dari espresso, susu panas berbusa, dan sirup karamel manis yang menggugah selera.",
        details: [
            { icon: "fa-temperature-high", text: "Panas atau dingin" },
            { icon: "fa-coffee", text: " 100% Arabica beans" },
            { icon: "fa-clock", text: "Preparation time: 5-7 menit" },
            { icon: "fa-info", text: "240ml (8 oz)" }
        ],
        ingredients: "1 shot espresso, 180ml susu panas berbusa, 15ml sirup vanila, Saus karamel sebagai topping",
        calories: "150-250 kalori (tergantung jenis susu dan jumlah saus karamel)"
    },
    "affogato": {
        name: "affogato",
        description: "Pencuci mulut ala Italia yang memadukan es krim vanilla dengan shot espresso panas yang disiram langsung di atasnya.",
        details: [
            { icon: "fa-temperature-high", text: " Dingin dengan sentuhan panas" },
            { icon: "fa-coffee", text: " 100% Arabica beans" },
            { icon: "fa-clock", text: "Preparation time: 2-3 menit" },
            { icon: "fa-info", text: "1 scoop es krim + 1 shot espresso" }
        ],
        ingredients: "1 scoop es krim vanilla, 1 shot (30ml) espresso panas",
        calories: "120-180 kalori (tergantung ukuran scoop es krim)"
    },
    "irish-coffee": {
        name: "irish-coffee",
        description: "Koktail klasik yang memadukan kopi panas dengan Irish whiskey, gula, dan krim kocok, menghasilkan minuman hangat yang memanjakan dengan sentuhan alkohol.",
        details: [
            { icon: "fa-temperature-high", text: "Panas" },
            { icon: "fa-coffee", text: " 100% Arabica Beans" },
            { icon: "fa-clock", text: "Preparation time: 5-7 menit" },
            { icon: "fa-info", text: "240ml (8 oz)" }
        ],
        ingredients: "1 shot (30ml) Irish whiskey, 120ml kopi panas yang baru diseduh, 1-2 sendok teh gula pasir, 30ml krim kocok ringan (dituang di atas kopi)",
        calories: "200-250 kalori (tergantung jumlah gula dan krim)"
    },
    "frappe": {
        name: "frappe",
        description: "Minuman kopi dingin yang menyegarkan, dibuat dengan mencampurkan kopi, es batu, dan susu atau air, kemudian di-blender hingga berbusa dan halus.",
        details: [
            { icon: "fa-temperature-high", text: "Dingin" },
            { icon: "fa-coffee", text: " 100% Arabica Beans" },
            { icon: "fa-clock", text: "Preparation time: 3-5 menit" },
            { icon: "fa-info", text: "300ml (10oz)" }
        ],
        ingredients: "1 shot (30ml) espresso atau 2 sendok teh kopi instan, 120ml susu dingin (opsional) atau air, 1-2 sendok teh gula (sesuai selera), 1 cangkir es batu, Topping (opsional): krim kocok, saus cokelat, atau karamel",
        calories: " 100-200 kalori (tergantung tambahan gula dan topping)"
    },

    // Non-Coffee
    "matcha-latte": {
        name: "Matcha Latte",
        description: "Minuman berbasis green tea dengan tekstur creamy dari susu steamed.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas/dingin" },
            { icon: "fa-leaf", text: "Premium grade matcha" },
            { icon: "fa-clock", text: "Preparation time: 5 minutes" },
            { icon: "fa-info", text: "240ml serving" }
        ],
        ingredients: "Matcha powder, Steamed milk, Optional: honey",
        calories: "150 kalori"
    },
    "hot-chocolate": {
        name: "hot-chocolate",
        description: "Minuman cokelat hangat yang creamy dan lezat, terbuat dari campuran cokelat bubuk atau dark chocolate dengan susu panas, sempurna untuk menghangatkan suasana.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan panas" },
            { icon: "fa-leaf", text: " dark chocolate" },
            { icon: "fa-clock", text: "Preparation time: 5-7 minutes" },
            { icon: "fa-info", text: "240ml (8oz)" }
        ],
        ingredients: "2 sendok makan cokelat bubuk atau potongan dark chocolate (sekitar 30g), 240ml susu segar (bisa diganti dengan susu almond, oat, atau kedelai), 1-2 sendok teh gula (sesuai selera), Sejumput garam (opsional, untuk menonjolkan rasa cokelat), Topping (opsional): krim kocok, marshmallow, atau taburan cokelat serut",
        calories: "150-250 kalori (tergantung jenis susu dan tambahan topping)"
    },
    "thai-tea": {
        name: "thai-tea",
        description: "Minuman teh khas Thailand yang creamy dan manis, terbuat dari teh hitam yang diseduh dengan rempah-rempah dan susu, menghasilkan rasa yang kaya dan aromatik.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan Dingin  atau Panas" },
            { icon: "fa-leaf", text: " dark chocolate" },
            { icon: "fa-clock", text: "Preparation time: 5-10 minutes" },
            { icon: "fa-info", text: "300ml (10oz)" }
        ],
        ingredients: "2 sendok makan Thai tea mix atau teh hitam, 240ml air panas, 2 sendok makan susu kental manis, 60ml susu evaporasi atau susu segar, 1-2 sendok teh gula (sesuai selera), Es batu (jika disajikan dingin)",
        calories: "180-250 kalori (tergantung jumlah gula dan jenis susu)"
    },
    "lemon-tea": {
        name: "lemon-tea",
        description: "Minuman teh yang segar dengan campuran lemon yang memberikan rasa asam dan menyegarkan, cocok dinikmati hangat atau dingin.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan Dingin  atau Panas" },
            { icon: "fa-leaf", text: " dark chocolate" },
            { icon: "fa-clock", text: "Preparation time: 5-7 minutes" },
            { icon: "fa-info", text: "240ml (8oz)" }
        ],
        ingredients: "1 kantong teh hitam atau teh hijau, 240ml air panas, 1-2 sendok teh madu atau gula (sesuai selera), 1-2 irisan lemon segar, Es batu (jika disajikan dingin)",
        calories: "10-30 kalori (tergantung jumlah madu atau gula)"
    },
    "strawberry-smoothie": {
        name: "strawberry-smoothie",
        description: "Minuman segar dan creamy yang terbuat dari campuran stroberi, yogurt atau susu, dan es batu, memberikan rasa manis dan kesegaran yang menyenangkan.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan Dingin" },
            { icon: "fa-leaf", text: " dark chocolate" },
            { icon: "fa-clock", text: "Preparation time: 5-7 minutes" },
            { icon: "fa-info", text: "300ml (10oz)" }
        ],
        ingredients: "1 cangkir stroberi segar atau beku, 120ml susu (bisa susu sapi, almond, oat, atau kedelai), 120ml yogurt tawar atau yogurt vanila, 1 sendok makan madu atau pemanis alami (sesuai selera), 1/2 cangkir es batu",
        calories: "150-250 kalori (tergantung jenis susu dan pemanis)"
    },
    "mango-juice": {
        name: "mango-juice",
        description: "Minuman segar yang terbuat dari mangga matang yang diproses menjadi jus, memberikan rasa manis alami dan tekstur yang kental serta menyegarkan.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan Dingin" },
            { icon: "fa-leaf", text: " dark chocolate" },
            { icon: "fa-clock", text: "Preparation time: 5-7 minutes" },
            { icon: "fa-info", text: "240ml (8oz)" }
        ],
        ingredients: "1 buah mangga matang, kupas dan potong dadu, 120ml air atau air kelapa, 1 sendok makan madu atau gula (sesuai selera), 1/2 cangkir es batu",
        calories: "100-150 kalori (tergantung ukuran mangga dan tambahan pemanis)"
    },
    //snack
    "butter-croissant": {
        name: "Butter Croissant",
        description: "Pastry berlapis dengan tekstur renyah di luar dan lembut di dalam.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan hangat" },
            { icon: "fa-bread-slice", text: "Freshly baked" },
            { icon: "fa-clock", text: "Baked fresh daily" },
            { icon: "fa-info", text: "1 piece serving" }
        ],
        ingredients: "Butter, Flour, Yeast, Salt",
        calories: "260 kalori"
    },
    "club-sandwich": {
        name: "Club Sandwich",
        description: "Sandwich klasik tiga lapis dengan ayam, bacon, lettuce, dan tomat.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan hangat" },
            { icon: "fa-bread-slice", text: "Triple decker" },
            { icon: "fa-clock", text: "Preparation time: 10 minutes" },
            { icon: "fa-info", text: "1 sandwich serving" }
        ],
        ingredients: "Toasted bread, Chicken, Bacon, Lettuce, Tomato, Mayo",
        calories: "450 kalori"
    },
    "classic-cheesecake": {
        name: "classic Cheesecake",
        description: "Kue keju klasik dengan tekstur lembut, creamy, dan rasa yang kaya. Cocok untuk pencinta dessert yang sederhana namun elegan.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan hangat" },
            { icon: "fa-bread-slice", text: "Rich and creamy texture" },
            { icon: "fa-clock", text: "Preparation time: Baked fresh daily" },
            { icon: "fa-info", text: "1 slice serving" }
        ],
        ingredients: " Cream Cheese, Sugar, Eggs, Butter, Graham Cracker Crust, Vanilla Extract",
        calories: "350 kalori"
    },
    "french-fries": {
        name: "french fries",
        description: "Kue keju klasik dengan tekstur lembut, creamy, dan rasa yang kaya. Cocok untuk pencinta dessert yang sederhana namun elegan.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan hangat" },
            { icon: "fa-bread-slice", text: "Rich and creamy texture" },
            { icon: "fa-clock", text: "Preparation time: Baked fresh daily" },
            { icon: "fa-info", text: "1 slice serving" }
        ],
        ingredients: " Cream Cheese, Sugar, Eggs, Butter, Graham Cracker Crust, Vanilla Extract",
        calories: "350 kalori"
    },
    "cheese-nachos": {
        name: "Cheese Nachos",
        description: "Tortilla chips renyah dengan saus keju leleh dan salsa segar.",
        details: [
            { icon: "fa-temperature-high", text: "Disajikan hangat" },
            { icon: "fa-cheese", text: "Melted cheese blend" },
            { icon: "fa-clock", text: "Preparation time: 8 minutes" },
            { icon: "fa-info", text: "Sharing portion" }
        ],
        ingredients: "Tortilla chips, Cheese sauce, Salsa, Jalapeños",
        calories: "550 kalori per portion"
    },
    // Tambahkan menu lainnya dengan format yang sama
};

// Fungsi untuk menampilkan modal info
function showInfo(menuId) {
    const info = menuInfo[menuId];
    if (!info) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal(this)">&times;</span>
            <h3>${info.name}</h3>
            <p>${info.description}</p>
            <ul class="info-details">
                ${info.details.map(detail => `
                    <li>
                        <i class="fas ${detail.icon}"></i>
                        <span>${detail.text}</span>
                    </li>
                `).join('')}
                <li>
                    <i class="fas fa-leaf"></i>
                    <span>Ingredients: ${info.ingredients}</span>
                </li>
                <li>
                    <i class="fas fa-fire"></i>
                    <span>Calories: ${info.calories}</span>
                </li>
            </ul>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.style.display = 'flex', 10);

    // Close when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
}

// Fungsi untuk menutup modal
function closeModal(element) {
    const modal = element.closest('.modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.remove();
    }, 300);
}

const highlightInfo = {
    'premium-beans': {
        title: 'Premium Coffee Beans',
        content: `
            <div class="info-content">
                <h4>Kualitas Biji Kopi Kami:</h4>
                <ul>
                    <li>100% Arabica beans dari perkebunan terpilih</li>
                    <li>Dipetik pada tingkat kematangan optimal</li>
                    <li>Proses roasting yang presisi</li>
                    <li>Grade A specialty coffee</li>
                </ul>
                <h4>Asal Biji Kopi:</h4>
                <ul>
                    <li>Jawa Barat (Java Preanger)</li>
                    <li>Aceh Gayo</li>
                    <li>Toraja</li>
                    <li>Bali Kintamani</li>
                </ul>
                <h4>Karakteristik:</h4>
                <ul>
                    <li>Aroma: Kuat dan kompleks</li>
                    <li>Body: Medium to Full</li>
                    <li>Acidity: Seimbang</li>
                    <li>After taste: Panjang dan menyenangkan</li>
                </ul>
            </div>
        `
    },
    'expert-barista': {
        title: 'Our Expert Baristas',
        content: `
            <div class="info-content">
                <h4>Kualifikasi Barista:</h4>
                <ul>
                    <li>Tersertifikasi SCA (Specialty Coffee Association)</li>
                    <li>Minimal 3 tahun pengalaman</li>
                    <li>Ahli dalam berbagai metode brewing</li>
                    <li>Rutin mengikuti pelatihan dan workshop</li>
                </ul>
                <h4>Keahlian Khusus:</h4>
                <ul>
                    <li>Latte Art Master</li>
                    <li>Coffee Cupping Expert</li>
                    <li>Manual Brewing Specialist</li>
                    <li>Coffee Pairing Consultant</li>
                </ul>
                <h4>Layanan Personal:</h4>
                <ul>
                    <li>Konsultasi pemilihan kopi</li>
                    <li>Rekomendasi brewing method</li>
                    <li>Coffee tasting session</li>
                    <li>Workshop untuk pemula</li>
                </ul>
            </div>
        `
    },
    'cozy-space': {
        title: 'Our Cozy Space',
        content: `
            <div class="info-content">
                <h4>Fasilitas Ruangan:</h4>
                <ul>
                    <li>Free Wi-Fi berkecepatan tinggi</li>
                    <li>Stop kontak di setiap meja</li>
                    <li>Pencahayaan yang nyaman</li>
                    <li>AC dengan suhu optimal</li>
                </ul>
                <h4>Area Khusus:</h4>
                <ul>
                    <li>Working space dengan meja besar</li>
                    <li>Meeting room (reservasi)</li>
                    <li>Outdoor seating area</li>
                    <li>Smoking area terpisah</li>
                    <li>Musholla</li>
                </ul>
                <h4>Suasana:</h4>
                <ul>
                    <li>Background music yang relaxing</li>
                    <li>Interior design modern minimalis</li>
                    <li>Indoor plants untuk kesegaran</li>
                    <li>Aroma kopi yang menenangkan</li>
                </ul>
            </div>
        `
    }
};

function showHighlightInfo(type) {
    const info = highlightInfo[type];
    const modal = document.createElement('div');
    modal.className = 'highlight-modal';
    modal.innerHTML = `
        <div class="highlight-modal-content">
            <span class="close-modal">&times;</span>
            <h3>${info.title}</h3>
            ${info.content}
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal events
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}
