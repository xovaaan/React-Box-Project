import styles from "./Navigation.module.css"

const Nav = () => {

    console.log(styles);
    return (
    <div className={`${styles.navigation} container`}>
        <div>
         <img src="./images/logo.png" alt=""  />
        </div>

        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
        </ul>
       
    </div>
    )
}

export default Nav;