// modal.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all sections
var sections = document.querySelectorAll('section');

var articles = document.querySelectorAll("section article");

var scrollBtn = document.querySelector('#scrollToTopBtn');
// Loop through sections and add click event to open the modal
sections.forEach((section, index) => {
    section.addEventListener('click', function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        var sectionText = this.querySelector('article > div > p').innerText;
        document.getElementById('modalText').innerText = sectionText;
    scrollBtn.style.display = 'none';
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    scrollBtn.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        scrollBtn.style.display = 'block';
    }

}

// Add click event listeners to each article
articles.forEach(function(article, index) {
    article.addEventListener('click', function() {
        // Get content based on the clicked article (first or second section)
        var title, listItems;
        
        if (index === 0) {
            // First section logic
            title = document.getElementById('hidden-title').innerText;
            listItems = document.getElementById('hidden-details').querySelectorAll("li");
        } else if (index === 1) {
            // Second section logic
            title = document.getElementById('hidden-title2').innerText;
            listItems = document.getElementById('hidden-details2').querySelectorAll("li");
        }

        // Construct the modal content
        var modalContent = "<h2>" + title + "</h2>";
        modalContent += "<ul>";
        listItems.forEach(function(item) {
            modalContent += "<li>" + item.innerText + "</li>";
        });
        modalContent += "</ul>";

        // Update the modal content
        document.getElementById("modalContent").innerHTML = modalContent;

        // Open the modal
        modal.style.display = "block";
        // Disable scrolling for the body
        document.body.style.overflow = "hidden";
    scrollBtn.style.display = 'none';
    });
});


