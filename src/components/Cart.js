import '../styles/Cart.css'

function Cart() {
    let monsteraPrix = 8;
    let lierrePrix = 10;
    let bouquetPrix = 15;
    return (<div className="lmj-cart">
        <h2> Panier </h2>
        <ul>
            <li> Monstera : {monsteraPrix}€ </li>
            <li> Lierre : {lierrePrix}€ </li>
            <li> Bouquet de fleurs : {bouquetPrix}€ </li>
        </ul>
        Total : {monsteraPrix + lierrePrix + bouquetPrix} €
    </div>)
}

export default Cart