import style from "./notepage.module.css";
async function getNote(id: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  return data;
}

export default async function page({ params }: any) {
  const note = await getNote(params.id);
  console.log(note);
  const { title, content, created } = note;
  return (
    <div className={style.container}>
      <div className={style.noteContainer}>
        <div className={style.notesHeading}>
          <h2>{title}</h2>
          <p>{created}</p>
        </div>
        <h5>{content}</h5>
      </div>
    </div>
  );
}
