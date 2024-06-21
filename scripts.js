document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const formType = button.getAttribute('data-form');
            let url = '';

            switch (formType) {
                case 'birth':
                    url = 'birth.html'; // Update with the actual path
                    break;
                case 'death':
                    url = 'death.html'; // Update with the actual path
                    break;
                case 'marriage':
                    url = 'marriage.html'; // Update with the actual path
                    break;
                default:
                    console.error('Unknown form type:', formType);
                    return;
            }

            window.location.href = url;
        });
    });
    //image table
    const scrollAmount = 150; // Adjust this value based on how much you want to scroll
    const imageWrapper = document.querySelector('.image-wrapper');
    const imageTable = document.querySelector('.image-table');

    document.querySelector('.scroll-button.left').addEventListener('click', function () {
        imageWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    document.querySelector('.scroll-button.right').addEventListener('click', function () {
        imageWrapper.scrollBy({
            left:




    //buttons.forEach(button => {
    //    button.addEventListener('click', () => {
    //        const formType = button.getAttribute('data-form');
    //        const endpoint = apiEndpoints[formType];

    //        if (endpoint) {
    //            fetch(endpoint)
    //                .then(response => response.json())
    //                .then(data => {
    //                    // Update the content div with the fetched data
    //                    contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    //                })
    //                .catch(error => {
    //                    console.error('Error fetching data:', error);
    //                    contentDiv.innerHTML = '<p>Failed to load data.</p>';
    //                });
    //        }
    //    });
    //});
});
