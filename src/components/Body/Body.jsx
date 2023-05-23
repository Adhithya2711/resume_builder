import React from "react";

import styles from './Body.module.css';
import Editor from "../Editor/Editor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

function Body() {
    const colors = ["239ce2","#48bb78","#0bc5ea","#ed8936","#b9d22b","#d22b2b","#1c0793","#454a4d"];
    
    const sections = {
        basicInfo:"Basic Info",
        workExp: "Work Experience",
        project:"Projects",
        eduction:"Eduction",
        achivement:"Achivements",
        summary:"Summary",
        other:"Other",
    };
    return(
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>

                   {colors.map((item) =>(
                    <span key={item} style={{backgroundColor: item}}
                    className={styles.color}/>
                   ))}
                    
                </div>
                <button>Download  <FontAwesomeIcon icon={faCircleArrowDown }/>    </button>
            </div>

            <div className={styles.main}>
                <Editor sections={sections}/>
            </div>
        </div>
    )

}

export default Body;

