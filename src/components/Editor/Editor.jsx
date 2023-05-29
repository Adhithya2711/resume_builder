import React, { useState } from "react";

import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";

function Editor(props) {
    const sections = props.sections;

    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);


    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl

                    label="Title"
                    placeholder="Enter title eg. Fullstack Developer"
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter company name eg. ZOHO"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certificate link"
                    placeholder="Enter certificate link "
                />
                <InputControl
                    label="Location"
                    placeholder="Enter location eg. Remote" />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work" />
            </div>
            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
            </div>
        </div>
    );
    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Project Title"
                    placeholder="Enter project title eg. Resume Builder App" />
            </div>
            <InputControl
                label="Overview"
                placeholder="Enter basic overview of project" />

            <div className={styles.row}>
                <InputControl
                    lable="Deployed Link"
                    placeholder="Enter deployed link of project" />
                <InputControl
                    label="Github Link"
                    placeholder="Enter github link of project" />
            </div>
            <div className={styles.column}>
                <label>Enter project description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
            </div>
        </div>

    );
    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. B.Tech" />
                <InputControl
                    label="College/School Name"
                    placeholder="Enter name of your college/school" />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education" />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education" />
            </div>
        </div>
    );
    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    placeholder="Enter your full name eg. Adhithya"
                />
                <InputControl
                    label="Title"
                    placeholder="Enter your title eg. Java Fullstack Developer" />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Linkedin Link"
                    placeholder="Enter your linkedin profile link" />
                <InputControl
                    label="Github Link"
                    placeholder="Enter your github profile link" />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Portfolio Link"
                placeholder="Enter your personalized portfolio link"/>
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    placeholder="Enter your email" />
                <InputControl
                    label="Phone-Number"
                    placeholder="Enter your phone number" />
            </div>
           
        </div>
    );
    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
                <InputControl placeholder="Line 5" />
            </div>
        </div>
    );
    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                placeholder="Enter your objective/summary" />
        </div>
    );
    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                placeholder="Enter something" />
        </div>
    );


    const generateBody = () => {

        switch(sections[activeSectionKey]){
            case sections.basicInfo:return basicInfoBody;
            case sections.workExp:return workExpBody;
            case sections.project:return projectBody;
            case sections.education:return educationBody;
            case sections.achievement:return achievementsBody;
            case sections.summary:return summaryBody;
            case sections.other:return otherBody;

            default: return null;
        }

    };





    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(sections)?.map((key) =>
                    <div className={`${styles.section} ${activeSectionKey === key ?
                        styles.active : ""}`}
                        key={key}
                        onClick={() => setActiveSectionKey(key)}
                    >
                        {sections[key]}
                    </div>)}
            </div>
            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter section title" />


                {generateBody()}


            </div>
        </div>
    )
}

export default Editor;