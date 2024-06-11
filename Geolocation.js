// Define the extension
class GeolocationExtension {
    getInfo() {
        return {
            id: 'geolocation',
            name: 'Geolocation',
            blocks: [
                {
                    opcode: 'getUserLocation',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get user location',
                }
            ]
        };
    }

    getUserLocation(args, util) {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        resolve(`Latitude: ${latitude}, Longitude: ${longitude}`);
                    },
                    (error) => {
                        reject('Error getting location: ' + error.message);
                    }
                );
            } else {
                reject('Geolocation is not supported by this browser.');
            }
        });
    }
}

// Register the extension
Scratch.extensions.register(new GeolocationExtension());
