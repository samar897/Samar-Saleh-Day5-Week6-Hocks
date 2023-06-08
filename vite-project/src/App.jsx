


import { useState } from 'react';

import './App.css'

function App() {
const [todo,setTodo] = useState('')
const [list,setList] = useState([])
 
const addList=()=>{
  setList([...list,todo])
  setTodo('')

}
  return (
    <>

<input value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
<button onClick={addList} >Add</button>
<br></br>
<ul>
{list.map((item,id)=>(
 
<li key={id}>{item}</li>


))}</ul>
 
  </>
  )
}

export default App




/*
<input type="range"  max="10" min={2} onChange={handleChange} value={result}/>

<textarea cols="30px" rows="10px" value={text} onChange={texthandleChange}></textarea>

<button onClick={subValue}  className="chakra-button css-1balgpm" title="h" >Submit</button>*/



/*
<Button onClick={()=>setStateResult(5+5) } title="h" className="chakra-button css-1balgpm"> Sum 5+5 = </Button>

<Button onClick={()=>setStateResult((5-5))} title="h" className="chakra-button css-1balgpm">Sub 5-5 = </Button>

<Button onClick={()=>setStateResult(5*5)} title="h" className="chakra-button css-1balgpm">Multi 5* 5 = </Button>

<Button onClick={()=>setStateResult(5/5)} title="h" className="chakra-button css-1balgpm">Div 5/5 = </Button>




*/


/*
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/book">Book</Link>

<br/><br/><br/>

<Routes>

<Route path="/" element={<p>Home Page</p>}></Route>  
<Route path="/about" element={<About/>}></Route>
<Route path="/*" element={<Notfound/>}></Route>
<Route path="/book" element={ <Booklist/> } > </Route>
<Route path="/book/:id" element={ <Book/> } > </Route>
</Routes>


<p>Hellow</p>

<input type='range' max="10" min={2} value={rat} onChange={(e)=>setRat(e.target.value)}></input>
<br/>
<textarea cols="30" rows="10" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
<br/>
<Box>
<button onClick={subValue}>submit</button>

</Box>
{rat}

<Footer></Footer>*/
