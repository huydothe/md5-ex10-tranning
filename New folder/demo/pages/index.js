import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./layout";
import {getStudents} from "./mock-data/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout>
        <div>Home Page</div>
      </Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <table className={styles.table}>
            <thread>
              <tr className={styles.tr}>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thread>
            <tbody>
              {getStudents().map(item => (
                <tr className={styles.tr} key={item.id}>
                  <td className={styles.td}>{item.id}</td>
                  <td className={styles.td}>{item.name}</td>
                  <td className={styles.td}>
                    <Link href={`/student/${encodeURIComponent(item.id)}`}>
                      <a>Show</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}
