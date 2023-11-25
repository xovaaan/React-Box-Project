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
     </div>
      <div className="images">

      </div>
    </section>
  )
}

export default form
