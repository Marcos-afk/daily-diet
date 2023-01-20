export interface DataProps {
  hour: string;
  data: string;
  name: string;
  description: string;
  type: string;
}

export interface DietListProps {
  title: string;
  data: DataProps[];
}
