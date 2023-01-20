export interface RouteParams {
  diet: {
    hour: string;
    data: string;
    name: string;
    description: string;
    type: string;
  };
}

export type BackgroundViewTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: BackgroundViewTypeStyleProps;
}
