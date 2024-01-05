const useRearrangedImg = (images) => {
    function getNumberOfColumns() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 669) {
            return 1;
        }
        else if (screenWidth >= 670 && screenWidth <= 999) {
            return 2;
        }
        else if (screenWidth >= 1000 && screenWidth <= 1200) {
            return 3;
        }
        else if (screenWidth >= 1201 && screenWidth <= 1488) {
            return 2;
        }
        else {
            return 3;
        }
    }

    let numColumns = getNumberOfColumns();
    let photoChunks = [];
    for (let i = 0; i < images.length; i += numColumns) {
        photoChunks.push(images.slice(i, i + numColumns));
    }

    let transposedPhotos = photoChunks[0].map((_, i) => photoChunks.map(row => row[i]));
    let rearrangedImages = [].concat(...transposedPhotos);

    return rearrangedImages;
};

export default useRearrangedImg;