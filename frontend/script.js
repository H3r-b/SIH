document.addEventListener('DOMContentLoaded', () => {
    // --- Map ---
    var map = L.map('map').setView([26.1445, 91.7362], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([26.1445, 91.7362]).addTo(map)
        .bindPopup('Outbreak Location')
        .openPopup();

    // --- Chart.js: Water-Borne Disease Cases Over Months ---
    new Chart(document.getElementById('casesChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Reported Cases',
                data: [120, 150, 180, 220, 300, 250, 200, 170],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true }
    });

    // --- Chart.js: Disease Type Distribution ---
    new Chart(document.getElementById('typePieChart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Cholera', 'Typhoid', 'Dysentery', 'Hepatitis A'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ]
            }]
        },
        options: { responsive: true }
    });

    // --- Chart.js: Age Group Distribution ---
    new Chart(document.getElementById('ageBarChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['0-10', '11-20', '21-40', '41-60', '60+'],
            datasets: [{
                label: 'Cases',
                data: [30, 60, 120, 80, 40],
                backgroundColor: 'rgba(255, 159, 64, 0.7)'
            }]
        },
        options: { responsive: true }
    });

    // --- Chart.js: Recovery vs Fatality ---
    new Chart(document.getElementById('recoveryDoughnutChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Recovered', 'Fatalities'],
            datasets: [{
                data: [320, 18],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 99, 132, 0.7)'
                ]
            }]
        },
        options: { responsive: true }
    });

    // --- Chart.js: Cases by District ---
    new Chart(document.getElementById('districtBarChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Kamrup', 'Dibrugarh', 'Jorhat', 'Tinsukia', 'Barpeta'],
            datasets: [{
                label: 'Cases',
                data: [90, 60, 40, 30, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.7)'
            }]
        },
        options: { responsive: true }
    });

    // --- Chart.js: Daily New Cases ---
    new Chart(document.getElementById('dailyLineChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'New Cases',
                data: [20, 25, 18, 30, 22, 15, 10],
                borderColor: 'rgba(255, 205, 86, 1)',
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true }
    });
});