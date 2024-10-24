import{Ca as b,Ga as m,Ha as p,Ia as l,Ja as c,Ka as i,La as n,Oa as u,Pa as g,Ta as o,U as f,Ua as s,Wa as v,ob as y,pa as d,sa as r}from"./chunk-5PKEA7AN.js";var _=(t,a)=>a.id;function k(t,a){if(t&1&&(i(0,"li"),o(1),n()),t&2){let e=a.$implicit;r(),s(e)}}function T(t,a){if(t&1&&(i(0,"span",11),o(1),n()),t&2){let e=a.$implicit;r(),s(e)}}function x(t,a){if(t&1&&(i(0,"a",13),o(1,"GitHub"),n()),t&2){let e=u().$implicit;g("href",e.githubUrl,d)}}function C(t,a){if(t&1&&(i(0,"a",14),o(1,"Live Demo"),n()),t&2){let e=u().$implicit;g("href",e.liveUrl,d)}}function P(t,a){if(t&1&&(i(0,"div",5)(1,"div",2)(2,"h3",6),o(3),n(),i(4,"p"),o(5),n(),i(6,"div",7)(7,"h4",8),o(8,"Key Features:"),n(),i(9,"ul",9),l(10,k,2,1,"li",null,p),n()(),i(12,"div",10),l(13,T,2,1,"span",11,p),n(),i(15,"div",12),b(16,x,2,1,"a",13)(17,C,2,1,"a",14),n()()()),t&2){let e=a.$implicit;r(3),s(e.title),r(2),s(e.description),r(5),c(e.keyFeatures),r(3),c(e.technologies),r(3),m(e.githubUrl?16:-1),r(),m(e.liveUrl?17:-1)}}var h=class t{projects=[{id:1,title:"Task Management System with Load Balancing",description:"Developed a comprehensive web application designed to manage and process resource-intensive tasks effectively.",keyFeatures:["Dynamic Load Balancing: Implemented a load balancing mechanism that distributes incoming tasks across multiple servers, ensuring optimal utilization of resources.","User-Friendly Interface: Built a responsive and intuitive interface using Angular, allowing users to easily submit tasks and monitor their status in real time.","Robust Backend Services: Leveraged ASP.NET Core to create RESTful APIs that handle task management operations.","Performance Monitoring: Integrated monitoring tools to track server performance and task execution times."],technologies:["ASP.NET Core","Angular","MySQL","Load Balancing"],githubUrl:"https://github.com/yourusername/task-management-system"},{id:2,title:"Encryption Web API",description:"Created a secure API specifically for encryption and decryption tasks, emphasizing data integrity and user authentication.",keyFeatures:["Secure API Design: Developed a RESTful API using ASP.NET Core that allows users to submit data for encryption or decryption securely.","Responsive Angular Frontend: The frontend features a clean interface for user data input and result viewing.","Persistent Storage with MySQL: Utilized MySQL for data storage, ensuring data integrity while allowing for complex queries.","JWT-Based Authentication: Implemented JWT for secure user access to the API."],technologies:["ASP.NET Core","Angular","MySQL","JWT"]},{id:3,title:"Fibonacci Task Manager",description:"Created a platform for users to submit and manage tasks related to Fibonacci numbers, with real-time feedback and validation.",keyFeatures:["Task Submission and Validation: Users can submit tasks specifying a number and receive instant validation.","Real-Time Progress Tracking: Developed a feature that allows users to monitor the progress of their tasks in real time.","Angular-Driven User Experience: The frontend is designed to be intuitive and responsive, enhancing user engagement.","Backend Integration: The ASP.NET Core backend validates submitted numbers against the Fibonacci sequence."],technologies:["ASP.NET Core","Angular","MySQL","JWT"],githubUrl:"https://github.com/yourusername/fibonacci-task-manager"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-portfolio"]],standalone:!0,features:[v],decls:8,vars:0,consts:[[1,"grid","gap-8"],[1,"card","bg-base-200"],[1,"card-body"],[1,"card-title","text-3xl","mb-4"],[1,"grid","md:grid-cols-2","gap-6"],[1,"card","bg-base-300"],[1,"card-title"],[1,"my-4"],[1,"font-bold"],[1,"list-disc","ml-5"],[1,"flex","flex-wrap","gap-2","my-2"],[1,"badge","badge-primary"],[1,"card-actions","justify-end"],["target","_blank",1,"btn","btn-outline","btn-sm",3,"href"],["target","_blank",1,"btn","btn-primary","btn-sm",3,"href"]],template:function(e,S){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),o(4,"My Projects"),n(),i(5,"div",4),l(6,P,18,4,"div",5,_),n()()()()),e&2&&(r(6),c(S.projects))},dependencies:[y],encapsulation:2})};export{h as PortfolioComponent};
