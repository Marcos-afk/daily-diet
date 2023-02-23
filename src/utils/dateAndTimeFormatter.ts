type formatterType = 'DATE' | 'TIME';

export const dateAndTimeFormatter = (value: Date, type: formatterType) => {
  switch (type) {
    case 'DATE':
      return `${value.getDate() < 10 ? `0${value.getDate()}` : value.getDate()}/${
        value.getMonth() + 1 < 10 ? `0${value.getMonth() + 1}` : value.getMonth() + 1
      }/${value.getFullYear()}`;

    case 'TIME':
      return `${value.getHours() < 10 ? `0${value.getHours()}` : value.getHours()}:${
        value.getMinutes() < 10 ? `0${value.getMinutes()}` : value.getMinutes()
      }`;

    default:
      return '00/00/0000';
  }
};
