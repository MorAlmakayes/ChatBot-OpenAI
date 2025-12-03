import { useEffect, useState } from 'react'

function App() {
  const [massage,setMassage] = useState(' ');

  useEffect(()=> {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data =>setMassage(data.massage))
  }, []);
  return <p>{massage}</p>
}

export default App
