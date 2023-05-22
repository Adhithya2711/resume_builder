import React from "react";

import styles from './Body.module.css';

function Body() {
    return(
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map(item=>
                            <span
                            key={item}
                            styles={{backgroundColor:item}}
                            className={styles.color}/>
                            )
                    }
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    <span className={styles.color}/>
                    
                </div>
                <button>Download</button>
            </div>
        </div>
    )

}

