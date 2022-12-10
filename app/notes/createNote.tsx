"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./notes.module.css";
export default function CreateNote() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const router = useRouter();
  async function submitNote(event: any) {
    event.preventDefault();
    if (title.length && content.length) {
      await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
    }
    settitle("");
    setcontent("");
    router.refresh();
  }
  return (
    <form onSubmit={(event) => submitNote(event)} className={styles.container}>
      <h1>Create Notes</h1>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => settitle(e.target.value)}
      />
      <label htmlFor="title">Content:</label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={(e) => setcontent(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}
