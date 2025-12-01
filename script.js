document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for the body
    document.body.classList.add('loaded');

    // --- Lightbox Functionality ---
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const span = document.getElementsByClassName("close")[0];

    galleryImages.forEach(img => {
        img.style.cursor = 'pointer'; // Add pointer cursor to indicate they are clickable
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere on the modal background, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
