document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('#Usuario');
    const profileName = document.querySelector('#Name');
    const UserleName = document.querySelector('#User');
    const Seguindo = document.querySelector('#Seguindo');
    const Seguidores = document.querySelector('#Seguidores');
    const repositorios = document.querySelector('#repositorios');
    const GitLink = document.querySelector('#GitLink');

    fetch('https://api.github.com/users/Elias-Vasconcelos')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            profileAvatar.src = json.avatar_url;
            profileName.innerText = json.name;
            UserleName.innerText = json.login;
            Seguindo.innerText = json.following;
            Seguidores.innerText = json.followers;
            repositorios.innerText = json.public_repos;
            GitLink.href = json.html_url;
        })
})