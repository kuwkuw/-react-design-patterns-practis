import { SplitScreen } from './SplitScreen'
import { RegularList } from './RegularList'
import { LargPersoneListItem } from './LargPersonListItem'
import { SmallPersoneListItem } from './SmallPersonListItem'
import './App.css'
import { Modal } from './Modal'

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

const LeftHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: 'green'}}>{message}</h1>
}

const RightHandComponent = ({ message }) => {
  return <p style={{backgroundColor: 'red'}}>{ message }</p>
}

function App() {

  return (
    <>
      {/* <SplitScreen leftWeigth={1} rightWeigth={5}> 
        <LeftHandComponent  message={"LEFT1"} />
        <RightHandComponent message={"RIGHT!"} />
      </SplitScreen> */}
      {/* <RegularList items = {people} resourceName="person" itemComponent={LargPersoneListItem} />

	  <RegularList items = {people} resourceName="person" itemComponent={SmallPersoneListItem} /> */}

	  <Modal>
		<LargPersoneListItem person={people[0]} />
	  </Modal>
    </>
  )
}

export default App
