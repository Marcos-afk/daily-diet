export type TextStylesProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: TextStylesProps;
}

export interface RouteParams {
  style: TextStylesProps;
}
