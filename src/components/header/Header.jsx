import { Segment, Image } from 'semantic-ui-react';

const src1 = '/src/assets/images/logo-github.png';

// Bah ici RAS ! C'est juste un composant qui affiche une image

const HeaderExampleImage = () => {
  return (
    <Segment basic>
      <Image src={src1} size="small" centered />
    </Segment>
  );
};

export default HeaderExampleImage;
