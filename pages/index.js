import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { html2pdf } from "html2pdf.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div id="invoice">
        <h1>СКАЧАЛКА PDF</h1>
      </div>
      <button>DOWNLOAD</button>
    </div>
  );
}
