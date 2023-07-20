// J'importe les composants dont j'ai besoin à partir de la librairie semantic-ui-react
import { Card, Icon, Image } from 'semantic-ui-react';

// J'importe les propTypes pour typer les props du composant
import PropTypes from 'prop-types';

const CardExampleCard = ({
  repo,
  repoIds,
  repoImgUrls,
  repoNames,
  repoOwners,
  repoDescriptions,
}) => {
  return (
    <Card.Group centered itemsPerRow={3}>
      {repoIds.map((repoId, index) => (
        <Card key={repoId}>
          <Image src={repoImgUrls[index]} wrapped ui={true} />
          <Card.Content>
            <Card.Header>{repoNames[index]}</Card.Header>
            <Card.Meta>
              <span className="date">Owned by {repoOwners[index]}</span>
            </Card.Meta>
            <Card.Description>{repoDescriptions[index]}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default CardExampleCard;

// Je définis les propTypes pour typer les props du composant
// Totalement carry par chatGPT là dessus
CardExampleCard.propTypes = {
  repo: PropTypes.string.isRequired,
  repoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  repoImgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoOwners: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
