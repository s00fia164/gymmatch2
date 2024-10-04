// Algorytm swajpowania - kolejno wyświetlane obrazy
let currentImageIndex = 0;
const images = document.querySelectorAll('.swiper-container .swipe-img');

document.getElementById('like').addEventListener('click', function() {
    swipeImage();
});

document.getElementById('dislike').addEventListener('click', function() {
    swipeImage();
});

function swipeImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

// Trenerzy - tabela z rekomendacjami i filtrowaniem
const trainers = [
    { name: 'Anna Nowak', sport: 'Pilates', gender: 'female', experience: 8, recommended: true },
    { name: 'Jan Kowalski', sport: 'Siłownia', gender: 'male', experience: 7, recommended: true },
    { name: 'Ewa Kwiatkowska', sport: 'Joga', gender: 'female', experience: 5, recommended: false },
    { name: 'Adam Wiśniewski', sport: 'Boks', gender: 'male', experience: 6, recommended: false },
    { name: 'Karolina Lewandowska', sport: 'Cardio', gender: 'female', experience: 4, recommended: false },
    { name: 'Paweł Zieliński', sport: 'Bieganie', gender: 'male', experience: 9, recommended: false },
    { name: 'Olga Malinowska', sport: 'CrossFit', gender: 'female', experience: 7, recommended: false },
    { name: 'Michał Stasiak', sport: 'Kulturystyka', gender: 'male', experience: 10, recommended: false }
];

// Funkcja wyświetlająca trenerów
function displayTrainers(filteredTrainers) {
    const tableBody = document.querySelector('#trainer-table tbody');
    tableBody.innerHTML = ''; // Wyczyść tabelę

    filteredTrainers.forEach(trainer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${trainer.name}</td>
            <td>${trainer.sport}</td>
            <td>${trainer.gender === 'male' ? 'Mężczyzna' : 'Kobieta'}</td>
            <td>${trainer.experience}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Filtruj trenerów według wybranych kryteriów
function filterTrainers() {
    const sport = document.getElementById('sport').value;
    const gender = document.getElementById('gender').value;
    const experience = document.getElementById('experience').value;

    let filteredTrainers = trainers.filter(trainer => {
        return (sport === 'all' || trainer.sport.toLowerCase() === sport.toLowerCase()) &&
               (gender === 'all' || trainer.gender === gender) &&
               trainer.experience >= experience;
    });

    // Rekomendowani trenerzy zawsze na górze
    filteredTrainers = filteredTrainers.sort((a, b) => b.recommended - a.recommended);

    displayTrainers(filteredTrainers);
}

// Nasłuchiwanie zmian w formularzu filtrów
document.getElementById('filter-form').addEventListener('input', filterTrainers);

// Początkowe wyświetlenie trenerów
filterTrainers();
