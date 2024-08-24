let zoomLevel = 1;
        const zoomContainer = document.getElementById('zoomContainer');

        function zoomIn() {
            zoomLevel += 0.1;
            zoomContainer.style.transform = `scale(${zoomLevel})`;
        }

        function zoomOut() {
            if (zoomLevel > 0.1) {
                zoomLevel -= 0.1;
                zoomContainer.style.transform = `scale(${zoomLevel})`;
            }
        }

        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === '+') {
                event.preventDefault();
                zoomIn();
            } else if (event.ctrlKey && event.key === '-') {
                event.preventDefault();
                zoomOut();
            }
        });
