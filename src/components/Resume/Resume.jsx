import React, { useState } from "react";

import styles from './Resume.module.css';

import mailSvg from "./mail.svg";

import linkedinSvg from "./linkedin.svg";

import githubSvg from "./github.svg";

import phoneSvg from "./phone.svg";

import paperclipSvg from "./paperclip.svg";

import calendarSvg from "./calendar.svg";

import { useEffect } from "react";

function Resume(props) {

    const information = props.information;
    const sections = props.sections;

    const [columns,setColumns] = useState([[],[]]);

    const projectSection = (
        <div key={"project"} className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>Projects</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Project </p>
                    <a className={styles.link}>
                    <img src={paperclipSvg} alt="PaperClip" />
                    https://we4fwe4f.com/wefwsfe/wef

                    </a>
                    <a className={styles.link}>
                    <img src={githubSvg} alt="GitHub" />
                    https://github.com/wefwsfe/wef

                    </a>
                    <p className={styles.overview}>This project is a dummy project built with nothing.</p>

                    <ul className={styles.points}>
                        <li className={styles.point}>It is point one</li>
                        <li className={styles.point}>It is point two</li>
                        <li className={styles.point}>It is point three</li>
                        <li className={styles.point}>It is point four</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    const educationSection = (
        <div key={"education"} className={`${styles.section} ${styles.education}`}>
            <div className={styles.sectionTitle}>Education</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>B.tech </p>
                    <p className={styles.subTitle}>
                        Some college name
                    </p>
                    <div className={styles.date}>
                    <img src={calendarSvg} alt="Calendar" />
                    12/07/2021 - 2/02/2022

                    </div>
                    
                </div>
            </div>
        </div>
    );
    const achievementSection = (
        <div key = {"achievement"}className={`${styles.section} ${styles.achievement}`}>
            <div className={styles.sectionTitle}>Achievements</div>
            <div className={styles.content}>
            <ul className={styles.numbered}>
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
                <li>Achievement 4</li>
                <li>Achievement 5</li>
            </ul>
        </div>
        </div>
    );
    const summarySection = (
        <div key={"summary"} className={`${styles.section} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Summary</div>
            <div className={styles.content}>
                <div className={styles.overview}>
                    This is dummy basic summary.
                </div>
            </div>
        </div>
    );
    const otherSection = (
        <div  key={"other"}className={`${styles.section} ${styles.other}`}>
            <div className={styles.sectionTitle}>Other</div>
            <div className={styles.content}>
                <div className={styles.overview}>
                    This is dummy data... other
                </div>
            </div>

        </div>
    );




        useEffect(()=>{

            setColumns([
                [
                    educationSection,projectSection,summarySection
                ],
                [
                    achievementSection,otherSection
                ],
            ]);
        },[]);





    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.heading}>Name</p>
                <p className={styles.subHeading}>Full-Stack Developer</p>
                <div className={styles.links}>
                    <a className={styles.link}><img src={mailSvg} alt="Mail" />Email@gmail.com</a>
                    <a className={styles.link}><img src={phoneSvg} alt="Phone" />9994586625</a>
                    <a className={styles.link}> <img src={linkedinSvg} alt="Linkedin" /> https://linkedin.in/adhithya</a>
                    <a className={styles.link}><img src={githubSvg} alt="GitHub" /> https://github.in/adhithya

                    </a>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.col1}>
                    {
                        columns[0]
                    }

                </div>
                <div className={styles.col2}>
                    {columns[1]}
                </div>
            </div>

        </div>
    );
}

export default Resume;