import React, { useContext, createContext } from "react";
import { splitAt } from "ramda";
import { getSubstringEntriesIndices } from "../../utils/strings.js";
//
import "./SearchHighlight.css";
import BEM from "../../utils/BEM.js";
const b = BEM("SearchHighlight");

export const SearchHighlightContext = createContext("");

const SearchHighlight = ({ children }) => {
  const searchQuery = useContext(SearchHighlightContext);
  const substringEntriesIndices = getSubstringEntriesIndices(
    children,
    searchQuery
  );

  return searchQuery === "" && substringEntriesIndices.length === 0
    ? children
    : substringEntriesIndices
        .reduce(
          ([result, offset], index) => {
            const last = result.pop();
            const [prefix, partWithSearchQueryAtStart] = splitAt(
              index - offset,
              last
            );
            const [query, suffix] = splitAt(
              searchQuery.length,
              partWithSearchQueryAtStart
            );

            result.push(prefix, query, suffix);

            return [result, index + searchQuery.length];
          },
          [[children], 0]
        )[0]
        .map((str, i) =>
          i % 2 === 0 ? (
            str
          ) : (
            <mark key={i} className={b()}>
              {str}
            </mark>
          )
        );
};

export default SearchHighlight;
