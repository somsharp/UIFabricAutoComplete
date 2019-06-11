import * as React from 'react';
import { SearchBox, Callout, List } from 'office-ui-fabric-react/lib/';
import {
  IAutocompleteProps, IAutocompleteState,
  CalloutStyle, AutocompleteStyles, SuggestionListStyle, ISuggestionItem,
  SuggestionListItemStyle
} from '.';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';

const KeyCodes = {
  tab: 9 as 9,
  enter: 13 as 13,
  left: 37 as 37,
  up: 38 as 38,
  right: 39 as 39,
  down: 40 as 40,
}
type ISearchSuggestionsProps = IAutocompleteProps;

export class Autocomplete extends React.Component<ISearchSuggestionsProps, IAutocompleteState> {
  private _menuButtonElement = React.createRef<HTMLDivElement>();

  constructor(props: ISearchSuggestionsProps) {
    super(props);
    this.state = {
      isSuggestionDisabled: false,
      searchText: '',
    };
  }
  protected getComponentName(): string {
    return 'SearchSuggestions';
  }
  handleClick = (item: ISuggestionItem) => {
    this.props.suggestionCallback(item);
  }
  render() {
    return (
      this.renderSearch()
    );
  }
  private renderSearch = () => {
    return (
      <div ref={this._menuButtonElement} style={AutocompleteStyles()} onKeyDown={this.onKeyDown}>
        <SearchBox
          id={'SuggestionSearchBox'}
          placeholder={'Search ' + this.props.searchTitle}
          onSearch={newValue => this.onSearch(newValue)}
          onChange={newSearchText => {
            newSearchText.trim() !== '' ? this.showSuggestionCallOut() : this.hideSuggestionCallOut();
            this.setState({ searchText: newSearchText });
          }}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
  private onSearch(enteredEntityValue: string) {
    this.props.searchCallback(enteredEntityValue.trim());
  }
  private renderSuggestions = () => {
    return (
      <Callout id='SuggestionContainer'
        ariaLabelledBy={'callout-suggestions'}
        gapSpace={2}
        coverTarget={false}
        alignTargetEdge={true}
        onDismiss={ev => this.hideSuggestionCallOut()}
        setInitialFocus={true}
        hidden={!this.state.isSuggestionDisabled}
        calloutMaxHeight={300}
        style={CalloutStyle()}
        target={this._menuButtonElement.current}
        directionalHint={5}
        isBeakVisible={false}
      >
        {this.renderSuggestionList()}
      </Callout >
    );
  }
  private renderSuggestionList = () => {
    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        <List id='SearchList' tabIndex={0}
          items={this.suggestedTagsFiltered(this.props.items)}
          onRenderCell={this.onRenderCell}
        />
      </FocusZone>
    );
  }
  private onRenderCell = (item: any) => {
    if (item.key !== -1) {
      return (
        <div key={item.key}
          className={SuggestionListItemStyle.root}
          data-is-focusable={true}
          onKeyDown={(ev: React.KeyboardEvent<HTMLElement>) => this.handleListItemKeyDown(ev, item)}>
          <div id={'link' + item.key}
            style={SuggestionListStyle()}
            onClick={() => this.handleClick(item)}>
            {item.displayValue}
          </div>
        </div>
      );
    } else {
      return (
        <div key={item.key} data-is-focusable={true}>
          {item.displayValue}
        </div>
      );
    }
  }

  private showSuggestionCallOut() {
    this.setState({ isSuggestionDisabled: true });
  }
  private hideSuggestionCallOut() {
    this.setState({ isSuggestionDisabled: false });
  }
  private suggestedTagsFiltered = (list: ISuggestionItem[]) => {
    let suggestedTags = list.filter(tag =>
      tag.searchValue.toLowerCase().includes(this.state.searchText.toLowerCase()));
    suggestedTags = suggestedTags.sort((a, b) => a.searchValue.localeCompare(b.searchValue));
    if (suggestedTags.length === 0) {
      suggestedTags = [{ key: -1, displayValue: 'No suggestions found', searchValue: '' }];
    }
    return suggestedTags;
  }
  protected handleListItemKeyDown = (ev: React.KeyboardEvent<HTMLElement>, item: ISuggestionItem): void => {
    const keyCode = ev.which;
    switch (keyCode) {
      case KeyCodes.enter:
        this.handleClick(item);
        break;
    }
  };
  protected onKeyDown = (ev: React.KeyboardEvent<HTMLElement>): void => {
    const keyCode = ev.which;
    switch (keyCode) {
      case KeyCodes.down:
        let el: any = window.document.querySelector("#SearchList");
        el.focus();
        break;
    }
  };
}
