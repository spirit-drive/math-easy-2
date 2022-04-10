import { EntityType, Solution } from 'src/server.types';

export const getSolvedCount = (solutions: Solution[], items: Array<{ id: string }>, type: EntityType): number =>
  solutions.reduce((acc, item) => {
    if (items?.some((i) => i.id === item.id && item.type === type)) {
      return acc + 1;
    }
    return acc;
  }, 0);
