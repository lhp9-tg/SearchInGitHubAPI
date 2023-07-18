// J'importe les composants dont j'ai besoin à partir de la librairie semantic-ui-react
import { Segment, Input } from 'semantic-ui-react';

// J'importe les propTypes pour typer les props du composant
import PropTypes from 'prop-types';

const InputExampleInput = ({ repo, setRepo }) => {
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
