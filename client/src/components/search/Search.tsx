"use client";
import styles from "./style.module.css";
import Image from "next/image";
import Input from "./Input";
import { useRouter } from "next/navigation";

const Search = ({ indexType }: { indexType: string }) => {
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
      <Input indexType={decodeURI(indexType)} />
      <div className={styles.backBtn} onClick={() => router.push(`/new_index`)}>
        <i className="fa-solid fa-chevron-left"></i>
        <p>Create New Index</p>
      </div>
    </div>
  );
};

export default Search;
