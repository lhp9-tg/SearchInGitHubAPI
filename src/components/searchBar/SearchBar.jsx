// J'importe les composants dont j'ai besoin à partir de la librairie semantic-ui-react
import { Segment, Input } from 'semantic-ui-react';

// J'importe les propTypes pour typer les props du composant
import PropTypes from 'prop-types';

// J'importe les hooks dont j'ai besoin
// import { useState, useEffect } from 'react';

const InputExampleInput = ({ repo, setRepo }) => {
  // Truc de fou https://www.freecodecamp.org/news/javascript-debounce-example/
  // LE DEBOUNCE !

  // const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (inputValue === repo) {
  //       setRepo(inputValue);
  //     }
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [inputValue, repo, setRepo]);

  // Mais marche pas bien ^^

  return (
    <Segment>
      <Input
        focus
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Search a repository"
        onChange={(e) => setRepo(e.target.value)}
        value={repo}
      />
    </Segment>
  );
};

export default InputExampleInput;

// Je définis les propTypes pour typer les props du composant
InputExampleInput.propTypes = {
  repo: PropTypes.string,
  setRepo: PropTypes.func,
};
