// J'importe les composants dont j'ai besoin à partir de la librairie semantic-ui-react
import { Segment, Input } from 'semantic-ui-react';

// J'importe les propTypes pour typer les props du composant
import PropTypes from 'prop-types';

// J'importe les hooks dont j'ai besoin
import { useState } from 'react';

const InputExampleInput = ({ repo, setRepo, loading }) => {
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

  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setRepo(inputValue);
    }
  };

  return (
    <Segment>
      <Input
        focus
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Search a repository"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        loading={loading}
        value={inputValue}
      />
    </Segment>
  );
};

export default InputExampleInput;

// Je définis les propTypes pour typer les props du composant
InputExampleInput.propTypes = {
  repo: PropTypes.string,
  setRepo: PropTypes.func,
  loading: PropTypes.bool,
};
