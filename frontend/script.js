document.addEventListener('DOMContentLoaded', () => {
    const hotspotContent = document.getElementById('hotspot-content');
    const flagInterventionBtn = document.getElementById('flag-intervention-btn');
    const interventionStatus = document.getElementById('intervention-status');
    const resourceType = document.getElementById('resource-type');
    const resourceQuantity = document.getElementById('resource-quantity');
    const allocateResourceBtn = document.getElementById('allocate-resource-btn');
    const resourceStatus = document.getElementById('resource-status');

    // Function to fetch hotspot data
    async function fetchHotspotData() {
        try {
            const response = await fetch('/api/hotspots'); // Assuming a backend API endpoint
            const data = await response.json();
            hotspotContent.innerHTML = data.message || 'No hotspot data available.';
        } catch (error) {
            console.error('Error fetching hotspot data:', error);
            hotspotContent.innerHTML = 'Failed to load hotspot data.';
        }
    }

    // Event listener for Flag Intervention button
    flagInterventionBtn.addEventListener('click', async () => {
        interventionStatus.textContent = 'Flagging intervention...';
        try {
            const response = await fetch('/api/interventions/flag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reason: 'Manual flag from dashboard' }), // Example payload
            });
            const data = await response.json();
            interventionStatus.textContent = data.message || 'Intervention flagged successfully!';
        } catch (error) {
            console.error('Error flagging intervention:', error);
            interventionStatus.textContent = 'Failed to flag intervention.';
        }
    });

    // Event listener for Allocate Resources button
    allocateResourceBtn.addEventListener('click', async () => {
        const type = resourceType.value;
        const quantity = resourceQuantity.value;

        if (!quantity || quantity <= 0) {
            resourceStatus.textContent = 'Please enter a valid quantity.';
            return;
        }

        resourceStatus.textContent = 'Allocating resources...';
        try {
            const response = await fetch('/api/resources/allocate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type, quantity }),
            });
            const data = await response.json();
            resourceStatus.textContent = data.message || `Allocated ${quantity} of ${type} successfully!`;
        } catch (error) {
            console.error('Error allocating resources:', error);
            resourceStatus.textContent = 'Failed to allocate resources.';
        }
    });

    // Initial data fetch
    fetchHotspotData();
});
