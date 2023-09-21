const data = [
  {
    topic: "React",
    details: [
      {
        id: 1342,
        question: "What is state?",
        answer: [
          "Local memory in a component. It can only be changed with a setter function in the original component and is able to be passed down as props. State changes trigger re-renders, which updates the UI of our app.",
        ],
      },
      {
        id: 12992,
        question: "What is state management?",
        answer: [
          "Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app",
        ],
      },
      {
        id: 13452,
        question: "What is React?",
        answer: [
          `React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook’s News Feed in 2011 and on Instagram in 2012.`,
        ],
      },
      {
        id: 19452,
        question: "What are the major features of React?",
        answer: [
          `

It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.`,
          `Supports server-side rendering.`,
          `Follows Unidirectional* data flow or data binding.`,
          `Uses reusable/composable UI components to develop the view.`,
        ],
      },
      {
        id: 5432,
        question: "What language is React based on?",
        answer: ["JavaScript"],
      },
      {
        id: 3543,
        question: "What are the building blocks of React apps?",
        answer: ["Components"],
      },
      {
        id: 8832,
        question:
          "What's the name of the syntax we use to describe a UI in React?",
        answer: ["JSX"],
      },
      {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: ["Props"],
      },
      {
        id: 9103,
        question: "How to give components memory?",
        answer: ["useState hook"],
      },
      {
        id: 2002,
        question:
          "What do we call an input element that is completely synchronised with state?",
        answer: ["Controlled element"],
      },
      {
        id: 2021,
        question: "What is the proper way to update a counter by 1 with state?",
        answer: ["setCount(prev => prev + 1)"],
      },
      {
        id: 2022,
        question: "What is the proper way to toggle a boolean with state?",
        answer: ["setCount(current => !current)"],
      },
      {
        id: 2023,
        question:
          "How can you attempt render something that may not be available (yet)? ",
        answer: [
          "Use a '?' if the following data may not be available. EXAMPLE: data.users?.name",
        ],
      },
      {
        id: 8973,
        question: "Conditional Rendering Tip",
        answer: [
          "data/state will always be null to start, until the data is fetched. To avoid errors, you can write the conditionals like this... <p>{data?.text}</p>",
        ],
      },
      {
        id: 64323,
        question: `What is the name of the DOM node where everything inside it will be managed by React DOM?`,
        answer: ["root"],
      },
      {
        id: 43579,
        question: `Why must components begin with an uppercase letter? `,
        answer: ["Because React will read lowercase letters as DOM tags "],
      },
      {
        id: 34793,
        question: `Whether you declare a component as a function or a class, it must never modify its own _____?`,
        answer: [
          "Props. React is pretty flexible but it has a single strict rule: All React components must act like pure functions with respect to their props.",
        ],
      },
      {
        id: 29383,
        question: `Where do you initialize state in a class component?`,
        answer: [`In the constructor function `],
      },
      {
        id: 29313,
        question: `State in Class Constructor Example`,
        answer: [
          `constructor(props) {super(props); this.state = {date: new Date()}} `,
        ],
      },
      {
        id: 83642,
        question: "How can I pass state from one sibling to another sibling?",
        answer: [
          "You must lift state. This means you localize the state in the shared parent component and then pass state and any eventHandlers down as props. You may need to use the callback function for the event handlers. EX: onClick={(id) => handleClick(item.id)}. The function you make needs the arg you included in the callback to recognize the component/element it's meant for",
        ],
      },
      {
        id: 11873,
        question: "How do I conditionally set inline styles ?",
        answer: [
          "Set the conditional statement directly after the desired style attribute","<h1 style{{color: checked ? 'green' : 'red'}}></h1>",
        ],
      },
    ],
  },
  {
    topic: "Redux",
    details: [
      {
        id: 5471,
        question: "useSelector",
        answer: [
          `Lets your React components read data from the store `,
          `Accepts a single function(selector function) `,
          `A selector function takes the entire Redux store state as an argument, reads some value, then returns that result `,
          `Will do a reference comparison of the prev selector result value & current value. If different, rerender is forced`,
        ],
      },
      {
        id: 9672,
        question: "Store Methods",
        answer: [
          `getState() `,
          `dispatch(action) `,
          `subscribe(listener) `,
          `replaceReducer(nextReducer)`,
        ],
      },
      {
        id: 3763,
        question: "getState()",
        answer: [
          "Returns the current state tree of you app. It is equal to the last value returned by the store's reducer",
        ],
      },
      {
        id: 3633,
        question: "dispatch(action)",
        answer: [
          `Dispatches an action. This is the ONLY way to trigger a global state change.`,
          `The store's reducing function will be called w/ the current state. It will be returned from getState() from now on, & the change listeners will immediately be notified`,
        ],
      },
      {
        id: 1163,
        question: "action",
        answer: [
          "A plain obj describing the change for your app. Actions are the ONLY way to get data into the store, so any data from UI events, network callbacks, or other needs to be dispatched as actions. Actions MUST have a type field that indicates the type of action being performed.",
        ],
      },
      {
        id: 9673,
        question: "<applyMiddleware/> #1",
        answer: [
          "'vanilla' store implementation you get by calling ['createStore'](/api/createStore) only supports PLAIN obj actions & hands them IMMEDIATELY to the reducer",
        ],
      },
      {
        id: 9674,
        question: "<applyMiddleware/> #2",
        answer: [
          "Middleware can interpret actions differently & provide support for DISPATCHING ASYNC ACTIONS",
        ],
      },
      {
        id: 9675,
        question: "<applyMiddleware/> #3",
        answer: [
          "Created by communit, must install packages like npm i redux-thunk/redux-promise",
        ],
      },
      {
        id: 8933,
        question: "useDispatch() #1",
        answer: [
          `Gives us the store's dispatch method `,
          `As a result, implementation of the hook is return store.dispatch`,
        ],
      },
      {
        id: 8934,
        question: "useDispatch() #2",
        answer: [
          ` We can call 'const dispatch = useDispatch()' in any component that needs to dispatch actions, and will call dispatch(some action) as needed `,
          `Allows us to access the store in a component file`,
        ],
      },
      {
        id: 7384,
        question: "Provider",
        answer: [
          `Specifically tells React-Redux what store we want to use in our components `,
          `Wrap app in a Provider, pass store as a prop to the Provider `,
          `Now every component can access the Redux store if needed`,
        ],
      },
      {
        id: 1119,
        question: "type # 1",
        answer: [
          "Can be defined as consts & imported from another module. Better to use strings for type because strings are serializable",
        ],
      },
      {
        id: 1118,
        question: "type # 2",
        answer: [
          ` String that gives action a descriptive name `,
          `EX: 'todos/todoAdded'`,
          `First part is the feature / category the action belongs to `,
          `Second part is the specific thing that happened`,
        ],
      },
      {
        id: 5467,
        question: "payload",
        answer: [
          "Another field with additional info about what happened. EX: const addToDoAction = { type: 'todos/todoAdded', payload: 'buy milk'}",
        ],
      },
      {
        id: 4783,
        question: "reducer",
        answer: [
          "A function that receives the current state & an action obj, decides how to update the state if necessary, and returns the new state: (state, action) => newState",
        ],
      },
      {
        id: 4784,
        question: "reducer Example",
        answer: [
          "Think of it as an event listener which handles events based on the received action(event) type",
        ],
      },
      {
        id: 9429,
        question: "store.subscribe",
        answer: [
          "Allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store",
        ],
      },
      {
        id: 9939,
        question: "store.subscribe Example",
        answer: [
          "Subscribe a function to your store that logs a message everytime an action is received & the store is updated",
        ],
      },
      {
        id: 9979,
        question: "rootReducer example",
        answer: [
          "const rootReducer = Redux.combineReducer({auth: authenticateReducer, notes: notesReducer});",
        ],
      },
      {
        id: 9929,
        question: "rootReducer",
        answer: [
          "A way to combine multiple reducers which will manage state from different parts in the app, then bring it together. It is represented by the keys you give it.",
        ],
      },
    ],
  },
  {
    topic: "APIs",
    details: [
      {
        id: 8383,
        question: "What are API's generally used for?",
        answer: ["For developers to use and extend in their applications"],
      },
      {
        id: 8422,
        question: "What is an API? (generally) #1",
        answer: [
          "Defines how it is expected to be used and it defines what you can expect to receive by using it",
        ],
      },
      {
        id: 8423,
        question: "What is an API? (generally) #2",
        answer: [
          "Gives you data and provides an abstraction of the implementation, also helps you do things without knowing how to do it yourself",
        ],
      },
      {
        id: 3729,
        question: "What is the most common type of API?",
        answer: ["Web based APIs"],
      },
      {
        id: 6542,
        question: "What MUST you know about APIs?",
        answer: ["How to write and understand the implementation of the API"],
      },
      {
        id: 4352,
        question: "What is a remote API?",
        answer: [
          `Being able to control the UI from any distance (potentially) `,
          `It helps with outsourcing data when our devices couldn't/shouldn't store all of it; removes the limitations of our devices`,
        ],
      },
      {
        id: 4352,
        question: "Remote API Example?",
        answer: ["Shazam"],
      },
      {
        id: 4222,
        question: "What is REST?",
        answer: [
          "Representational State Transfer.",
          "If an API follows REST constraints/styles, then they are considered RESTful",
        ],
      },
      {
        id: 9837,
        question: "URL",
        answer: ["Universal Resource Locator"],
      },
      {
        id: 3212,
        question: "HTTP",
        answer: ["Hyper Text Transer Protocol"],
      },
      {
        id: 3547,
        question: "How does the web work?",
        answer: [
          `Browser creates HTTP request `,
          `Req needs verb (CRUD) `,
          `Server receives req that was transferred from client`,
          `Server does what it needs to do then sends the res back to the client`,
        ],
      },
      {
        id: 5923,
        question: "How do you pass info about the request? #1",
        answer: ["Query String Params; EX: ?=about"],
      },
      {
        id: 9723,
        question: "How do you pass info about the request? #2",
        answer: [
          "Headers: - used to help further communicate what is wanted and what has been sent back",
        ],
      },
      {
        id: 4235,
        question: "caching",
        answer: [
          "Storing info that you can access without refreshing/making a new req",
        ],
      },
      {
        id: 9657,
        question: "RESTful Approach",
        answer: [
          `Client-Server Architecture `,
          `Statelessness`,
          `Cacheability`,
          `Layered System `,
          `Code on Demand`,
          `Uniform Interface`,
        ],
      },
      {
        id: 6345,
        question: "How they sit on top of web tech #1",
        answer: ["Client makes req (dev programming using library"],
      },
      {
        id: 2458,
        question: "How they sit on top of web tech #2",
        answer: [
          "Stateless, to maintain state you have to send it in every req, do this using HEADERS",
        ],
      },
      {
        id: 9852,
        question: "Resource",
        answer: ["vague on purpose, used to define an object"],
      },
      {
        id: 1243,
        question: "Resource Example: Book Library App",
        answer: [
          `Homepage has books, which are resources`,
          `Click on a book, now we see the author, which is also a resource `,
          `The link goes to all of the author's books and reviews, (resources)`,
        ],
      },
      {
        id: 7482,
        question: "What are collections and resources?",
        answer: [
          "What we call the building blocks of anything we can build. They are all a summation of collections and resources",
        ],
      },
      {
        id: 2459,
        question: "HTTP",
        answer: ["Hyper Text Transer Protocol"],
      },
      {
        id: 9782,
        question: "CRUD",
        answer: ["Create(PUT), Reading(GET), Updating(PUT), Deleting(Delete)"],
      },
      {
        id: 8749,
        question: "Exploring Online APIs",
        answer: [
          "Many sites have a developers section where you can play around with APIs and explore implementation. Spotify is a good example of this",
        ],
      },
      {
        id: 3429,
        question: "Example of a simple API call",
        answer: ["GET(method)/v1/search(endpoint) /beyonce=artist(usage)"],
      },
      {
        id: 4352,
        question: "CURL",
        answer: [
          "Open source tool that is used to send data back and forth and runs locally on your computer. Can use Curl to retreive data form an API(terminal)",
        ],
      },
      {
        id: 1089,
        question: "CURL Example",
        answer: [
          "curl 'https://jsonplaceholder. typicode.com/todos/1' will return the todo object requested and print in your terminal",
        ],
      },
      {
        id: 8923,
        question: "Spotify CURL Example",
        answer: [
          `curl -X "GET" "https://api.spotify.com/v1/search?q=Beyonce&type=artist" -H"Accept: application/json" -H"Content-Type: application/json" -H"Authorization:Bearer *auth token*"`,
        ],
      },
      {
        id: 3425,
        question: "Spotify CURL Example Details",
        answer: [
          `GET === Request Type `,
          `?q=Beyonce === query params; details of what/where we look to get data `,
          `-H === Headers/Header info`,
        ],
      },
      {
        id: 2453,
        question: "jq",
        answer: ["formats the terminal very nicely and with colors"],
      },
      {
        id: 5631,
        question: "pipe",
        answer: [
          "Take whatever from left side of term and run on the right side",
        ],
      },
      {
        id: 9075,
        question: "JQ and Pipe Example",
        answer: ["curl -X'GET'... | jq"],
      },
    ],
  },
  {
    topic: "Twilio & Visual API Tools",
    details: [
      {
        id: 9834,
        question: "Twilio API",
        answer: [
          "Amazing communication API. Can send emails, SMS, reminders, alerts, lead conversion, etc to consumers",
        ],
      },
      {
        id: 4589,
        question: "Twilio API Tip",
        answer: [
          `When sending SMS, get rid of the '/' at the end of each line. Node.js will make everything cleaner in the future`,
        ],
      },
      {
        id: 2432,
        question: "Visual Tools",
        answer: [
          "Great for use with APIs, makes things easier to read and type",
        ],
      },
      {
        id: 1792,
        question: "Visual Tools Examples",
        answer: [`Postman`, `REST Fox`],
      },
      {
        id: 4329,
        question: "Postman",
        answer: [
          "Has sharable features for most popular APIs. Postman is very popular and worth learning how to use all fo the main features",
        ],
      },
      {
        id: 7564,
        question: "REST Fox",
        answer: [
          "Many use cases. Can filter messages sent/received. Queries can look complicated. REST Fox has a query entery where we can add it and it will encode it for us.",
        ],
      },
      {
        id: 4235,
        question: "Path Parameters tip #1",
        answer: ["add ':' first, "],
      },
      {
        id: 9011,
        question: "Path Parameters tip #2",
        answer: [
          "Write out the name of the path you want to replace on the left side. This is like storing a variable that you can then use instead of writing out",
        ],
      },
      {
        id: 8927,
        question: "Path Parameters tip #2 Example",
        answer: ["TWILIO_ACCOUNT_SID | 84sU83478Hah3"],
      },
      {
        id: 2342,
        question: "Authorization",
        answer: [
          "Be sure to include basic auth so it can verify who you are / your account / PAT --- EX: username: SID, password: PAT",
        ],
      },
      {
        id: 2143,
        question: "Notes",
        answer: [
          `Write down notes about what the call is doing `,
          `Provide URL to the doucmentation that showed you how to do it`,
        ],
      },
      {
        id: 5432,
        question: "Environment",
        answer: [
          ` Add environment(for API you're using) `,
          `Typically written in JSON `,
          `put in account SID`,
        ],
      },
      {
        id: 9459,
        question: "Environment Example",
        answer: [
          `"TWILIO_ACCOUNT_SID": "*your SID*", "TWILIO_AUTH_TOKEN": "*your PAT*"`,
        ],
      },
      {
        id: 1784,
        question: "Environment Example Use-case",
        answer: [
          `username | {{TWILIO_ACCOUNT_SID}},  password | {{TWILIO_AUTH_TOKEN}}`,
        ],
      },
      {
        id: 1784,
        question: "REST Fox Environment Misc",
        answer: [
          `Environment is basically like storing data in a var`,
          `You can import and export this info `,
          `Typically written in JSON`,
        ],
      },
    ],
  },
  {
    topic: "Javascript",
    details: [
      {
        id: 1875,
        question: "state",
        answer: ["local"],
      },
      {
        id: 5682,
        question: "test1",
        answer: ["local"],
      },
      {
        id: 8753,
        question: "test2",
        answer: ["local"],
      },
    ],
  },
  {
    topic: "React-Redux Patterns",
    details: [
      {
        id: 3895,
        question: "global state",
        answer: [
          "State that is NEEDED ACROSS THE APP. This state goes into the store",
        ],
      },
      {
        id: 2789,
        question: "local state",
        answer: [
          "State that is only needed locally in its component state, or by a few child components. If you do not NEED global state, then use local as much as you can.",
        ],
      },
      {
        id: 5432,
        question: "React.memo",
        answer: [
          `Wraps items that are affected by unnecessary re-renders `,
          `Lets you skip re-rendering when its props are unchanged `,
          `If parent re-renders, but the memo wrapped child's props have not changed, then the child will not re-render`,
        ],
      },
      {
        id: 9909,
        question: "useSelector 2nd argument; comparison function",
        answer: [
          "Is called with the old & new values, and returns true if they are the same. If they are the same, then useSelector won't mutate the component re-render",
        ],
      },
      {
        id: 9910,
        question: "useSelector 2nd argument; comparison function example",
        answer: ["shallowEqual comparison"],
      },
    ],
  },
  {
    topic: "React Query",
    details: [
      {
        id: 7821,
        question: "React Query",
        answer: [
          "Library to use and fetch data with. It is able to store data without state",
        ],
      },
      {
        id: 7822,
        question: "Install React Query",
        answer: ["npm i @tanstack/react-query"],
      },
      {
        id: 7826,
        question: "useQuery",
        answer: [
          `Is a hook `,
          `Stores data, you can call data wherever `,
          `takes [] that has a unique key! EX: ['cat']`,
        ],
      },
      {
        id: 7827,
        question: "useQuery examples",
        answer: [
          "const {data} = useQuery(1,2). 2nd arg uses function to fetch data (like axios)",
        ],
      },
      {
        id: 7894,
        question: "QueryClient",
        answer: [
          `Put this var as attribute to the Provider`,
          `Can take configure arg, one of those can either prevent re-render when you leave the page, or enforce it`,
        ],
      },
      {
        id: 7895,
        question: "QueryClient Example",
        answer: ["const client = new QueryClient();"],
      },
      {
        id: 2345,
        question: "QueryClientProvider",
        answer: [
          "Similar to store Provider in Redux. Wrap components that you want to have access to the data",
        ],
      },
      {
        id: 8913,
        question: "useQuery Tips #1",
        answer: [
          "const {data: catData, isLoading} GOOD = catData?.text BAD = data?.text",
        ],
      },
      {
        id: 3458,
        question: "useQuery Tips #2",
        answer: [
          `Can add isloading to it (preset boolean), so you write... if(isLoading) <h1>Loading...</h1> `,
          ` you can do the same with errors`,
        ],
      },
      {
        id: 4897,
        question: "Refresh",
        answer: [
          `Whenever you call refresh, it will update(refetch) the data. You can do this in a button... `,
          `<button onClick={refresh}>Update Data</button>`,
        ],
      },
      {
        id: 3258,
        question: "Mutation / Refreshing on tab changes",
        answer: [
          "const client = new Query Client({defaultOptions: {queries: {refetchOnWindowFocus: false,}}})",
        ],
      },
    ],
  },
  {
    topic: "Cross-Browser Testing",
    details: [
      {
        id: 34589,
        question: "Cross-Browser Testing(CBT)",
        answer: [
          "Process of ensuring a website works across various browsers and devices",
        ],
      },
      {
        id: 56822,
        question: "CBT Things to Consider",
        answer: [
          ` Different browsers that do not support latest JS/CSS features `,
          `Different devices w/ different hardware capabilities; EX: smartphone, laptop, desktop, smart tv, tablet, etc`,
          `People with disabilities(screen readers)`,
        ],
      },
      {
        id: 87513,
        question: "Do sites need to work EXACTLY the same on all browsers?",
        answer: [
          "No, a latest browser can have all the bells & whistles while an older broswer appears more flat and basic. BUT, the core functionality / purpose should remain the same",
        ],
      },
      {
        id: 87653,
        question: "Workflows for Testing & Bug Fixes",
        answer: [
          `Inital Planning`,
          `Development `,
          `Testing/Discovery`,
          `Fixes/Iteration`,
          `(steps 2-4 tend to be repeated as many times as necessary to get all implementation done)`,
        ],
      },
      {
        id: 38947,
        question: "Initial Planning",
        answer: [
          `Decide upon content, functionality, design `,
          `Determine project deadlines & compensation `,
          `Decide what frameworks & libraries to be used `,
          `Explore target audience & their most used browsers & devices`,
          `Review functionality wants & technologies to prepare a realistic expectation of production"`,
        ],
      },
      {
        id: 14383,
        question: "Development #1",
        answer: [
          "Get functionality working as closely as possible in all target broswers. This may involve the following 3 steps (see next cards)",
        ],
      },
      {
        id: 43578,
        question: "Development #1A",
        answer: [
          `Writing different code paths that reproduce functionality in different ways aimed at different browsers`,
        ],
      },
      {
        id: 41178,
        question: "Development #1B",
        answer: [
          `Using a polyfill to mimic any missing support using JS or other technologies`,
        ],
      },
      {
        id: 12278,
        question: "Development #1C",
        answer: [
          `Using a library that allows you to write a single bit of code & does different things in the background depending on browser support`,
        ],
      },
      {
        id: 98345,
        question: "Development #2",
        answer: [
          `Accept somethings won't work the same. Ensure the core concepts & purposes remain regardless of browser type`,
        ],
      },
      {
        id: 34591,
        question: "Development #3",
        answer: [
          `Accept site will not work in some browsers, long as the client understands and accepts this`,
        ],
      },
      {
        id: 41178,
        question: "Development #4",
        answer: [`Do NOT leave testing until the end!!`],
      },
      {
        id: 41178,
        question: "Testing / Discovery (Test after each implementation!)",
        answer: [
          `Test in multiple browsers like: Chrome, Safari, FireFox, etc`,
          `  Do lo-fi testing like using site with only keyboard or via screen reader`,
          `Test on mobile platform like Android or iOS`,
        ],
      },
      {
        id: 34587,
        question: "After Main Browser Testing",
        answer: [
          `After testing in main broswers, now test in all target audience broswers`,
        ],
      },
      {
        id: 72345,
        question: "Ways to Emulate Devices",
        answer: [`Emulators`, `Virtual Machines`, `Groups`],
      },
      {
        id: 45982,
        question: "Emulators A)",
        answer: [`Emulate device using software on your desktop computer`],
      },
      {
        id: 93485,
        question: "Emulators B)",
        answer: [
          `Software that allows you to emulate multiple operating system/software combinations on your desktop computer`,
        ],
      },
      {
        id: 43589,
        question: "Emulators C)",
        answer: [
          `Ask friends, family, employees, peers, etc to test your site. Even professional user testers (QA's)`,
        ],
      },
      {
        id: 93485,
        question: "Most Efficient Way to Emulate",
        answer: [
          `Automation tools `,
          `Great for bigger projects`,
          `Some paid tools enable continuous intergration`,
        ],
      },
      {
        id: 34579,
        question: "Test on Pre-release Browsers",
        answer: [
          `This is especially important when you are going to implement new technologies on your site`,
        ],
      },
      {
        id: 53478,
        question: "Fixes/Iteration",
        answer: [
          `Narrow down the bug `,
          `Find out what platform, device, broswer, version, etc has the bug`,
          `Try on similar configurations (same broswer, different desktop platform, etc)`,
        ],
      },
      {
        id: 32422,
        question: "It Might Not Be Your Fault",
        answer: [
          `If it is a browser bug, it may get fixed in the next update `,
          `If still persits then consider reporting the bug.`,
        ],
      },
      {
        id: 99353,
        question: "But if it IS Your Fault",
        answer: [
          `Figure out how to work AROUND your code. DON'T change the problem code outright. Instead, fork the code.`,
        ],
      },
      {
        id: 91182,
        question: "Example of what to do after forking your buggy code",
        answer: [
          `Use JS Feature detection code to detect situations in which a problem feature doesn't work, & run some different code in those cases that works`,
        ],
      },
      {
        id: 91183,
        question: "Previous Cont.",
        answer: [
          `Once a fix has been made, continue testing process to make sure your fix is working and has not broken the site in other areas`,
        ],
      },
      {
        id: 27942,
        question: "Polyfill #1",
        answer: [
          `Piece of code (usually is on the Web) used to provide modern functionality on older browsers that do not natively support it`,
        ],
      },
      {
        id: 27943,
        question: "Polyfill #2",
        answer: [
          `Native implementations of API's can do more and are faster than polyfills. They are RARE to be used today, but common in IE6 days`,
        ],
      },
      {
        id: 43522,
        question: "Selenium's Mission Statement",
        answer: [`Selenium automates browsers. That's it! `],
      },
      {
        id: 31111,
        question: "user-agent",
        answer: [
          `Pre-fixed rules for some browsers to enforce consistency.`,
          `EX: an <h3></h3> on safari /iOS will have a minimum size it MUST be according to the user-agent. To get around this, you must use a different tag that does not have a restriction at that level.`,
        ],
      },
      // left off on fixing/iterations
    ],
  },
];

export default data;
