export default function StartPage({onStart}) {
    return (
        <>
            <section className="title">
                <h1>Quizzcal</h1>
                <p>Some description if needed</p>
            </section>
            <button className="btn-start" onClick={onStart} aria-label="Start quiz">Start quiz</button>
        </>
    )
}