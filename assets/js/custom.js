const toggler = document.querySelector('.navbar-toggler');
        const togglerIcon = toggler.querySelector('span');

        toggler.addEventListener('click', () => {
            togglerIcon.className = togglerIcon.className === 'bi bi-list' ? 'bi bi-x-lg' : 'bi bi-list';
        })

        var typed = new Typed('.typing', {
            strings: ["Web Developer ", "Freelancer ", "Web Designer "],
            typeSpeed : 150,
            backSpeed : 40,
            cursorChar : '_',
            backDelay : 1000,
            loop: true,
        })