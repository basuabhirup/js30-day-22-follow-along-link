const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

links.forEach(link => link.addEventListener('mouseenter', function() {
    const linkPosition = this.getBoundingClientRect();
    highlight.style.width = `${linkPosition.width}px`;
    highlight.style.height = `${linkPosition.height}px`;
    highlight.style.transform = `translate(
      ${linkPosition.left + window.scrollX}px, ${linkPosition.top + window.scrollY}px)
    `;
  })
)
