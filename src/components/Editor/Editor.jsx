import React, { useEffect, useState } from "react";

import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";




function Editor(props) {
    const sections = props.sections;
    const information = props.information;

    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);

    const [activeInformation, setActiveInformation] = useState(information[sections[Object.keys(sections)[0]]]);

    const [activeDetailIndex, setActiveDetailIndex] = useState(0);

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const [values, setValues] = useState({

        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    });

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value
        setValues(tempValues);
    }


    // const workExpBody = (
    //     <div className={styles.detail}>
    //         <div className={styles.row}>
    //             <InputControl

    //                 label="Title"
    //                 placeholder="Enter title eg. Fullstack Developer"
    //                 value={values.title}
    //                 onChange={(event) =>
    //                     setValues((prev) => ({ ...prev, title: event.target.value })
    //                     )
    //                 }
    //             />
    //             <InputControl
    //                 label="Company Name"
    //                 placeholder="Enter company name eg. ZOHO"
    //                 value={values.companyName}
    //                 onChange={(event) =>
    //                     setValues((prev) => ({ ...prev, companyName: event.target.value })
    //                     )
    //                 }
    //             />
    //         </div>
    //         <div className={styles.row}>
    //             <InputControl
    //                 label="Certificate Link"
    //                 placeholder="Enter certificate link "
    //                 value={values.certificateLink}
    //                 onChange={(event) =>
    //                     setValues((prev) => ({ ...prev, certificateLink: event.target.value })
    //                     )
    //                 }
    //             />
    //             <InputControl
    //                 label="Location"
    //                 placeholder="Enter location eg. Remote"
    //                 value={values.location}
    //                 onChange={(event) =>
    //                     setValues((prev) => ({ ...prev, location: event.target.value })
    //                     )
    //                 }

    //             />

    //         </div>
    //         <div className={styles.row}>
    //             <InputControl
    //                 label="Start Date"
    //                 type="date"
    //                 placeholder="Enter start date of work"
    //                 value={values.startDate}
    //                 onChange={(event) =>
    //                     setValues((prev) => ({ ...prev, startDate: event.target.value })
    //                     )
    //                 }
    //             />
    //             <InputControl
    //                 label="End Date"
    //                 type="date"
    //                 placeholder="Enter end date of work"
    //                 value={values.endDate}
    //                 onChange={(event) =>
    //                     setValues((prev) => ({ ...prev, endDate: event.target.value })
    //                     )
    //                 }
    //             />
    //         </div>
    //         {/* <div className={styles.column}>
    //             <label>Enter work description</label>
    //             <InputControl placeholder="Line 1"
    //                 value={values.points ? values.points[0] : ""}
    //                 onChange={(event) => handlePointUpdate(event.target.value, 0)}

    //             />
    //             <InputControl placeholder="Line 2"
    //                 value={values.points ? values.points[1] : ""}
    //                 onChange={(event) => handlePointUpdate(event.target.value, 1)}
    //             />
    //             <InputControl placeholder="Line 3"
    //                 value={values.points ? values.points[2] : ""}
    //                 onChange={(event) => handlePointUpdate(event.target.value, 2)}
    //             />
    //             <InputControl placeholder="Line 4"
    //                 value={values.points ? values.points[3] : ""}
    //                 onChange={(event) => handlePointUpdate(event.target.value, 3)}
    //             />
    //         </div> */}
    //     </div>
    // );
    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label=" Title"
                    placeholder="Enter title eg. Resume Builder App"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value })
                        )
                    } />
            </div>
            <InputControl
                label="Overview"
                placeholder="Enter basic overview of project"
                value={values.overview}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, overview: event.target.value })
                    )
                } />

            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    placeholder="Enter deployed link of project"
                    value={values.link}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, link: event.target.value })
                        )
                    }
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter github link of project"
                    value={values.github}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, github: event.target.value })
                        )
                    } />
            </div>
            <div className={styles.column}>
                <label>Enter project description</label>
                <InputControl placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
                <InputControl placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)} />
            </div>
        </div>

    );
    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value })
                        )
                    }
                    placeholder="Enter title eg. B.Tech" />
                <InputControl
                    label="College/School Name"
                    value={values.college}
                    placeholder="Enter name of your college/school"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, college: event.target.value })
                        )
                    } />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, startDate: event.target.value })
                        )
                    } />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, endDate: event.target.value })
                        )
                    } />
            </div>
        </div>
    );
    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    value={values.name}
                    placeholder="Enter your full name eg. Adhithya"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value })
                        )
                    }
                />
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter your title eg. Java Fullstack Developer"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value })
                        )
                    } />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Linkedin Link"
                    value={values.linkedin}
                    placeholder="Enter your linkedin profile link"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, linkedin: event.target.value })
                        )
                    } />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter your github profile link"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, github: event.target.value })
                        )
                    } />

            </div>
            <div className={styles.row}>
                <InputControl
                    label="Portfolio Link"
                    value={values.portfolio}

                    placeholder="Enter your personalized portfolio link"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, portfolio: event.target.value })
                        )
                    } />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value })
                        )
                    } />
                <InputControl
                    label="Phone-Number"
                    value={values.phone}
                    placeholder="Enter your phone number"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, phone: event.target.value })
                        )
                    } />
            </div>

        </div>
    );
    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
                <InputControl placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)} />
                <InputControl placeholder="Line 5"
                    value={values.points ? values.points[4] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 4)} />
            </div>
        </div>
    );
    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                value={values.summary}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, summary: event.target.value })
                    )
                }

                placeholder="Enter your objective/summary" />
        </div>
    );
    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                value={values.other}
                placeholder="Enter something"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, other: event.target.value })
                    )
                } />
        </div>
    );


    const generateBody = () => {

        switch (sections[activeSectionKey]) {
            case sections.basicInfo: return basicInfoBody;
            // case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievement: return achievementsBody;
            case sections.summary: return summaryBody;
            case sections.other: return otherBody;

            default: return null;
        }

    };


    const handleSubmission = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    portfolio: values.portfolio,
                    email: values.email,
                    phone: values.phone,

                };

                props.setInformation(prev => ({
                    ...prev, [sections.basicInfo]
                        : {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }
                ));
                break;
            }
            // case sections.workExp: {
            //     const tempDetail = {
            //         certificateLink: values.certificateLink,
            //         title: values.title,
            //         startDate: values.startDate,
            //         endDate: values.endDate,
            //         companyName: values.companyName,
            //         location: values.location,
            //         points: values.points,

            //     };

            //     const tempDetails = information[sections.workExp]?.details;
            //     tempDetails[activeDetailIndex] = tempDetail;

            //     props.setInformation(prev => ({
            //         ...prev, [sections.workExp]
            //             : {
            //             ...prev[sections.workExp],
            //             details: tempDetail,
            //             sectionTitle, 
            //         },
            //     }));
            //     break;
            // }

            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,

                };

                const tempDetails = information[sections.project]?.details;
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation(prev => ({
                    ...prev, [sections.project]
                        : {
                        ...prev[sections.project],
                        details: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.education: {
                const tempDetail = {

                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,

                };

                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation(prev => ({
                    ...prev, [sections.education]
                        : {
                        ...prev[sections.education],
                        details: tempDetail,
                        sectionTitle,
                    },
                }));

                break;
            }

            case sections.achievement: {
                const tempPoints = values.points;

                props.setInformation(prev => ({
                    ...prev, [sections.achievement]
                        : {
                        ...prev[sections.achievement],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.summary: {
                const tempDetail = values.summary;

                props.setInformation(prev => ({
                    ...prev, [sections.summary]
                        : {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));

                break;
            }
            case sections.other: {
                const tempDetail = values.other;

                props.setInformation(prev => ({
                    ...prev, [sections.other]
                        : {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));

                break;
            }

            default:
                return null;
        }
        
    };

    useEffect(() => {

        const activeInfo = information[sections[activeSectionKey]];

        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details ? activeInfo.details[0]?.overview || "" : "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            certificateLink: activeInfo?.details ? activeInfo.details[0]?.certificateLink || "" : "",
            // companyName: activeInfo?.details ? activeInfo.details[0]?.companyName || "" : "",
            // location: activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
            startDate: activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
            endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
            points: activeInfo?.details ? activeInfo.details[0]?.points ?
                [...activeInfo.details[0]?.points] : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : "",

            title: activeInfo?.details ? activeInfo.details[0]?.title || ""
                : activeInfo?.details?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details ? activeInfo.details[0]?.github || ""
                : activeInfo?.details?.github || "",
            portfolio: activeInfo?.detail?.portfolio || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            summary: typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
            other: activeInfo?.detail !== Object ? activeInfo.detail : "",

        });
    }, [activeSectionKey]);

   

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
                <InputControl label="Title" placeholder="Enter section title"

                    value={sectionTitle}
                    onChange={(event) => setSectionTitle(event.target.value)}

                />

                {/* <div className={styles.chips}>
                    {
                        activeInformation?.details ? activeInformation?.details?.map((item, index) => (

                            <div className={`${styles.chip}${activeDetailIndex === index ? styles.active : ""
                                }`} key={item.title + index}
                                onClick={() => setActiveDetailIndex(index)}
                            >

                                <p>
                                    {sections[activeSectionKey]} {index = 1}
                                </p>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>

                        )) : ""
                    }


                </div> */}


                {generateBody()}


                <button onClick={handleSubmission}>Save</button>


            </div>
        </div>
    );
}


export default Editor;