import * as Styled from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RouteParams } from './FeedbackProps';
import { Titles } from './utils';
import primaryImage from '@assets/primary.png';
import secondaryImage from '@assets/secondary.png';

export const Feedback = () => {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { style } = route.params as RouteParams;

  const handleHome = () => {
    navigate('home');
  };

  return (
    <Styled.Container>
      <Styled.Title type={style}>{style === 'PRIMARY' ? Titles[0] : Titles[1]}</Styled.Title>
      {style === 'PRIMARY' ? (
        <Styled.Subtitle>
          Você continua <Styled.Span>dentro da dieta</Styled.Span>. Muito bem!
        </Styled.Subtitle>
      ) : (
        <Styled.Subtitle>
          Você <Styled.Span>saiu da dieta</Styled.Span> dessa vez, mas continue se esforçando e não desista!
        </Styled.Subtitle>
      )}

      <Styled.Image source={style === 'PRIMARY' ? primaryImage : secondaryImage} />
      <Styled.SubmitButton onPress={handleHome}>
        <Styled.TitleButton>Página Inicial</Styled.TitleButton>
      </Styled.SubmitButton>
    </Styled.Container>
  );
};
