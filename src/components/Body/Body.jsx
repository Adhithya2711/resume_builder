import React, { useState } from "react";

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
        education:"Education",
        achievement:"Achievements",
        summary:"Summary",
        other:"Other",
    };

    const [resumeInformation,setResumeInformation]= useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            details: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            details: "",
        },
    })
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
                <Editor 
                sections={sections}

                information={resumeInformation}
                
                setInformation = {setResumeInformation}
                />
            </div>
        </div>
    )

}

export default Body;

