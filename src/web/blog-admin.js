const blogPostForm = document.querySelector('#blog-post-form');

blogPostForm.addEventListener('submit', function(event) {
  event.preventDefault(); // voorkomt dat het formulier opnieuw wordt ingediend

  // Verkrijg de gegevens uit het formulier
  const title = blogPostForm.querySelector('#title').value;
  const date = blogPostForm.querySelector('#date').value
  const category = blogPostForm.querySelector('#category').value;
  const content = blogPostForm.querySelector('#content').value;

  // Sla de gegevens op in de database (of elders)
  // bijvoorbeeld met behulp van AJAX om de gegevens naar de server te verzenden
  // en vervolgens te verwerken met PHP of een andere server-side scripttaal

  // Wis het formulier nadat de gegevens zijn opgeslagen
  blogPostForm.reset();

  // Voeg de nieuwe blogpost toe aan de pagina (afhankelijk van hoe u uw blogpagina dynamisch genereert)
});
