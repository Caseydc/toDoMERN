export default function bookItem(props) {
    console.log(props.book)
    return (
        <div className = 'card'>
            <p> {props.book.title} </p>
            <p> {props.book.date}</p>
        </div>
    )
}
