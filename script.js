console.log("JavaScript is connected!"); 
const toggleButton = document.getElementById('theme-toggle'); 

 

toggleButton.addEventListener('click', function() { 

    document.body.classList.toggle('dark-mode'); 

    if (document.body.classList.contains('dark-mode')) { 

        toggleButton.textContent = 'Light Mode'; 

    } else { 

        toggleButton.textContent = 'Dark Mode'; 

    } 

}); 
const backToTopButton = document.getElementById('back-to-top'); 

 

window.addEventListener('scroll', function() { 

    if (window.scrollY > 300) { 

        backToTopButton.style.display = 'block'; 

    } else { 

        backToTopButton.style.display = 'none'; 

    } 

}); 

 

backToTopButton.addEventListener('click', function() { 

    window.scrollTo({ top: 0, behavior: 'smooth' }); 

});

const filterButtons = document.querySelectorAll('.filter-btn'); 

const movies = document.querySelectorAll('.movie-card'); 

 

filterButtons.forEach(button => { 

    button.addEventListener('click', function() { 

        filterButtons.forEach(btn => btn.classList.remove('active')); 

        this.classList.add('active'); 

        const filterValue = this.getAttribute('data-filter'); 

        movies.forEach(movie => { 

            if (filterValue === 'all') { 

                movie.style.display("block"); 

            } else { 

                const categories = movie.getAttribute('data-category'); 

                if (movie.classlist.contains(filterValue)) { 

                    movie.style.display('block'); 

                } else { 

                    movie.style.display('none'); 

                } 

            } 

        }); 

    }); 

});
const infoButton = document.querySelectorAll('more-info'); 

const Movietitle = document.getElementById('movie title'); 
 

button.addEventListener('click', function() { 

    // Toggle the fact visibility 

    funFact.classList.toggle('show'); 

 

    // Change button text based on visibility 

    if (funFact.classList.contains('show')) { 

        revealButton.textContent = 'This movie won 3 awards!'; 

    } else { 

        revealButton.textContent = '🔍 Click here to learn more about the movie!'; 

    } 

});  