const blogPostContainer = document.querySelector('#blog-post-container');

const blogPosts = [
  {
    title: 'mooie stoel',
    date: '22 april 2023',
    category: 'living-room',
    content: 'Een stoel is een alledaags meubelstuk dat in vrijwel elk huis, kantoor of openbare ruimte te vinden is. Het heeft een zitvlak en rugleuning die zijn ontworpen om comfortabel te zitten. Stoelen kunnen worden gemaakt van verschillende materialen, zoals hout, metaal, kunststof of stofDe geschiedenis van de stoel gaat terug tot de oudheid, waar het werd gebruikt als een statussymbool voor de hogere klassen. In de middeleeuwen werden stoelen voornamelijk gebruikt door edelen en koningen, terwijl gewone mensen vaak op de grond of op banken zaten.Tegenwoordig zijn stoelen beschikbaar in allerlei stijlen, van klassiek tot modern en alles daartussenin. Naast het comfort dat een stoel biedt, kan het ook worden gebruikt als decoratief element in een ruimte. Veel stoelen zijn ontworpen met ergonomie in gedachten, wat betekent dat ze zijn aangepast aan de lichaamsvorm en houding van de gebruiker om pijn en vermoeidheid te voorkomen.Sommige stoelen zijn ook voorzien van extra functies, zoals verstelbare armleuningen, hoofdsteunen en voetensteunen, waardoor ze geschikt zijn voor verschillende doeleinden en activiteiten, zoals werken, lezen of ontspannen.Hoewel het misschien niet het meest opvallende meubelstuk in een kamer is, is de stoel ongetwijfeld een van de meest praktische en veelzijdige items die we bezitten. Het is een eenvoudig maar essentieel onderdeel van ons dagelijks leven, en het is moeilijk voor te stellen hoe we zonder zouden kunnen leven.'
        
  },
  {
    title: 'Blogpost Titel 2',
    date: '21 april 2023',
    category: 'bedroom',
    content: 'Dit is de inhoud van de blogpost 2.',
  },
  {
    title: 'Blogpost Titel 3',
    date: '20 april 2023',
    category: 'kitchen',
    content: 'Dit is de inhoud van de blogpost 3.',
  },
  {
    title: 'Blogpost Titel 4',
    date: '19 april 2023',
    category: 'bathroom',
    content: 'Dit is de inhoud van de blogpost 4.',
  },
];

function generateBlogPostHTML(post) {
  return `
    <div class="blog-post">
      <h2>${post.title}</h2>
      <p class="post-date">${post.date}</p>
      <p>${post.content}</p>
      <a href="#" class="read-more">Lees meer</a>
    </div>
  `;
}

function generateBlogPosts() {
  let html = '';

  for (const post of blogPosts) {
    html += generateBlogPostHTML(post);
  }

  blogPostContainer.innerHTML = html;
}

generateBlogPosts();
