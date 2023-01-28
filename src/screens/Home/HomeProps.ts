export interface DataProps {
  hour: string;
  date: string;
  name: string;
  description: string;
  type: string;
}

export interface DietListProps {
  title: string;
  data: DataProps[];
}
