export interface IListItemProps {
  text: string;
  onDelete: (arg: string) => void;
  onEdit: () => void;
}
