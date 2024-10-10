document.addEventListener("DOMContentLoaded", function () {
  const username = "DaviDeOliveiraAlves";
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("usuario não encontrado");
      }
      return response.json();
    })
    .then((data) => {
      const resultElement = document.getElementById("result");

      resultElement.innerHTML = `
    <h2>${data.login}</h2>
    <p><strong>Nome:</strong>${data.name}</p>
    <img src="${data.avatar_url}" alt="avatar" width="100">
    <p><strong>Seguidores:</strong> ${data.followers}</p>
    `;
    })

    .catch((error) => {
      console.error(error);
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `<p>${error.message}</p>`;
    });
});
