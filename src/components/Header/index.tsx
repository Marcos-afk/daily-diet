import * as Styled from './styles';
import logo from '@assets/logo.png';
import profile from '@assets/profile.png';

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.Logo source={logo} />
      <Styled.Profile source={profile} />
    </Styled.Container>
  );
};
