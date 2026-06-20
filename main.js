const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(el => io.observe(el));
}

function openProject(url) {
  if (url && url !== '') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

function downloadResume() {
  const content = `Tayyaba Shaikh
BSc IT Student | Frontend Developer | Content Writer
Location: Mumbai, India
Email: myth5901@gmail.com
LinkedIn: https://www.linkedin.com/in/tayyaba590
GitHub: https://github.com/notthatslayer
Dev.to: https://dev.to/deffslayer

Summary:
Frontend developer and content writer focused on premium UI, product thinking, and high-quality storytelling.

Technical Skills:
HTML, CSS, JavaScript, Python, MySQL

Creative Skills:
Content Writing, SEO, Blogging, Copywriting

Build Style:
Modern UI, responsive design, interactive web apps

Projects:
Mini OS
SpotDemo
Venting Platform
Budget Tracker
Calculator`;

  const blob = new Blob([content], {
    type: 'text/plain;charset=utf-8'
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

const floatingBtn = document.getElementById('floatingBtn');
const contactSection = document.getElementById('contact');

if (floatingBtn) {
  const handleFloatingButton = () => {
    if (!contactSection) {
      floatingBtn.classList.remove('hidden-state');
      floatingBtn.classList.add('showing');
      return;
    }

    const rect = contactSection.getBoundingClientRect();

    if (
      rect.top < window.innerHeight * 0.85 &&
      rect.bottom > 0
    ) {
      floatingBtn.classList.add('hidden-state');
      floatingBtn.classList.remove('showing');
    } else {
      floatingBtn.classList.remove('hidden-state');
      floatingBtn.classList.add('showing');
    }
  };

  window.addEventListener('scroll', handleFloatingButton);
  handleFloatingButton();

  floatingBtn.addEventListener('click', () => {
    window.location.href = 'mailto:myth5901@gmail.com';
  });
}
