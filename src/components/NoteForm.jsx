import { useState } from "react"
import Text from './inputs/Text'
import Select from './inputs/Select'
import TextArea from './inputs/TextArea'

const NoteForm = ({ notes, setNotes }) => {
  /* 
  we could set every form item individually
  or we can also use a formData object

  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [category, setCategory] = useState('Work')
  const [description, setDescription] = useState('')*/

  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  })

  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleChange = (e) => {
    // this is pretty slick!
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // validation
    if (!formData.title || !formData.description) return
    // create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    }
    console.log([newNote, ...notes])
    // add notes to state
    setNotes([newNote, ...notes])
    // reset form
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    })
  }

  const toggleForm = () => setIsFormVisible(!isFormVisible)

  return (
    <>
      {/* toggle button */}
      <button
        onClick={toggleForm}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ❌" : "Add New Note ➕"}
      </button>
      {/* conditional form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <Text 
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              title={ formData.title}
              required={ true }
            />
          </div>
          <div className="mb-4">
            <Select 
              label="Priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              options={ ['High', 'Medium', 'Low' ]}
            ></Select>
          </div>
          <div className="mb-4">
            <Select 
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={ ['Work', 'Personal', 'Ideas' ]}
            ></Select>
          </div>
          <div className="mb-4">
            <TextArea 
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required={ true}
            />
          </div>
          <button className="w-full text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  )
}

export default NoteForm
