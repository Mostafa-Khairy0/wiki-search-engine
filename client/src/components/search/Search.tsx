"use client";
import styles from "./style.module.css";
import Image from "next/image";
import Input from "./Input";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <div className={styles.bold}>Wikipedia</div>
        <div className={styles.light}>The Free Encyclopedia</div>
      </div>
      <Image
        src="/wiki.png"
        width={300}
        height={300}
        alt="Wikipedia"
        className={styles.image}
        priority={true}
      />
      <div className={styles.row}>
        <Input />
        <div className={styles.btn} onClick={() => router.push(`/new_index`)}>
          New Index
        </div>
      </div>
    </div>
  );
};

export default Search;
