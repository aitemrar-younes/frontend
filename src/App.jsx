import RootFrame from "./components/layout/RootFrame"

function App() {

  return (
    <>
      <RootFrame>
        <h1>Template</h1>
        <p>I have made this to make my workflow easy and orgnized</p>
        <p>I will keep maintaining it so it stays up to date</p>
        <h3>Technologies used</h3>
        <p>in this template i have used many technologies, are the folowing</p>
        <ul>
          <li>React</li>
          <li>Html</li>
          <li>Css</li>
          <li>Sass or Scss</li>
          <li>React-query</li>
          <li>react-router-dom</li>
          <li>formik</li>
          <li>react-icons</li>
          <li>toast</li>
          <li>react-icons</li>
        </ul>
        <h3>Experience's benefit</h3>
        <p>During the cursus of learning i have faced many issues, which lead me to learn new stuff </p>
        <p>in CRUD we need to retrieve data or send it using react-query if success display status of operation in a toast and for the data retrieved we need to display it in a table in case it is a list or in a form , managing a form should pass by formik framewrok </p>
        <hr />
        <br />
        <p><strong>table</strong> with search field, paginated, ordered and preBuilt filtres </p>
        <br />
        <p><strong>Form</strong> should manage state of values without rerender, also managing submition and error validation</p>
        <br />
        <p><strong>react-router-dom</strong> manage switching between multiple pages</p>
        <br />
        <p><strong>React-query#Tanstack</strong> manage connection's state to the API</p>
        <br />
        <p><strong>Toast</strong> display state of action after sending changes to the API</p>
        <br />

      </RootFrame>
    </>
  )
}

export default App
