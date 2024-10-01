import { ChangeEvent } from 'react';
import { inputSearchCss } from './InputSearch-Style';
interface inputSearchProps {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ handleInput }: inputSearchProps) => {
  return (
    <div css={inputSearchCss.searchContainer}>
      <div css={inputSearchCss.search}>
        <input
          css={inputSearchCss.textInput}
          type="text"
          placeholder="username"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <img css={inputSearchCss.logo} src={'/images/Search.svg'} alt="logo" />
      </div>
    </div>
  );
};
