export interface IAutocompleteProps {
  items: ISuggestionItem[];
  searchTitle?: string;
  suggestionCallback: (item: ISuggestionItem) => void;
  searchCallback: (item: string) => void;
}
export interface IAutocompleteState {
  isSuggestionDisabled: boolean;
  searchText: string;
}
export interface ISuggestionItem {
  key: number;
  displayValue: string;
  searchValue: string;
  type?: string;
  tag?: any;
}
