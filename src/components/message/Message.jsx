// J'importe les composants dont j'ai besoin à partir de la librairie semantic-ui-react
import { Segment } from 'semantic-ui-react';

// J'importe les propTypes pour typer les props du composant
import PropTypes from 'prop-types';

// On note la ternaire de PGM
const SegmentExampleSegment = ({ repo, count }) => (
  <Segment>
    {count === 0 || repo === '' ? (
      <p>Aucun résultat</p>
    ) : (
      <p>
        La recherche a donnée {count}{' '}
        {count > 1 ? <span>résultats</span> : <span>résultat</span>}
      </p>
    )}
  </Segment>
);

export default SegmentExampleSegment;

// Je définis les propTypes pour typer les props du composant
SegmentExampleSegment.propTypes = {
  repo: PropTypes.string,
  count: PropTypes.number,
};
