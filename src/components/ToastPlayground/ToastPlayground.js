import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [inputMessage, setInputMessage] = useState("");
  const [variant, setVariant] = useState([]);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={inputMessage}
              onChange={(e) => {
                setInputMessage(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {
              VARIANT_OPTIONS.map((val) => {
                const id = `variant-${val}`;
                return (
                  <div
                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                  >
                    <label key={id} htmlFor={id}>
                      <input
                        id={id}
                        type="radio"
                        name="variant"
                        value={`${val}`}
                        checked={variant === val}
                        onChange={(event) => {
                          setVariant(event.target.value);
                        }}
                      />
                      {val}
                    </label>
                  </div>
                );
              })
              /* TODO Other Variant radio buttons here */
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => {
                window.alert(`Howdy!!${variant} ${inputMessage}`);
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
