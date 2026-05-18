import './App.css'

function App() {
  
  const materials = [
  {
    id: 1,
    grade: '6th Grade',
    subject: 'Reading Interpretation'
  },

  {
    id: 2,
    grade: '9th Grade',
    subject: 'Chronicle'
  },

  {
    id: 3,
    grade: 'High School',
    subject: 'Grammar'
  }
]
  


  return (
    <div className="container">
      <h1>InCludedEducation</h1>
      
      <p className="description">
        A platform that allows teachers to access,
        organize and download educational materials.
      </p>

      <button>
        View Materials
      </button>
      <div className='materials'>
        {materials.map(material => (
          <div className='card' key={material.id}>
            <h3>{material.grade}</h3>
            <p>{material.subject}</p>
          </div>
        ))}
      </div>
    
    
    </div>
  )
}

export default App