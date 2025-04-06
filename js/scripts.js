document.addEventListener('DOMContentLoaded', function () {
    // Handle dark mode toggle
    const toggleSwitch = document.getElementById('darkModeToggle');
    if (toggleSwitch) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
            toggleSwitch.checked = currentTheme === 'dark-mode';
        }

        toggleSwitch.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }
});

        toggleSwitch.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }

    // Handle video upload simulation
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const videoFile = document.getElementById('videoFile').files[0];
            const thumbnailFile = document.getElementById('thumbnailFile').files[0];
            if (videoFile && thumbnailFile) {
                // Simulate file upload
                alert(`Video file: ${videoFile.name}\nThumbnail file: ${thumbnailFile.name}`);
            }
        });
    }
});


    // Dynamically load videos in the gallery (example)
    const videoGallery = document.getElementById('videoGallery');
    if (videoGallery) {
        // Example: Add a video to the gallery
        const videoElement = document.createElement('div');
        videoElement.classList.add('col-md-4', 'mb-4');
        videoElement.innerHTML = `
            <div class="card">
                <img src="static/thumbnails/example.jpg" class="card-img-top" alt="Thumbnail">
                <div class="card-body">
                    <h5 class="card-title">Video Title</h5>
                    <a href="static/uploads/example.mp4" class="btn btn-primary">Watch Video</a>
                </div>
            </div>
        `;
        videoGallery.appendChild(videoElement);
    }
});
