export type Id = string | number;

export type Group = {
  id: Id;
  title: string;
};

export type Icon = {
  id: Id;
  groupId: Id;
  content: string;
};
