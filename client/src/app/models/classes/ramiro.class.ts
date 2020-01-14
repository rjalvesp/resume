import * as Moment from 'moment';
import { TimelineItem } from './timeline-item.class';
import { Task } from './task.class';
import { Skill } from './skill.class';
import { ItemRanking } from './item-ranking.class';
import { FieldValue } from './field-value.class';

export class Ramiro {
    public static get fullname() : string { return 'Rj Alves' }
    public static get dob() : string { return '1989/04/21'; }
    public static get age() : number { return Moment().diff(Moment(Ramiro.dob, 'YYYY/MM/DD'), 'years'); }
    public static get aboutMe() : FieldValue[] {
        return [
            new FieldValue('Bachelor Degree', 'Computer Scientist'),
            new FieldValue('Certifications', 'CISCO CCNA'),
            new FieldValue('Email', 'ramiroalves@gmail.com'),
            new FieldValue('Hobbies', 'Bass Player / Football / eSports'),
            new FieldValue('Experience', 'Since 2008')
        ]
    }
    public static get summary(): string[] {
        return [
            `I am a developer and system analyst that within the age of ${Ramiro.age} has worked with networking, computer
            security, and web development. During my career I've enjoyed direct experiences with concepts like Clustering, Membrane Computing and Use of social APIs for “Social Insight”
            and “Social Data Mining”.`,
            `My story as a developer started working since my 3rd year of college, showing dedication and passion about what I do, always trying
            to learn and improve both personally and professionally. Leading me to this current stage of my life in which I'm having fun 
            with web systems to achieve some small milestone as Fullstack Developer while focusing on my own career's path.`
        ]
    }
    public static get education(): TimelineItem[] {
        return [
            new TimelineItem({
                to      : '2012/05/01',
                from    : '2009/02/01',
                company : 'Universidad Católica Andrés Bello - Guayana.',
                charge  : 'Computer Scientist ',
                tasks: [
                    new Task({
                        title: 'Activities and Societies:',
                        description: [
                            `English Conversational Club.`,
                            `Computing-Lab Operator.`,
                            `Practical teaching for Algortyhms and Programming III.`
                        ]
                    }),
                    new Task({
                        title: 'Optatives:',
                        description: [
                            `Emergent Computing.`,
                            `Programmable Logic Controllers (PLC).`,
                            `Web Development.`,
                            `Database Management.`
                        ]
                    })
                ]
            })
        ]
    }
    public static get timeline(): TimelineItem[] {
        return [
            new TimelineItem({
                from: '2019/01/01',
                company: 'RightSource',
                charge: 'Fullstack Senior Developer',
                tasks: [
                    new Task({
                        title: 'Fullstack Senior Developer @ Presence PG',
                        description: [
                            'Working with PresencePG on Makena Capital’s investment site as a BackEnd and FrontEnd lead developer using Node, MySQL and React.', 
                            'Developed experience using Addepar APIs.' ,
                            'Created critical bridge tool on high-level security internal documents to be provided by a third party using Encryption and AWS Lambda.'
                        ],
                    })
                ]
            }),
            new TimelineItem({
                to: '2018/12/31',
                from: '2017/12/01',
                company: 'GLOBANT',
                charge: 'Semisenior Web Developer',
                tasks: [
                    new Task({
                        title: 'Web Developer @ Morgan Stanley',
                        description: [
                            'Worked enhancing Holdings Features in Ms Mobile product (Tablet and Phone apps).',
                            'P2P Payments and Send Money With Zelle portal Planning and Implementation.',
                            'Worked in new MSO P2P Payments and Send Money With Zelle portal, Enrollment functions, data modeling, services development, UI Specs, between others.',
                            'Worked in Morgan Stanley’s Common UI Project.'
                        ]
                    })
                ]
            }),
            new TimelineItem({
                to: '2019/01/01',
                from: '2016/07/01',
                job: `I've been working on myself as a Libero Developer with many actual
                technologies such as Node.js frameworks, Angular, and Laravel for 5
                current projects for the company involving different Social APIs, AWS,
                Azure technologies, and security solutions in a daily basis with people from
                over the world.`,
                company: 'IDALO, LLC',
                charge: 'Senior Full-Stack Developer',
                tasks: null
            }),
            new TimelineItem({
                to: '2017/11/01',
                from: '2012/06/01',
                company: '3rd Party Confidential Company',
                charge: 'Senior Backend Developer',
                tasks: [
                    new Task({
                        to: '2017/11/01',
                        from: '2015/05/01',
                        description: [
                            `Back-End Endpoint developer for "Surveillance Web System" for a private stakeholder.`,
                            `Technologies: Node.js, angular-fullstack.`,
                            `Tools: Webstorm, CouchDB.`
                        ]
                    }),
                    new Task({
                        to: '2017/11/01',
                        from: '2015/05/01',
                        description: [
                            `Back-End Cloud Azure developer for "Surveillance Web System" for a private stakeholder.`,
                            `Technologies: Node.js, Angular-fullstack, Azure library.`,
                            `Additional comments: Telemetry and queue Azure implementations to achieve real-time communication between multiple devices.`
                        ]
                    }),
                    new Task({
                        from: '2015/05/01',
                        to: '2017/11/01',
                        description: [
                            `Back-End security developer for "Surveillance Web System" for a private stakeholder.`,
                            `Technologies: Node.js, CouchDB, OAuth 2.0.`,
                            `Additional comments: Custom implementation OAuth 2.0 (RFC 6749) for the whole project.`
                        ]
                    }),
                    new Task({
                        from: '2015/05/01',
                        to: '2017/11/01',
                        description: [
                            `Front-End developer and Front-End UX/UI QAs for "Surveillance Web System" for a private stakeholder.`,
                            `Technologies: Angular.js, Angular-fullstack, several other component libraries.`
                        ]
                    }),
                    new Task({
                        from: '2014/11/01',
                        to: '2015/04/01',
                        description: [
                            `Front-end C# development for "Expenditure" for a private stakeholder.`,
                            `Technologies involved: MVVM, .NET Framework 3.5.`,
                            `Tools: Visual Studio 2013.`
                        ]
                    }),
                    new Task({
                        from: '2014/01/01',
                        to: '2014/10/01',
                        description: [
                            `Back-end C# development for "Technicians Handheld" for a private stakeholder.`,
                            `Technologies involved: .NET Identity 2.0, .NET Web API 2.2, .NET Entity Framework 6.0, OAuth 2.0, x.509 propietary implementation.`,
                            `Tools: Couchbase, Couchbase .NET Library, Visual Studio 2013.`
                        ]
                    }),
                    new Task({
                        from: '2012/06/01',
                        to: '2014/01/01',
                        description: [
                            `Private development in computer security area for a third-party stakeholder.`
                        ]
                    })
                ]
            }),
            new TimelineItem({
                to: '2012/05/01',
                from: '2009/02/01',
                company: 'Xpectra, C.A.',
                charge: 'Junior .NET Developer',
                tasks: [
                    new Task({
                        description: [`IDE Development for transaction type developments for XCOPE's final product - Internship.`]
                    }),
                    new Task({
                        description: [`Design and Development of NetMATRIX's (Telemanagement software) Indicator and event Viewer. - Internship.`]
                    }),
                    new Task({
                        description: [`Proposal of Visual paradigm for the design of NetMATRIX 2012 - Interfaces.`]
                    })
                ]
            }),
            new TimelineItem({
                to: '2011/06/01',
                from: '2008/02/01',
                job: `Design, development, publishing, and technological transfer of Fe y Alegría's educational software "Peace's Path".`,
                company: 'Universidad Católica Andrés Bello - Guayana',
                charge: 'Volunteer'
            }),
            new TimelineItem({
                to: '2011/06/01',
                from: '2008/02/01',
                job: 'Manager in charge of the proper functioning and correct use of the CPUs and several Computer Labs on campus.',
                company: 'Universidad Católica Andrés Bello - Guayana',
                charge: 'Computing Lab Operator'
            }),
        ]
    }
    public static get skills(): Skill[] {
        return [
            new Skill({
                title: 'Languages',
                values: [
                    new ItemRanking({
                        name: 'Javascript',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'Typescript',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'C# .NET',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'Python',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'PHP',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'HTML5',
                        ranking: 5.0
                    }),
                    new ItemRanking({
                        name: 'CSS3 (Sass/Less)',
                        ranking: 4.0
                    })
                ]
            }),
            new Skill({
                title: 'Databases',
                values: [
                    new ItemRanking({
                        name: 'SQL Server',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'MariaDB/MySQL',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'PostgreSQL',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'CouchDB/Cloudant',
                        ranking: 5.0
                    }),
                    new ItemRanking({
                        name: 'MongoDB',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'Redis',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'CouchBase',
                        ranking: 4.0
                    })
                ]
            }),
            new Skill({
                title: 'Frameworks',
                values: [
                    new ItemRanking({
                        name: 'Angular',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'React',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'Vue',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'Node',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'Laravel',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'Django',
                        ranking: 3.5
                    }),
                    new ItemRanking({
                        name: '.Net',
                        ranking: 4.5
                    })
                ]
            }),
            new Skill({
                title: 'Services',
                values: [
                    new ItemRanking({
                        name: 'Azure Service Bus',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'Azure Active Directory B2C',
                        ranking: 4.5
                    }),
                    new ItemRanking({
                        name: 'AWS S3',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'AWS Lambda',
                        ranking: 4.0
                    }),
                    new ItemRanking({
                        name: 'Auth0',
                        ranking: 4.0
                    })
                ]
            })
        ]
    }
}