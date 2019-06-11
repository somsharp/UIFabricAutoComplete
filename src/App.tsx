import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { Autocomplete, ISuggestionItem } from './Components/SearchBoxWithSuggestion';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

const searchData: ISuggestionItem[] = [
  { key: 1, displayValue: 'Alabama', searchValue: 'Alabama' },
  { key: 2, displayValue: 'Alaska', searchValue: 'Alaska' },
  { key: 3, displayValue: 'Arizona', searchValue: 'Arizona' },
  { key: 4, displayValue: 'Arkansas', searchValue: 'Arkansas' },
  { key: 5, displayValue: 'California', searchValue: 'California' },
  { key: 6, displayValue: 'Colorado', searchValue: 'Colorado' },
  { key: 7, displayValue: 'Connecticut', searchValue: 'Connecticut' },
  { key: 8, displayValue: 'Delaware', searchValue: 'Delaware' },
  { key: 9, displayValue: 'Florida', searchValue: 'Florida' },
  { key: 10, displayValue: 'Georgia', searchValue: 'Georgia' },
  { key: 11, displayValue: 'Hawaii', searchValue: 'Hawaii' },
  { key: 12, displayValue: 'Idaho', searchValue: 'Idaho' },
  { key: 13, displayValue: 'Illnois', searchValue: 'Illnois' },
  { key: 14, displayValue: 'Indiana', searchValue: 'Indiana' },
  { key: 15, displayValue: 'Iowa', searchValue: 'Iowa' },
  { key: 16, displayValue: 'Kansas', searchValue: 'Kansas' },
  { key: 17, displayValue: 'Kentucky', searchValue: 'Kentucky' },
  { key: 18, displayValue: 'Louisiana', searchValue: 'Louisiana' },
  { key: 19, displayValue: 'Maine', searchValue: 'Maine' },
  { key: 20, displayValue: 'Maryland', searchValue: 'Maryland' },
  { key: 21, displayValue: 'Massachusetts', searchValue: 'Massachusetts' },
  { key: 22, displayValue: 'Michigan', searchValue: 'Michigan' },
  { key: 23, displayValue: 'Minnesota', searchValue: 'Minnesota' },
  { key: 24, displayValue: 'Mississippi', searchValue: 'Mississippi' },
  { key: 25, displayValue: 'Missouri', searchValue: 'Missouri' },
  { key: 26, displayValue: 'Montana', searchValue: 'Montana' },
  { key: 27, displayValue: 'Nebraska', searchValue: 'Nebraska' },
  { key: 28, displayValue: 'Nevada', searchValue: 'Nevada' },
  { key: 29, displayValue: 'New Hampshire', searchValue: 'New Hampshire' },
  { key: 30, displayValue: 'New Jersey', searchValue: 'New Jersey' },
  { key: 31, displayValue: 'New Mexico', searchValue: 'New Mexico' },
  { key: 32, displayValue: 'New York', searchValue: 'New York' },
  { key: 33, displayValue: 'North Carolina', searchValue: 'North Carolina' },
  { key: 34, displayValue: 'North Dakota', searchValue: 'North Dakota' },
  { key: 35, displayValue: 'Ohio', searchValue: 'Ohio' },
  { key: 36, displayValue: 'Oklahoma', searchValue: 'Oklahoma' },
  { key: 37, displayValue: 'Oregon', searchValue: 'Oregon' },
  { key: 38, displayValue: 'Pennsylvania', searchValue: 'Pennsylvania' },
  { key: 39, displayValue: 'Rhode Island', searchValue: 'Rhode Island' },
  { key: 40, displayValue: 'South Carolina', searchValue: 'South Carolina' },
  { key: 41, displayValue: 'South Dakota', searchValue: 'South Dakota' },
  { key: 42, displayValue: 'Tennessee', searchValue: 'Tennessee' },
  { key: 43, displayValue: 'Texas', searchValue: 'Texas' },
  { key: 44, displayValue: 'Utah', searchValue: 'Utah' },
  { key: 45, displayValue: 'Vermont', searchValue: 'Vermont' },
  { key: 46, displayValue: 'Virginia', searchValue: 'Virginia' },
  { key: 47, displayValue: 'Washington', searchValue: 'Washington' },
  { key: 48, displayValue: 'West Virginia', searchValue: 'West Virginia' },
  { key: 49, displayValue: 'Wisconsin', searchValue: 'Wisconsin' },
  { key: 50, displayValue: 'Wyoming', searchValue: 'Wyoming' },
];

const entitySelectHandler = (item: ISuggestionItem): void => {
  alert(item.displayValue);
}

const searchTextandler = (item: string): void => {
  alert(item);
}


export const App: React.FunctionComponent = () => {
  return (
    <Stack
      styles={{
        root: {
          margin: '20px 30px',
        }
      }}
      gap={10}
    >
      <Text variant="xxLarge" styles={boldStyle}>
        Autocomplete
      </Text>
      <Text variant="large">Custom UI Fabric Autocomplete Component</Text>
      <Text variant="large" styles={boldStyle}>
        A basic example
      </Text>
      <Stack >
        <Text variant="large">What is your favorite US state?</Text>
        <Autocomplete
          items={searchData}
          searchTitle='US state...'
          suggestionCallback={entitySelectHandler}
          searchCallback={searchTextandler}
        />
      </Stack>

    </Stack>
  );
};
