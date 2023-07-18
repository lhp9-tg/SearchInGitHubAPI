// Styles de bases
import './App.scss';

// Le CSS minified de Semantic UI
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

// import des modules
import SearchBar from '../searchBar/SearchBar';
import Message from '../message/Message';
import ReposResults from '../reposResults/ReposResults';
import Header from '../header/Header';

// Import des datas locales
//import localData from '../../data/repos.js';

// Import du useState et du useEffect
import { useEffect, useState } from 'react';

//// GO ////////

function App() {
  // On initialise les sueStates
  const [repo, setRepo] = useState('');
  const [count, setCount] = useState(0);

  // Avec un placeholder pour l'image du repo si pas d'image dans les datas de l'API
  // On met un tableau car on va récupérer plusieurs repos
  const [repoIds, setRepoIds] = useState([0]);
  const [repoImgUrls, setRepoImgUrls] = useState([
    'https://placehold.co/451x451',
  ]);
  const [repoNames, setRepoNames] = useState(['Nom du repository']);
  const [repoOwners, setRepoOwners] = useState(['Nom du propriétaire']);
  const [repoDescriptions, setRepoDescriptions] = useState([
    'Description du repository',
  ]);

  // On utilise le useEffect pour faire un fetch des datas de l'API Github
  useEffect(() => {
    // Si repo est vide (je fais du zèle car en vrai je vois pas pk) ou contient un espace, on ne fait rien
    if (!repo || repo === ' ') {
      return;
    }
    // Sinon on fait un fetch (sans else car je suis un thug et que je l'ai vu dans un tuto C# surtout ^^)
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${repo}&sort=stars&order=desc`
      );

      // Ajout de la gestion de l'erreur 403 (trop de requêtes à l'API Github) comme un Gigachad
      if (response.status === 403) {
        console.log('Erreur 403');
        return;
      }

      const data = await response.json();

      // On a récupérer les datas, on les a parsé en JSON et zou! on les envoie dans le useState
      // Avec le typage de l'id qui soule..... (j'ai pas trouvé comment faire autrement)
      if (data.items && data.items.length > 0) {
        setCount(data.total_count);

        const newRepoIds = data.items.map((item: { id: any }) => item.id);
        setRepoIds(newRepoIds);

        const newRepoImgUrls = data.items.map(
          (item: { owner: { avatar_url: any } }) => item.owner.avatar_url
        );
        setRepoImgUrls(newRepoImgUrls);

        const newRepoNames = data.items.map((item: { name: any }) => item.name);
        setRepoNames(newRepoNames);

        const newRepoOwners = data.items.map(
          (item: { owner: { login: any } }) => item.owner.login
        );
        setRepoOwners(newRepoOwners);

        const newRepoDescriptions = data.items.map(
          (item: { description: any }) => item.description
        );
        setRepoDescriptions(newRepoDescriptions);
      }
    }
    fetchData(); // On lance la fonction
  }, [repo]); // On met repo dans le tableau de dépendances pour que le useEffect se lance à chaque fois que repo change

  // On balance le render
  return (
    <>
      <Container>
        <Header />
        <SearchBar repo={repo} setRepo={setRepo} />
        <Message repo={repo} count={count} />
        <ReposResults
          repo={repo}
          repoIds={repoIds}
          repoImgUrls={repoImgUrls}
          repoNames={repoNames}
          repoOwners={repoOwners}
          repoDescriptions={repoDescriptions}
        />
      </Container>
    </>
  );
}

export default App;
