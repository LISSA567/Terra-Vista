document.addEventListener('DOMContentLoaded', function() {
    // Data for destinations
    const destinations = [
        {
            name: "Cape Coast Castle",
            location: "Cape Coast",
            description: "A UNESCO World Heritage site and one of Ghana's most important historical landmarks.",
            highlights: ["UNESCO World Heritage", "Historical Tours", "Museum"],
            imageUrl: "images/Cape Coast Castle.jpg"
        },
        {
            name: "Kakum National Park",
            location: "Central Region",
            description: "Famous for its canopy walkway suspended 30 meters above the ground in a tropical rainforest.",
            highlights: ["Canopy Walkway", "Wildlife Viewing", "Guided Hikes"],
            imageUrl: "images/kakum national park.jpg"
        },
        {
            name: "Mole National Park",
            location: "Northern Region",
            description: "Ghana's largest wildlife sanctuary where you can see elephants, antelopes, and many bird species.",
            highlights: ["Elephant Viewing", "Safari Tours", "Bird Watching"],
            imageUrl: "images/mole national park.jpg"
        },
        {
            name: "Elmina Castle",
            location: "Elmina",
            description: "The oldest European building in Sub-Saharan Africa with a dark history tied to the slave trade.",
            highlights: ["Historical Tours", "Cultural Experience", "Coastal Views"],
            imageUrl: "images/Elmina-Castle.jpg"
        },
        {
            name: "Lake Volta",
            location: "Eastern Region",
            description: "The largest artificial lake in the world by surface area, offering boat cruises and fishing.",
            highlights: ["Boat Cruises", "Fishing", "Scenic Views"],
            imageUrl: "images/volta-lake.jpg"
        },
        {
            name: "Kumasi Central Market",
            location: "Kumasi",
            description: "One of the largest open-air markets in West Africa where you can find traditional crafts and textiles.",
            highlights: ["Shopping", "Cultural Experience", "Local Cuisine"],
            imageUrl: "images/kumasi central market.jpeg"
        }
    ];

    // Gallery images data
    const galleryImages = [
        {
            url: "images/Asenema-falls.jpg",
            title: "Asenema Falls",
            description: "Serene waterfall in Eastern Region"
        },
        {
            url: "images/boti-falls.jpg",
            title: "Boti Falls",
            description: "Twin falls in the Eastern Region"
        },
        {
            url: "images/Cape Coast Castle.jpg",
            title: "Cape Coast Castle",
            description: "A UNESCO World Heritage site and one of Ghana's most important historical landmarks."
        },
        {
            url: "images/Elmina-Castle.jpg",
            title: "Elmina Castle",
            description: "The oldest European building in Sub-Saharan Africa with a dark history tied to the slave trade."
        },
        {
            url: "images/kakum national park.jpg",
            title: "Kakum National Park",
            description: "Famous for its canopy walkway suspended 30 meters above the ground in a tropical rainforest."
        },
        {
            url: "images/kumasi central market.jpeg",
            title: "Kumasi Central Market",
            description: "One of the largest open-air markets in West Africa where you can find traditional crafts and textiles."
        },
        {
            url: "images/mole national park.jpg",
            title: "Mole National Park",
            description: "Ghana's largest wildlife sanctuary where you can see elephants, antelopes, and many bird species."
        },
        {
            url: "images/Tree.jpg",
            title: "The Three-headed Palm Tree",
            description: "A beautiful tree in Ghana"
        },
        {
            url: "images/umbrella rock.jpg",
            title: "Umbrella Rock",
            description: "A unique rock formation in Ghana"
        },
        {
            url: "images/volta-lake.jpg",
            title: "Lake Volta",
            description: "The largest artificial lake in the world by surface area, offering boat cruises and fishing."
        },
        {
            url: "images/accra city.jpeg",
            title: "Accra City",
            description: "The capital city of Ghana"
        },
        {
            url: "images/akosombo_dam.jpg",
            title: "Akosombo Dam",
            description: "A hydroelectric dam on the Volta River in southeastern Ghana"
        }
    ];

    // Populate destinations
    const destinationContainer = document.getElementById('destination-cards');
    if (destinationContainer) {
        destinations.forEach(destination => {
            const card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-card">
                        <div class="destination-img" style="background-image: url('${destination.imageUrl}')"></div>
                        <div class="destination-info">
                            <h4 class="destination-title">${destination.name}</h4>
                            <div class="destination-location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${destination.location}
                            </div>
                            <p class="mb-3">${destination.description}</p>
                            <ul class="destination-highlights">
                                ${destination.highlights.map(highlight => `
                                    <li><i class="fas fa-check-circle"></i>${highlight}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            destinationContainer.innerHTML += card;
        });
    }

    // Populate gallery with enhanced layout
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        galleryImages.forEach((image, index) => {
            const galleryItem = `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="gallery-card">
                        <div class="gallery-image-wrapper">
                            <img src="${image.url}" 
                                 alt="${image.title}" 
                                 class="gallery-image"
                                 loading="lazy">
                            <div class="gallery-overlay">
                                <h5 class="gallery-title">${image.title}</h5>
                                <p class="gallery-description">${image.description}</p>
                                <button class="btn btn-light btn-sm view-image" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#galleryModal" 
                                        data-index="${index}">
                                    <i class="fas fa-expand-alt"></i> View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            galleryContainer.innerHTML += galleryItem;
        });
    }

    // Add this after your gallery population code
    if (galleryContainer) {
        // Add click event listener for gallery modal
        document.querySelectorAll('.view-image').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const image = galleryImages[index];
                const modal = document.getElementById('galleryModal');
                
                // Update modal content
                const modalImage = modal.querySelector('#modalImage');
                const modalTitle = modal.querySelector('.modal-title');
                
                modalImage.src = image.url;
                modalImage.alt = image.title;
                if (modalTitle) modalTitle.textContent = image.title;
                
                // Update modal description if it exists
                const modalDescription = modal.querySelector('.modal-description');
                if (modalDescription) modalDescription.textContent = image.description;
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Tour booking functionality
    const bookTourButtons = document.querySelectorAll('.book-tour');
    bookTourButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tourName = this.getAttribute('data-tour');
            const tourSelect = document.getElementById('tourSelect');
            
            // Set the selected tour in the modal
            for (let i = 0; i < tourSelect.options.length; i++) {
                if (tourSelect.options[i].value === tourName) {
                    tourSelect.selectedIndex = i;
                    break;
                }
            }
            
            // Open the booking modal
            const tourModal = new bootstrap.Modal(document.getElementById('tourModal'));
            tourModal.show();
        });
    });

    // Form submission handlers
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('successMessage').textContent = 'Your message has been sent successfully!';
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            contactForm.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('successMessage').textContent = 'Thank you for subscribing to our newsletter!';
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            newsletterForm.reset();
        });
    }

    

    // Dynamic date settings for tour booking
    const tourDateInput = document.getElementById('tourDate');
    if (tourDateInput) {
        // Set min date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tourDateInput.min = tomorrow.toISOString().split('T')[0];
        
        // Set default date to one week from now
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        tourDateInput.value = nextWeek.toISOString().split('T')[0];
    }

    // Add animation effects on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.destination-card, .culture-card, .tour-card, .gallery-item');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize scroll animation
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Initialize Bootstrap Carousel
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000, // Change slide every 2 seconds
        touch: true,    // Enable touch swiping on mobile
        ride: 'carousel',
        pause: 'hover'  // Pause on mouse hover
    });
    
    // Scroll to Top functionality
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-hidden');
    
    // Remove preloader from DOM after animation
    preloader.addEventListener('transitionend', function() {
        document.body.removeChild(preloader);
    });
});