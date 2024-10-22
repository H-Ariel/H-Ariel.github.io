$(document).ready(function() {

    // Type text
    function typeWriter(elements, delay) {
        let index = 0;
        function typeNextElement() {
            if (index < elements.length) {
                const element = $(elements[index]);
                const text = element.text();
                element.show().text('');
                let charIndex = 0;
                function typeChar() {
                    if (charIndex < text.length) {
                        element.text(element.text() + text.charAt(charIndex));
                        charIndex++;
                        setTimeout(typeChar, delay);
                    } else {
                        element.css('border-right', 'none');
                        index++;
                        setTimeout(typeNextElement, 500);
                    }
                }
                typeChar();
            }
        }
        typeNextElement();
    }

    const titleElements = $('.typer-title');
    titleElements.hide();
    typeWriter(titleElements, 50);

    // load projects list
    fetch('./projects.json')
        .then(response => response.json())
        .then(data => {
            const projectGrid = $('.project-grid');
            data.forEach(project => {
                const projectTile = $('<a>', {
                    class: `project-tile ${project.type}`,
                    href: project.url,
                    target: '_blank',
                });
                const projectImage = $('<img>', {
                    class: 'project-image',
                    src: project.image,
                    alt: project.alt,
                });
                const projectTitle = $('<p>').text(project.title);
                projectTile.append(projectImage).append(projectTitle);
                projectGrid.append(projectTile);
            });
            $('button[data-filter="all"]').click();
        })
        .catch(error => console.error('Error loading project data:', error));

    // apply projects' filter
    $('.filter-buttons button').on('click', function () {
        const filter = $(this).data('filter');
        $('.project-tile').each(function () {
            const tile = $(this);
            if (filter === 'all' || tile.hasClass(filter)) {
                tile.addClass('show').show();
            } else {
                tile.removeClass('show').hide();
            }
        });
    });
});
