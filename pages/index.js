import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="홈">
      <div className={styles.container}>
        <div className="bg-slate-100 p-2">
          <h1 className="text-2xl font-bold">NextShop</h1>
          <p>jinbinson</p>
          <p>-TailwindCss</p>
          <p className="">-MongDB</p>
        </div>
      </div>
    </Layout>
  );
}
