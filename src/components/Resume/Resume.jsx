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

    const [columns, setColumns] = useState([[], []]);

    const info = {

        project: information[sections.project],
        achievement: information[sections.achievement],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],

    };

    const getFormattedDate = (value) => {
        if(!value) return "";
        const date = new Date(value);
        return`${date.getDate()}/${
            date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + date.getMonth() + 1}/${date.getFullYear()
        }`;
    }

    const projectSection = (
        <div key={"project"} className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.project?.details?.map((item) => (

                        <div className={styles.item}>
                            {item.title && <p className={styles.title}>{item.title} </p>}
                            {item.link && (

                                <a className={styles.link} href={item.link}>
                                    <img src={paperclipSvg} alt="PaperClip" />
                                    {item.link}

                                </a>

                            )}
                            {item.github && (

                                <a className={styles.link} href={item.github}>
                                    <img src={githubSvg} alt="GitHub" />
                                    {item.github}

                                </a>

                            )}
                            {item.overview && (

                                <p className={styles.overview} >{item.overview}</p>

                            )}

                            {item.points?.length > 0 && (
                                <ul className={styles.points}>
                                    {item.points?.map((elem, index) => (
                                        <li className={styles.point} key={elem + index}>
                                            {elem}

                                        </li>

                                    ))}

                                </ul>

                            )}

                        </div>

                    ))
                }

            </div>
        </div>
    );
    const educationSection = (
        <div key={"education"} className={`${styles.section} ${styles.education}`}>
            <div className={styles.sectionTitle}>{info.education?.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.education?.details?.map((item) => (
                        <div className={styles.item}>
                            {
                                item.title &&
                                <p className={styles.title}>{item.title} </p>
                            }
                            {
                                item.college &&
                                <p className={styles.subTitle}>
                                    Some college name
                                </p>
                            }
                            {
                                item.startDate && item.endDate &&
                                <div className={styles.date}>
                                    <img src={calendarSvg} alt="Calendar" />{" "}
                                    {getFormattedDate(item.startDate) -
                                    getFormattedDate(item.endDate)}
                                
                                </div>
                            }

                        </div>

                    ))}

            </div>
        </div>
    );
    const achievementSection = (
        <div key={"achievement"} className={`${styles.section} ${styles.achievement}`}>
            <div className={styles.sectionTitle}>{info.achievement?.sectionTitle}</div>
            <div className={styles.content}>
                {info.achievement?.points?.length > 0 && (
                    <ul className={styles.points}>
                        {
                            info.achievement?.points?.map((elem, index) => (
                                <li className={styles.point} key={elem + index}>
                                    {elem}
                                </li>
                            ))}
                            </ul>

                )}
                
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
        <div key={"other"} className={`${styles.section} ${styles.other}`}>
            <div className={styles.sectionTitle}>Other</div>
            <div className={styles.content}>
                <div className={styles.overview}>
                    This is dummy data... other
                </div>
            </div>

        </div>
    );




    useEffect(() => {

        setColumns([
            [
                educationSection, projectSection, summarySection
            ],
            [
                achievementSection, otherSection
            ],
        ]);
    }, []);





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