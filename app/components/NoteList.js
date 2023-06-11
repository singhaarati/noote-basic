
export default function NoteList() {
    return (
        <div>
            <ul>
                {
                    notes.map(note => (
                        <li key={note.id}>{note.desc}</li>
                    ))
                }
            </ul>
        </div>
    )
}
