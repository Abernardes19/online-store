export interface IHeaderProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  searchBtn: () => Promise<void>
}