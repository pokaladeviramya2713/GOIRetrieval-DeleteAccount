document.addEventListener('DOMContentLoaded', () => {
    const confirmInput = document.getElementById('confirmText');
    const deleteBtn = document.getElementById('deleteBtn');
    const deleteForm = document.getElementById('deleteAccountForm');

    // Handle "DELETE" confirmation logic
    if (confirmInput && deleteBtn) {
        confirmInput.addEventListener('input', (e) => {
            const val = e.target.value.trim().toUpperCase();
            if (val === 'DELETE') {
                deleteBtn.disabled = false;
                deleteBtn.style.opacity = '1';
                deleteBtn.style.cursor = 'pointer';
                confirmInput.style.borderColor = 'var(--secondary)';
            } else {
                deleteBtn.disabled = true;
                deleteBtn.style.opacity = '0.5';
                deleteBtn.style.cursor = 'not-allowed';
                confirmInput.style.borderColor = '#ddd';
            }
        });
    }

    // Form submission
    if (deleteForm) {
        deleteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple visual feedback for deletion
            const main = document.querySelector('main');
            main.style.transition = 'opacity 0.5s';
            main.style.opacity = '0.3';
            
            // Simulating API call
            setTimeout(() => {
                main.innerHTML = `
                    <div style="text-align: center; padding: 40px;">
                        <i class="fa-solid fa-circle-check" style="font-size: 4rem; color: var(--secondary); margin-bottom: 20px;"></i>
                        <h2 style="margin-bottom: 15px;">Account Deleted Successfully</h2>
                        <p style="color: #666; margin-bottom: 30px;">Your account and all associated data have been permanently removed. We're sorry to see you go.</p>
                        <a href="index.html" class="btn btn-primary" style="text-decoration: none;">Return to Home</a>
                    </div>
                `;
                main.style.opacity = '1';
            }, 1500);
        });
    }

    // Add entry animations to cards if they exist
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
});
