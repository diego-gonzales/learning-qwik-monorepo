export const SORT_BY = {
  NONE: 'none',
  NAME: 'name',
  LASTNAME: 'lastname',
  COUNTRY: 'country',
} as const;

export type SortBy = (typeof SORT_BY)[keyof typeof SORT_BY];
