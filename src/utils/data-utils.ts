import { Product } from '../types/types';

export const changeData = (data: Product[], id: string, value: number) => {

  const index = data.findIndex((item) => item.id === id);

  if (index === -1) {
    return data;
  }

  const newValue = data[index].amount + value;

  if (!value || !newValue) {
    return [...data.slice(0, index), ...data.slice(index + 1)];
  }

  const newProduct = {...data[index], amount: data[index].amount + value};

  return [...data.slice(0, index), newProduct, ...data.slice(index + 1)];
};


