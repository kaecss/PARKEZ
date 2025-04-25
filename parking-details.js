document.addEventListener("DOMContentLoaded", () => {
// PARKING DETAILS MODAL
function showParkingDetails(slot, data) {
    document.getElementById('detailSlot').value = slot;
    document.getElementById('detailName').value = data.name;
    document.getElementById('detailVehicle').value = data.vehicleType;

    const inDate = new Date(data.timeIn);
    const outDate = new Date(data.timeOut);

    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };

    document.getElementById('detailDate').value = inDate.toLocaleDateString('en-US', optionsDate);
    document.getElementById('detailTime').value = inDate.toLocaleTimeString('en-US', optionsTime);

    document.getElementById('parkingDetailsContainer').classList.add('active');
}

document.getElementById('closeDetails').addEventListener('click', () => {
    document.getElementById('parkingDetailsContainer').classList.remove('active');
});

const proceedBtn = document.getElementById('proceedToPaymentBtn');
const confirmationModal = document.getElementById('paymentConfirmationModal');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
const cancelPaymentBtn = document.getElementById('cancelPaymentBtn');

proceedBtn.addEventListener('click', () => {
    confirmationModal.classList.add('active'); // Show modal
});

cancelPaymentBtn.addEventListener('click', () => {
    confirmationModal.classList.remove('active'); // Hide modal
});

confirmPaymentBtn.addEventListener('click', () => {
    window.location.href = 'payment.php'; // Redirect
});

});