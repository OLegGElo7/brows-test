import React, { useMemo, useState } from "react";

export const useSortBrows = (serviceCards) => {
  //по поубываю и возрастанию
  const [isDescSort, setIdDescSort] = useState(false);

  // как только изменятся значения сортировки или пропс(с карточками), то рендерится юсмемо
  const sortedPrice = useMemo(() => {
    const sortTableBrows = [...serviceCards];
    sortTableBrows.sort((a, b) => {
      if (a.price < b.price) return isDescSort ? 1 : -1;
      if (a.price > b.price) return isDescSort ? -1 : 1;
      return 0;
    });

    return sortTableBrows;
  }, [isDescSort, serviceCards]);

  return {
    isDescSort,
    setIdDescSort,
    sortedPrice,
  };
};
