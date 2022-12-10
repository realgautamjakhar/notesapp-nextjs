import Link from "next/link";
import React from "react";
import CreateNote from "./createNote";
import styles from "./notes.module.css";
async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.items as any[];
}

export default async function page() {
  const notes = await getNotes();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.notescontainer}>
          {notes?.map((note) => {
            return <Note note={note} key={note.id} />;
          })}
        </div>
        <CreateNote />
      </section>
    </>
  );
}

function Note({ note }: any) {
  const { title, content, id, created } = note || {};
  return (
    <Link href={`/notes/${id}`} className={styles.Notes}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
