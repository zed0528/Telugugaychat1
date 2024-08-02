document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('ad-file');
    const file = fileInput.files[0];
    const adContent = document.getElementById('ad-content');
    const popupAd = document.getElementById('popup-ad');
    const closeButton = document.getElementById('close-btn');

    if (file) {
        // Clear previous ad content
        adContent.innerHTML = '';

        // Create and display new ad content based on file type
        const fileType = file.type.split('/')[0];
        const url = URL.createObjectURL(file);

        if (fileType === 'image') {
            const img = document.createElement('img');
            img.src = url;
            img.className = 'ad-image';
            adContent.appendChild(img);
        } else if (fileType === 'video') {
            const video = document.createElement('video');
            video.src = url;
            video.className = 'ad-video';
            video.controls = true;
            adContent.appendChild(video);
        }

        popupAd.style.display = 'block';

        // Show the remove ad button after 5 seconds
        setTimeout(function() {
            closeButton.style.display = 'block';
        }, 5000);
    }
});

// Handle the click event to remove the ad
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup-ad').style.display = 'none';
    document.getElementById('close-btn').style.display = 'none';
});
