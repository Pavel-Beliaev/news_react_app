type Group<T> = {
  [key: string]: T[];
};

export function groupByArrays<
  T extends { subsection: string; section: string; des_facet: string[] },
>(arr: T[]): T[][] {
  const result: T[][] = [];
  const grouped: Group<T> = {};

  arr.forEach((item: T) => {
    const section = item.section;
    const subsection = item.subsection;
    const key: string = `${section}_${subsection}`;

    if (!grouped.hasOwnProperty(key)) {
      grouped[key] = [];

      result.push(grouped[key]);
    }
    grouped[key].push(item);
  });

  return result;
}
