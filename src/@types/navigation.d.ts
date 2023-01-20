import { DataProps } from '@screens/Home/HomeProps';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      createDiet: undefined;
      feedback: {
        style: string;
      };
      showDiet: {
        diet: DataProps;
      };
    }
  }
}
