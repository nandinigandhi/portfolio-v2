document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-item img, .image-item video");

    images.forEach((img) => {
        img.onload = function () {
            resizeMasonryGrid();
        };
    });

    function resizeMasonryGrid() {
        const gallery = document.querySelector(".gallery");
        let columns = getComputedStyle(gallery).gridTemplateColumns.split(" ").length;
        let columnHeights = Array(columns).fill(0);

        document.querySelectorAll(".image-item").forEach((item) => {
            let minHeightColumn = columnHeights.indexOf(Math.min(...columnHeights));
            item.style.gridColumn = `${minHeightColumn + 1} / span 1`;
            columnHeights[minHeightColumn] += item.clientHeight + 15;
        });
    }

    window.addEventListener("resize", resizeMasonryGrid);
});
