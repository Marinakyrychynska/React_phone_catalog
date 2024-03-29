import React, { useEffect, useState } from 'react';
import './SelectSortBy.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../helpers/SearchHelper';
import { getSelectedOptionText } from '../../helpers/helpers';

export const SelectSortBy: React.FC = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentOption = searchParams.get('sort') || 'price';

  const handleSelectOption = (selectedValue: string) => {
    const newParam = { sort: selectedValue };

    if (searchParams.toString().includes('page')) {
      setSearchParams(getSearchWith({
        ...newParam,
        page: '1',
      }, searchParams));
    } else {
      setSearchParams(getSearchWith(newParam, searchParams));
    }

    setIsSelectOpen(false);
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;

    if (relatedTarget?.className.includes('select__dropdown')) {
      return;
    }

    setIsSelectOpen(false);
  };

  useEffect(() => {
    if (!searchParams.get('sort')) {
      setSearchParams(getSearchWith({ sort: 'price' }, searchParams));
    }
  }, [searchParams]);

  return (
    <div className="select">
      <div
        className="select__title"
      >
        Sort by
      </div>
      <div className="select__container">
        <button
          type="button"
          className="select__btn"
          id="triger"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          onBlur={handleBlur}
        >
          <p className="select__btn--option">
            {getSelectedOptionText(currentOption)}
          </p>
          <div className="select__btn--icon icon icon--down" />
        </button>

        {isSelectOpen && (
          <div className="select__dropdown">
            <button
              type="button"
              className="select__dropdown--item"
              onClick={() => handleSelectOption('age')}
            >
              Newest
            </button>

            <button
              type="button"
              className="select__dropdown--item"
              onClick={() => handleSelectOption('name')}
            >
              Alphabetically
            </button>

            <button
              type="button"
              className="select__dropdown--item"
              onClick={() => handleSelectOption('price')}
            >
              Cheapest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
