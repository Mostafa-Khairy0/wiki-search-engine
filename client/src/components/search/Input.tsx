"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import search from "@/api/search";

interface Result {
  name: string;
  link: string;
}

const Input = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (text.length) search(text).then((results) => setResults(results));
    else setResults([]);
  }, [text]);
  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
      {results.length > 0 && (
        <div className={styles.results}>
          {results.map(({ name, link }, index) => (
            <div className={styles.result} key={index}>
              <div className={styles.name}>{`${name.slice(0, 25)}${
                name.length > 25 ? "..." : ""
              }`}</div>
              <Link href={link} className={styles.link}>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
