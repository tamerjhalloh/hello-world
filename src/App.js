import "./App.css";

//  import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
//import Counter from "./components/Counter";
// import FuncitonClick from "./components/FuncitonClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
//  import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import InlineStyles from "./components/InlineStyles";

// import "./appStyles.css"
// import styles from './appStyles.module.css'

// import Form from "./components/Form";

// import LifeCycleA from "./components/LifeCycleA";

// import FragmentDemo from "./components/FragmentDemo";
// import TableFragment from "./components/TableFragment";

// import PureComponentDemo from "./components/PureComponentDemo";
// import PureParentComponent from "./components/PureParentComponent";

// import RefsDemo from "./components/RefsDemo";
//  import RFParentInput from "./components/RFParentInput";

// import PortalDemo from "./components/PortalDemo";

// import ClickCounter from "./components/HigherOrder/ClickCounter";
// import HoverCounter from "./components/HigherOrder/HoverCounter";

// import ClickCounter2 from "./components/RenderProps/ClickCounter2";
// import HoverCounter2 from "./components/RenderProps/HoverCounter2"; 
// //import User from "./components/RenderProps/User";
// import Counter from "./components/RenderProps/Counter";
// import ComponentC from "./components/Context/ComponentC";
// import { UserProvider } from "./components/Context/UserContext";
// import PostList from "./components/Http/PostList";
import PostForm from "./components/Http/PostForm";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error"> Error</h1>
      <h1 className={styles.success}> Success</h1> */}

      {/* <Greet name="Tamer" heroName="Batman"> 
        <p> This is children props.</p>
      </Greet>  */}
      {/*<Greet name="Basil" heroName="Superman"/> 
      <Greet name="Nasim" heroName="Halk"/> 
      <br /> 
      <Welcome name="Tamer" heroName="Tamer"/>  
      <Welcome name="Basil" heroName="Superman"/> 
      <Welcome name="Nasim" heroName="Halk"/>  */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FuncitonClick></FuncitonClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <InlineStyles /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <TableFragment /> */}
      {/* <PureParentComponent  /> */}
      {/* <RefsDemo /> */}
      {/* <RFParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ClickCounter name="Tamer"/>
      <HoverCounter name="Hosni" /> */}

      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={ (isLoggedOn) => isLoggedOn ?'Tamer' : 'Guest'}/> */}
      {/* <Counter>
        {(count, incrementHandler) => (
          <ClickCounter2 count={count}  incrementHandler={incrementHandler}/>
        )}
      </Counter>
      <Counter>
        {(count, incrementHandler) => (
          <HoverCounter2 count={count}  incrementHandler={incrementHandler}/>
        )}
      </Counter>  */}
      {/* <UserProvider value="Tamer">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList /> */}
      <PostForm />  
    </div>
  );
}

export default App;
