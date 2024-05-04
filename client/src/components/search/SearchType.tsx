"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./style.module.css";

const vaildSearchTypes = ["Wild card", "Phrase", "Approximate", "Boolean"];

const SearchType = ({
  setSearchType,
  searchType,
}: {
  searchType: string;
  setSearchType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className={styles.searchTypeBox}>
      <div className={styles.title}>Select Search Type</div>
      <div className={styles.searchTypes}>
        {vaildSearchTypes.map((type, index) => (
          <div
            className={
              searchType == type ? styles.activeSearchType : styles.searchType
            }
            key={index}
            onClick={() => setSearchType(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchType;
