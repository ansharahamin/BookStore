var books = {
  religious: {
    Quran: {
      Quran15lines: {
        name: "15 Lines Quran",
        author: "No Author (Quran Kareem)",
        description: "Standard 15 lines Quran used commonly in Madaris.",
        price: 500,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnkzHqY85O6Xh5TYAInPnlCNX8-tAgDaPuA&s",
        addToCartBtn: "Add to Cart",
        likeBtn: "Like"
      },
      urduTarjuma: {
        name: "Quran with Urdu Translation",
        author: "Maulana Fateh Muhammad Jalandhri",
        description: "Quran Kareem with authentic Urdu translation.",
        price: 750,
      src: "https://cdn-ilacfpf.nitrocdn.com/DEIlAFHwOSfAJsIcrIBWieMBreJvfKgy/assets/mobile/source/rev-7d48543/blogger.googleusercontent.com/img/a/AVvXsEjsHBYOfXjgovpy-3d8ff105-vVzO6Z3vg5hYeUxTPlog",
        src: "",
        addToCartBtn: "Add to Cart",
        likeBtn: "Like"
      }
    },
    EngTarjuma: {
      name: "Quran with English Translation",
      author: "Abdullah Yusuf Ali",
      description: "English translation of the Holy Quran.",
      price: 900,
      src: "https://cdn-ilacfpf.nitrocdn.com/DEIlAFHwOSfAJsIcrIBWieMBreJvfKgy/assets/mobile/source/rev-7d48543/blogger.googleusercontent.com/img/a/AVvXsEjsHBYOfXjgovpy-3d8ff105-vVzO6Z3vg5hYeUxTPlog",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  },

  Hadith: {
    bukhari: {
      name: "Sahih Bukhari",
      author: "Imam Bukhari",
      description: "Most authentic collection of Hadith.",
      price: 2500,
      src: "images/bukhari.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    muslim: {
      name: "Sahih Muslim",
      author: "Imam Muslim",
      description: "One of the most reliable collections of Hadith.",
      price: 2300,
      src: "images/muslim.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    mishkat: {
      name: "Mishkat-ul-Masabih",
      author: "Imam Tabrizi",
      description: "Famous Hadith compilation used in Islamic studies.",
      price: 1800,
      src: "images/mishkat.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  },

  Fiqh: {
    behishtiZewar: {
      name: "Behishti Zewar",
      author: "Maulana Ashraf Ali Thanvi",
      description: "Popular Hanafi Fiqh book specially for daily issues.",
      price: 850,
      src: "images/beheshti-zewar.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    quduri: {
      name: "Mukhtasar al-Quduri",
      author: "Imam Quduri",
      description: "Classical Hanafi jurisprudence text.",
      price: 950,
      src: "images/quduri.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    hidaya: {
      name: "Al-Hidaya",
      author: "Burhan al-Din al-Marghinani",
      description: "Advanced level Hanafi Fiqh reference.",
      price: 3000,
      src: "images/hidaya.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  },

  IslamicStories: {
    QasasUlAmbiya: {
      name: "Qasas-ul-Ambiya",
      author: "Ibn Kathir",
      description: "Stories of the Prophets.",
      price: 1200,
      src: "images/qasas-ul-ambiya.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    QasasulQuran: {
      name: "Qasas-ul-Quran",
      author: "Hafiz Syed Abul Hasan",
      description: "Stories mentioned in the Quran.",
      price: 950,
      src: "images/qasas-ul-quran.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    SabaqAmozKahaniya: {
      name: "Sabaq Amoz Kahaniyan",
      author: "Islami Taleem Writer",
      description: "Islamic moral stories for children.",
      price: 550,
      src: "images/sabaq-amoz.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  },

  fictional: {
    Adventure: {
      name: "Lost in the Mountains",
      author: "Adeel Hashmi",
      description: "Adventure story full of thrill and excitement.",
      price: 600,
      src: "images/adventure.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    Romance: {
      name: "Aik Mohabbat Sau Afsanay",
      author: "Ashfaq Ahmed",
      description: "Romantic Urdu literature classic.",
      price: 480,
      src: "images/romance.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    Thrill: {
      name: "Operation Blue Moon",
      author: "Mazhar Kaleem MA",
      description: "Action–packed thrilling novel.",
      price: 650,
      src: "images/thrill.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  },

  NonFiction: {
    book1: {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      description: "Best-selling financial education book.",
      price: 900,
      src: "images/rich-dad.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    book2: {
      name: "Atomic Habits",
      author: "James Clear",
      description: "Book on building better habits.",
      price: 1100,
      src: "images/atomic-habits.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    book3: {
      name: "The 7 Habits of Highly Effective People",
      author: "Stephen Covey",
      description: "Guide to personal and professional success.",
      price: 1300,
      src: "images/7habits.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  },

  Scientific: {
    physics: {
      name: "Fundamentals of Physics",
      author: "Halliday & Resnick",
      description: "Basic concepts of physics explained clearly.",
      price: 2500,
      src: "images/physics.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    },
    biology: {
      name: "Campbell Biology",
      author: "Neil A. Campbell",
      description: "World-famous reference for biology students.",
      price: 3000,
      src: "images/biology.jpg",
      addToCartBtn: "Add to Cart",
      likeBtn: "Like"
    }
  }
};
var allCards = document.getElementById("allCards")
console.log(allCards);

for(category in books){
    console.log(category);
    for(subCategory  in books[category]){
        console.log(subCategory);
        let item = books[category][subCategory]
        console.log(item);
        allCards.innerHTML += ` <div class="col-md-4 d-flex justify-content-evenly"><div class="card mb-5" style="width: 18rem;">
            <img src="${books[category][subCategory].src}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${books[category][subCategory].name}</h5>
                <p class="card-text">${books[category][subCategory].description}.</p>
                <p class="card-text">${books[category][subCategory].author}.</p>
                <p class="card-text">${books[category][subCategory].author}.</p>
                <a href="#" class="btn btn-danger">${books[category][subCategory].addToCartBtn}</a>
            </div>
        </div>
        </div>`
    }
}

