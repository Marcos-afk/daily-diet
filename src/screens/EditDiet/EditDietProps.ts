export interface RouteParams {
  diet: {
    hour: string;
    date: string;
    name: string;
    description: string;
    type: string;
  };
}

export type DatePickerTypeModeProps = 'time' | 'date';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: ButtonTypeStyleProps;
}
