import styles from "./form.module.css"

const form = () => {
  return (
    <section className={styles.container}>
     <div className={styles.boxes}>
      <div className={styles.buttons}>
        <button>Via Support Chat</button>
        <button>Via Call</button>
      </div>
      <div className={styles.email}>
        <button>Via Email Form</button>
      </div>
      <div className={styles.input}>
        <div className={styles.inputs}>
        <label htmlFor="name">Name</label>
        <input type="text" name="Name" id="texts" placeholder="Your Name" />
        </div>
        <div className={styles.inputs}>
        <label htmlFor="name">E-mail</label>
        <input type="text" name="Name" id="texts" placeholder="Your E-mail" />
        </div>
        <div className={styles.texting}>
        <label htmlFor="name">Text</label>
        <textarea type="text" name="Name" rows="8"  id="texts" />
        </div>
       
      </div>
      <div className={styles.btn}>
        <button className={styles.mail}>SUBMIT</button>
      </div>
     </div>
      <div className={styles.images}>
      <img src="./images/one.png" alt="" />
      </div>
    </section>
  )
}

export default form
