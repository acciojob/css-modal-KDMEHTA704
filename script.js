//your JS code here. If required.
const modal = document.getElementById("modal");
        const openModalBtn = document.getElementById("openModal");
        const closeModalBtn = document.querySelector(".close-modal");

        // Open modal on button click
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        // Close modal when close button is clicked
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal when clicking outside modal content
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });